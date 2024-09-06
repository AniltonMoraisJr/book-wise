import { NextRequest, NextResponse } from 'next/server'

// This is an example of middleware that checks if the user is authenticated.
export function middleware(req: NextRequest) {
  // Get the token (or authentication cookie) from the request.
  const token = req.cookies.get('next-auth.session-token') // Assuming you store a token in cookies

  // Define the URLs that do not need authentication
  const publicPaths = ['/', '/api/auth']

  // Check if the user is accessing a protected page
  if (!token && !publicPaths.includes(req.nextUrl.pathname)) {
    // If there's no token and the route isn't public, redirect to the login page
    return NextResponse.redirect(new URL('/', req.url))
  }

  // If the user is authenticated or on a public route, allow the request
  return NextResponse.next()
}

// Specify the paths to run this middleware
export const config = {
  matcher: [
    // Define protected routes using patterns
    '/dashboard/:path*', // Example of protecting /dashboard and its subroutes
  ],
}
