import { verify } from "jsonwebtoken";

import 'dotenv/config'
import { User } from "../models/user.js";
import { Admin } from "../models/admin.js";
import { formatError } from "../utils/formatError.js";
import { sendConfirmationEmail } from "../helpers/sendConfirmationEmail.js";



export const verifyToken = async (req, res, next) => {
    const token = req.header("user-token");
    if (!token) return res.status(401).json(formatError("Acceso denegado"));
    try {
        const decoded = verify(token, process.env.TOKEN_SECRET)//extrae del token
        req.userId = decoded.uid;

        let user = await User.findById(req.userId, { password: 0 });
        if (!user)
            user = await Admin.findById(req.userId, { password: 0 });
        if (!user) return res.redirect(303, "http://localhost:3000/login");


        if (!user.verify) {
            sendConfirmationEmail(token)
            throw new Error("Confirma tu email");
        }
        next();
    } catch (error) {
        return res.status(401).json(formatError(error.message));
    }
};


export const isAdmin = async (req, res, next) => {
    const admin = await Admin.findById(req.userId)
    if (!admin) return res.status(401).json(formatError("Debes ser admin"));
    //doble validacion
    if (admin?.Rol === "ROL_Admin") return next()
    else return res.status(401).json(formatError("Rol denegado"));

}