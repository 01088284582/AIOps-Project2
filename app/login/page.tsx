import Link from "next/link";

function LoginPage() {
    const loginUrl = process.env.NEXT_PUBLIC_BACKEND_URL+"/auth/login-spa";

    return (
        <>
            <div className="login-page" data-name="AIOps_01_Login" data-node-id="450:22752">

                <div className="login-bg" data-name="bg" data-node-id="450:22753">
                    <div className="login-visual" data-name="img" data-node-id="450:22765"></div>
                </div>

                <div className="login-body" data-name="Body" data-node-id="450:22768">

                    <div className="login-logo" data-name="BI_GENA" data-node-id="450:22770">
                        <div className="login-logo-symbol">
                            <img src="../images/Symbol.png" alt="G-AIOps Symbol"/>
                        </div>
                        <p className="login-logo-text">G-AIOps</p>
                    </div>

                    <div className="login-contents" data-name="contents" data-node-id="450:22777">

                        <div className="login-google-btn">
                            <Link href={loginUrl}>
                                <button className="btn-login-google" data-name="btn_Google Login" data-node-id="575:5613">
                                    <div className="btn-login-google__content">
                                        <div className="btn-login-google__logo">
                                            <svg width="24" height="24" viewBox="0 0 45 45">
                                                <use href="#icon-google"></use>
                                            </svg>
                                        </div>
                                        <span className="btn-login-google__text">Continue with Google</span>
                                    </div>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <svg className="hide" xmlns="http://www.w3.org/2000/svg">

                <symbol id="icon-google" viewBox="0 0 45 45">
                    <path
                        d="M31.62 22.7156C31.62 22.042 31.5595 21.3943 31.4473 20.7725H22.5V24.4516H27.6127C27.3882 25.6347 26.7145 26.6366 25.7041 27.3102V29.7025H28.7873C30.5836 28.0443 31.62 25.6088 31.62 22.7156Z"
                        fill="#4285F4"/>
                    <path
                        d="M22.4995 31.9998C25.0645 31.9998 27.2149 31.1535 28.7867 29.7026L25.7036 27.3103C24.8572 27.8803 23.7776 28.2257 22.4995 28.2257C20.0295 28.2257 17.9308 26.5589 17.1795 24.3135H14.0186V26.7662C15.5817 29.8667 18.7858 31.9998 22.4995 31.9998Z"
                        fill="#34A853"/>
                    <path
                        d="M17.18 24.3049C16.99 23.7349 16.8777 23.1304 16.8777 22.4999C16.8777 21.8695 16.99 21.2649 17.18 20.6949V18.2422H14.0191C13.3714 19.5204 13 20.9626 13 22.4999C13 24.0372 13.3714 25.4795 14.0191 26.7576L16.4805 24.8404L17.18 24.3049Z"
                        fill="#FBBC05"/>
                    <path
                        d="M22.4995 16.7827C23.8986 16.7827 25.1422 17.2664 26.1354 18.1991L28.8558 15.4786C27.2063 13.9414 25.0645 13 22.4995 13C18.7858 13 15.5817 15.1332 14.0186 18.2423L17.1795 20.695C17.9308 18.4495 20.0295 16.7827 22.4995 16.7827Z"
                        fill="#EA4335"/>
                </symbol>
            </svg>
        </>
    )
}

export default LoginPage;