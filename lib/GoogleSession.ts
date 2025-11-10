"use client"

//백엔드로 로그아웃 요청
export async function googleLogout() {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/logout', {
        method: 'POST',
        credentials: 'include',
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("logout data : ", data);
            window.location.href = process.env.NEXT_PUBLIC_FRONTEND_URL + "/login";
        });

}

//백엔드에서 로그인 상태 체크
export function googleStatus() {
    return fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/status', {
        method: 'GET',
        credentials: 'include'
    })
        .then((res) => res.json())
        .catch((error) => {
            console.error("googleStatus fetch error", error);
            return null;
        })
        .then((data) => {
            //console.log("googleStatus() > status data : ", data);
            return data;
        });
}

/*
export async function googleExchange(code: string | null) {
    const param = {
        code: code,
        redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
    }
    console.log("exchange param : ", param);

    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/exchange', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify(param),
    });
    const data = await res.json();
    console.log("exchange data : ", data);

    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('google-session-updated'));
    }

    return data;
}
*/