// @ts-nocheck
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import ansis from 'ansis';
import { red, black, inverse, reset } from 'ansis/colors';
export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  /*
  * Vercel already logs these URL requests. Avoid logging them again.
   */
  if (!process.env.NEXT_PUBLIC_IS_VERCEL) {
    console.debug(ansis.green`${req.method}:${reset.cyan` ${req.url}`}`);
  }


  // if user is signed in and the current path is / redirect the user to /account
  // if (req.nextUrl.pathname === '/docs/') {
  //   return NextResponse.redirect(new URL('/docs/What-is-LeapTable-fde51521aa394effa97884e33d17d834/', req.url))
  // }

  return res
}
