"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import GoogleLogoutButton from "@/components/GoogleLogoutButton";
import {googleStatus, googleExchange} from "@/components/GoogleSession";
import { useSearchParams } from 'next/navigation'


export default function Page() {
    const [message, setMessage] = useState("code 파라미터가 수신되면 자동으로 토큰 교환을 시도합니다.");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      setMessage("Authorization code 수신...");

      fetch("https://localhost:8000/auth/exchange", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: code,
          redirect_uri: "https://localhost:3000/auth/callback", // .env.local에 정의 필요
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Token exchange failed (status " + res.status + ")");
          }
          setMessage("세션 쿠키가 발급되었습니다. 다른 API를 호출해보세요.");

          // URL 정리 (쿼리스트링 제거)
          window.history.replaceState(null, "", window.location.pathname);
        })
        .catch((err) => {
          setMessage(err.message);
        });
    }
  }, []);

    return (
    <div>
      <p>{message}</p>

       <h1>callback</h1>

            <GoogleLogoutButton />
            <Link href="https://console.cloud.google.com">move GCP</Link>
    </div>
  );
}
