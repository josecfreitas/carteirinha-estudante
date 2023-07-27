import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [username, password] = atob(authValue).split(':')

    const validUsername = process.env.BASIC_AUTH_USER
    const validPassword = process.env.BASIC_AUTH_PASSWORD

    console.info('username', username, 'password', password)

    if (username === validUsername && password === validPassword) {
      return NextResponse.next()
    }
  }

  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
