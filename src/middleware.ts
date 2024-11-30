import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {getTokenFromCookies} from "@/utils/getCookie";

export function middleware(request: NextRequest) {
  const userToken = getTokenFromCookies(request);

  if(!userToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/announcement','/education','/filter','/home','/members','/settings','/'],
}