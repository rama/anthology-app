import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/dashboard"];

export default async function middleware(request) {
	const path = request.nextUrl.pathname;
	const token = (await cookies()).get("authToken")?.value;

	if (protectedRoutes.includes(path) && !token) {
		return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
	}

	return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
	matcher: ["/((?!_next/static|_next/image|.*\\.png$).*)"],
};
