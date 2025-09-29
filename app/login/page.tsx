import Link from "next/link";

function LoginPage() {
    const loginUrl = process.env.NEXT_PUBLIC_BACKEND_URL+"/auth/login-spa";

    return (
        <div>
            <Link href={loginUrl}>login</Link>
        </div>
    )
}
export default LoginPage;