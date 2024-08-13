import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //Invoked whenever a user logs in
    async signIn({ profile }) {
      // connect to database
      // check if user exists
      // if not, create user
      // return true to allow sign in
    },
    // Session callback functions that modifies the session object
    async session({ session }) {
      // Get the user from database
      // assign the user id for the session object
      // return the session object
    },
  },
};
