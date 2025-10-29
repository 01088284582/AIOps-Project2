'use client';
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import {googleStatus} from "@/lib/GoogleSession";

function AuthCheck() {
    const pathname = usePathname()
    console.log("AuthCheck pathname : ", pathname);

    useEffect(() => {
        const fetchStatus = () => {
            googleStatus()
                .then((data) => {
                    console.log("AuthCheck res : ", data.authenticated);
                    if (!data.authenticated ) {
                        window.location.href = process.env.NEXT_PUBLIC_FRONTEND_URL+"/login";
                    }
                })
                .catch((error) => console.error("googleStatus error", error));
        };

        if(pathname === "/login") return;
        if(pathname === "/auth/callback") return;
        console.log("AuthCheck fetchStatus run");
        fetchStatus();

        const handler = () => fetchStatus();
        window.addEventListener('google-session-updated', handler);

        return () => {
            window.removeEventListener('google-session-updated', handler);
        };

    }, []);

    return (
        <></>
    )
}

export default AuthCheck;