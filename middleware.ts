import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {googleStatus} from "@/lib/GoogleSession";

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    /*
    console.log("middleware request.url : ", request.url);
    console.log("middleware request.nextUrl pathname : ", request.nextUrl.pathname);

    const session : { authenticated: boolean; email: string | null; name: string | null } = await googleStatus();
    console.log("middleware session : ", session.authenticated);
    */
    return response;
}