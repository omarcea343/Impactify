import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@mail.com" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            authorize(credentials, req) {
                const user = { id: "1", name: 'J Smith', email: 'john@gmail.com'};
                return user;
            },
        }),
    ],
    callbacks: {
        jwt({account,token, user, profile, session}){
            console.log({
                account,
                token,
                user,
                profile,
            });
            return token;
        },
        //session(){
            
        //}
    }
});

export { handler as GET, handler as POST }