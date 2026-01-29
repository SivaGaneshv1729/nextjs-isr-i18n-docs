import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Middleware logic removed for root redirect to allow Landing Page
}

export const config = {
  matcher: '/',
}