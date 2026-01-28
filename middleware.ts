import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Redirect root / to /en/docs/v1/introduction
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en/docs/v1/introduction', request.url))
  }
}

export const config = {
  matcher: '/',
}