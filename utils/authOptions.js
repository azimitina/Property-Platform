import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

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
      await connectDB();

      const user = await User.findOne({ email: profile.email });

      // if not, create user
      if (!user) {
        // Truncate user name if too long
        const username = profile.name.slice(0, 20);

        await User.create({
          username,
          email: profile.email,
          image: profile.picture,
        });
      }

      return true;
    },
    // Session callback functions that modifies the session object
    async session({ session }) {
      // Get the user from database
      const user = await User.findOne({ email: session.user.email });

      // assign the user id for the session object
      session.user.id = user._id.toString();

      // return the session object
      return session;
    },
  },
};
