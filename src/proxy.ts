import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_USER = process.env.BASIC_AUTH_USER;
const AUTH_PASS = process.env.BASIC_AUTH_PASSWORD;

export const config = {
  matcher: ["/", "/jose"],
};

export function proxy(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader) {
    return unauthorized("Authentication required");
  }

  const [scheme, encoded] = authHeader.split(" ");
  if (scheme !== "Basic" || !encoded) {
    return new NextResponse("Bad authorization header", { status: 400 });
  }

  const decoded = atob(encoded);
  const separatorIndex = decoded.indexOf(":");
  const user = decoded.slice(0, separatorIndex);
  const pass = decoded.slice(separatorIndex + 1);

  if (separatorIndex >= 0 && user === AUTH_USER && pass === AUTH_PASS) {
    return NextResponse.next();
  }

  return unauthorized("Invalid credentials");
}

function unauthorized(message: string) {
  return new NextResponse(message, {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
  });
}
