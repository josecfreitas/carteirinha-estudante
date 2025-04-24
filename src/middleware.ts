// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pull your credentials from env
const AUTH_USER = process.env.BASIC_AUTH_USER;
const AUTH_PASS = process.env.BASIC_AUTH_PASSWORD;

// Apply middleware to every path
export const config = {
  matcher: ["/"],
};

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  // If no Authorization header, ask for credentials
  if (!authHeader) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  // Decode “Basic base64(user:pass)”
  const [scheme, encoded] = authHeader.split(" ");
  if (scheme !== "Basic" || !encoded) {
    return new NextResponse("Bad authorization header", { status: 400 });
  }

  const [user, pass] = Buffer.from(encoded, "base64").toString().split(":");

  // Verify credentials
  if (user === AUTH_USER && pass === AUTH_PASS) {
    return NextResponse.next();
  }

  // Wrong creds → challenge again
  return new NextResponse("Invalid credentials", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
  });
}
