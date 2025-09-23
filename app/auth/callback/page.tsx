"use client"
import Link from "next/link";
import GoogleLogoutButton from "@/components/GoogleLogoutButton";
import {googleStatus, googleExchange} from "@/components/GoogleSession";
import { useSearchParams } from 'next/navigation'

export default function Page() {
    const searchParams = useSearchParams()
    const code = searchParams.get('code');

    googleExchange(code);
    //googleStatus();

    return (
        <div>
            <h1>callback</h1>

            <GoogleLogoutButton />
            <Link href="https://console.cloud.google.com">move GCP</Link>
        </div>
    )
}