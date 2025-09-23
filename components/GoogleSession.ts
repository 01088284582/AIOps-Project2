export async function googleLogout() {
    const res = await fetch('https://localhost:8000/auth/logout', {
        method: 'POST'
    })
        .then((response) => response.json())
        .then((data) => console.log("logout data : ", data));

}

export async function googleStatus() {
    const res = await fetch('https://localhost:8000/auth/status', {
        method: 'GET'
    });
    const data = await res.json();

    //console.log("status res : ", res );
    console.log("status data : ", data );

    return data.authenticated;
}

export async function googleExchange(code: string | null) {
    const param = {
        code: code,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI
    }
    console.log("exchange param : ", param);

    const res =await fetch('https://localhost:8000/auth/exchange', {
        method: 'POST',
        headers: {"Content-Type": "application/json",},
        body : JSON.stringify(param)
    });
    const data = await res.json();
    console.log("exchange data : ", data );

}