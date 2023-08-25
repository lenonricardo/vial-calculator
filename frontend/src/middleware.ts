import { NextResponse } from 'next/server' //eslint-disable-line
import type { NextRequest } from 'next/server' //eslint-disable-line

export function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')?.value
  if (token) return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/signin'
}
