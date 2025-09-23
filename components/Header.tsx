'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";
import GoogleLogoutButton from "./GoogleLogoutButton";
import {googleStatus} from "@/components/GoogleSession";

function Header() {
    const router = useRouter();
    const session = false;
    googleStatus();

    return (
        <header className="sticky top-0 z-10 mb-5 flex items-center justify-between border-b border-solid border-gray-300 bg-white text-3xl">
            {session ? (
                <GoogleLogoutButton />
            ) : (
                <Link href="https://localhost:8000/auth/login-spa">login</Link>
            )}
        </header>
    );
}
export default Header;