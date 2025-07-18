import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
        GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
    ]
}
