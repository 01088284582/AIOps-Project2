export async function googleLogout() {
    const res = await fetch('https://localhost:8000/auth/logout', {
        method: 'POST'
    })
        .then((response) => response.json())
        .then((data) => console.log("logout data : ", data));

}

export function googleStatus() {
    return fetch('https://localhost:8000/auth/status', {
        method: 'GET',
        credentials: 'include',
    })
        .then((res) => res.json())
        .catch((error) => {
            console.error("googleStatus fetch error", error);
            return null;
        })
        .then((data) => {
            console.log("status data : ", data);
            if (typeof window !== 'undefined') {
                void fetch('/api/status-log', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });
            }
            return data;
        });
}

export async function googleExchange(code: string | null) {
    const param = {
        code: code,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI
    }
    console.log("exchange param : ", param);

    const res = await fetch('https://localhost:8000/auth/exchange', {
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
