export default function middleware(request) {
  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')
    if (user === 'xacti' && pwd === 'xacti2026') {
      return
    }
  }

  return new Response('このページにアクセスするには認証が必要です。', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Xacti Private", charset="UTF-8"',
    },
  })
}

export const config = {
  matcher: '/:path*',
}
