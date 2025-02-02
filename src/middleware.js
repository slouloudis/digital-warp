import {
    clerkMiddleware,
    createRouteMatcher
  } from '@clerk/nextjs/server';
  
  const isProtectedRoute = createRouteMatcher([
    '/games/:game_id/edit(.*)',
    '/games/submit-game(.*)'
  ]);

  // if the next request is to go to a protected route the protechmethod of the auth object is called, redirecting the user to sign in. 
  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};