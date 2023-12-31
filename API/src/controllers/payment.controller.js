import mercadopago from "mercadopago";
import { formatError } from "../utils/formatError.js";
import "dotenv/config";
import { User } from "../models/user.js";
import { Product } from "../models/product.js";
export const createOrder = async (req, res) => {
  try {
    const data = req.body.value;
console.log(data);
    mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN,
    });
    const items = data.map((producto) => {
      return {
        title: producto.title,
        quantity: producto.count,
        currency_id: "ARS",
        unit_price: producto.price,
        description: producto.description,
       picture_url: producto.image,
      };
    });

    var preference = {
      items: items,
      back_urls: {
        success: "http://localhost:3001/",
        failure: "http://localhost:3000/payment/failure",
        pending: "http://localhost:3000/payment/pending",
      },
      notification_url: "https://82a4-190-17-84-58.ngrok.io/payment/webhook",
    };

    const result = await mercadopago.preferences.create(preference);

    res.send(result.response.init_point);
  } catch (error) {
    console.log(error);
  }
};

export const succesOrder = async (req, res) => {
  try {
    res.send("succes-order");
  } catch (error) {
    console.log(error);
  }
};
export const failureOrder = async (req, res) => {
  try {
    res.send("failure-order");
  } catch (error) {
    console.log(error);
  }
};
export const pendingOrder = async (req, res) => {
  try {
    res.send("pending-order");
  } catch (error) {
    console.log(error);
  }
};

export const reciveWebhook = async (req, res) => {
  try {
    const payment = req.query;
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);

      //ajustar fecha
      let currentDate = new Date();
      const timeZoneOffset = -3; // La diferencia de la zona horaria en horas
      currentDate.setHours(currentDate.getHours() + timeZoneOffset);
      //ajustar fecha

      //store in base
      let informationPayment = {
        dataCard: {
          ultDigit: data.response.card.last_four_digits,
          dniComprador: data.response.card.cardholder.identification,
        },
        payer: data.body.payer,
        payment: data.response.payment_method,
        status: data.response.status,
        status_detail: data.response.status_detail,
        itemsComprados: data.response.additional_info.items,
        entrega: "pendiente",
        fecha: currentDate,
      };
      // console.log("DATAPAYMENT-----", informationPayment);

      if (data) {
        const query = { email: informationPayment.payer.email };
        await User.findOneAndUpdate(
          query,
          {
            $push: { carrito: informationPayment },
          },
          { new: true }
        );

        for (const item of informationPayment.itemsComprados) {
          await Product.findOneAndUpdate(
            { name: item.title },
            {
              $inc: { amount: -Number(item.quantity) },
            },
            { new: true }
          );
        }
      }
      res.sendStatus(200);
    }
  } catch (error) {
    res.status(400).json(formatError(error.message));
  }
};
