import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
// import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      // @ts-ignore
      scope: 'read:user',
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
  debug: false,
})

export { handler as GET, handler as POST }
