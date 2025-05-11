// /middleware.ts
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('sessionToken'); // Replace with your auth token check
  console.log(`Middleware: Token: ${token}`);
  console.log(`Middleware: Token: ${token ? 'Present' : 'Absent'}`);
  // Define public routes that don't require authentication
  const publicRoutes = ['/'];

  // Define protected routes that require authentication
  const protectedRoutes = ['/about']; // Add more routes as needed

  // Log for debugging
  console.log(`Middleware: Pathname: ${pathname}, Token: ${token ? 'Present' : 'Absent'}`);

  // If user is authenticated
  if (token) {
    // Prevent authenticated users from accessing /login or /signup
    if (publicRoutes.includes(pathname) && pathname !== '/') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else {
    // If user is not authenticated and trying to access a protected route
    if (protectedRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Apply middleware to relevant routes
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};