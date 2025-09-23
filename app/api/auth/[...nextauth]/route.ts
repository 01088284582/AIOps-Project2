import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    pages:{
        signIn: "/googleLogin",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if(account?.provider === "google") {
                console.log(
                    "route user : ", user,
                    "route account : ", account,
                    "route profile : ", profile,
                    "route email : ", email,
                    "route credentials : ", credentials
                );

                try{
                    const res = await fetch("https://localhost:8000/auth/login-spa", {})
                    console.log("signin res : ", res);
                }catch (e) {
                    console.log("signin error : ", e);
                }

                return true;
            }

            return false;
        },
        async session({ session, token, user }) {
            console.log("route session : ", session)
            return session // The return type will match the one returned in `useSession()`
        },
        async redirect({ url, baseUrl }) {
            console.log("route url : ", url)
            console.log("route baseUrl : ", baseUrl)
            return baseUrl
        },
    },
});

export { handler as GET, handler as POST };