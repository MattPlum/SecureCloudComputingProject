import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { db } from "../../../firebase"


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:'846189577544-7uu11h1mft3poeq9rsaj6b35dd0tuh95.apps.googleusercontent.com',//process.env.GOOGLE_CLIENT_ID,
      clientSecret:'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',//process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here

    
  ],
  debug:true,
  adapter: FirebaseAdapter(db),
  

  /*callbacks: {
    jwt: async ({ token, user }) => {
        user && (token.user = user)
        return token
    },
    session: async ({ session, token }) => {
        session.user = token.user
        return session
    }
}*/


});





