// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const jwt = request.cookies.get("cookieToken");

  if (!jwt) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/carrito","/perfil","/compras"],
};
