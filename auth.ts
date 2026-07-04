import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "developer@example.com"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                if (
                    credentials?.email === "test@devconnect.com" && 
                    credentials?.password === "password123"
                ) {
                    return {
                        id: "1",
                        name: "Amit Kumar",
                        email: "test@devconnect.com",
                        role: "developer",
                    };
                }
                return null;
            }
        }),
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if(user) {
                token.role = (user as any).role;
            }
            return token;
        },
        async session({ session, token }) {
            if(session.user) {
                (session.user as any).role = token.role;
            }
            return session;
        },
    },
});