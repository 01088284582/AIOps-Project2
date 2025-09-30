"use client"
import { useEffect, useState } from "react";
//import {googleStatus, googleExchange} from "@/components/GoogleSession";
//import { useSearchParams } from 'next/navigation'


export default function Page() {
    //const searchParams = useSearchParams()
    //const code = searchParams.get('code');
    //googleExchange(code);

    const [message, setMessage] = useState("code 파라미터가 수신되면 자동으로 토큰 교환을 시도합니다.");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");

    console.log("PARAM !!!: ", params)
    console.log("CODE !!!: ", code)
    console.log("STATE !!!: ", state)
    console.log(process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI)

    if (code) {
      setMessage("Authorization code 수신...");
        const exchangeUrl = process.env.NEXT_PUBLIC_BACKEND_URL+"/auth/exchange";

        fetch(exchangeUrl, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: code,
          state: state,
          redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Token exchange failed (status " + res.status + ")");
          }
          setMessage("세션 쿠키가 발급되었습니다. 다른 API를 호출해보세요.");

          // URL 정리 (쿼리스트링 제거)
          window.history.replaceState(null, "", window.location.pathname);

          if (typeof window !== 'undefined') {
              window.dispatchEvent(new Event('google-session-updated'));
          }
          window.location.href = process.env.NEXT_PUBLIC_FRONTEND_URL + "/";
        })
        .catch((err) => {
          setMessage(err.message);
        });
    }
    else {
        window.location.href = process.env.NEXT_PUBLIC_FRONTEND_URL + "/";
    }
  }, []);

    return (
    <div>
      <p>{message}</p>
    </div>
  );
}
