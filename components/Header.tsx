'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import GoogleLogoutButton from "./GoogleLogoutButton";
import {googleStatus} from "@/lib/GoogleSession";

function Header() {
    const [status, setStatus] = useState<{ authenticated: boolean; email: string | null; name: string | null } | null>(null);
    const loginUrl = process.env.BACKEND_URL+"/auth/login-spa";

    useEffect(() => {
        const fetchStatus = () => {
            googleStatus()
                .then((data) => setStatus(data))
                .catch((error) => console.error("googleStatus error", error));
        };

        fetchStatus();

        const handler = () => fetchStatus();
        window.addEventListener('google-session-updated', handler);

        return () => {
            window.removeEventListener('google-session-updated', handler);
        };
    }, []);

    const session = status?.authenticated ?? false;

    return (
        <>
            <header className="sticky top-0 z-10 mb-2 flex items-center justify-between border-b border-solid border-gray-300 bg-white text-3xl">
                {session ? (
                    <div className="flex items-center gap-4">
                        <span>{status?.name ?? "Unknown"}</span>
                        <GoogleLogoutButton />
                    </div>
                ) : (
                    <Link href={loginUrl}>login</Link>
                )}
            </header>
            <div className="mb-5 text-xs text-gray-500">
                status data : {JSON.stringify(status)}
            </div>
        </>
    );
}
export default Header;
