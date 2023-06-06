import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      // profile(profile) {
      //   return {
      //     profile
      //   }
      // }
    }),
  ],
  secret: process.env.JWT_SECRET,
  // pages: {
  // 	signIn: '/auth/signin',
  // },
};

export default NextAuth(authOptions);
