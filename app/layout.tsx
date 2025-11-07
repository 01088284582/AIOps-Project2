import './css/base/index.css'
import './css/layout/index.css'
import './css/layout/header.css'
import './css/components/index.css'
import './css/components/contents-area.css'
import './css/components/Instance-template.css'
import './css/components/info_resourcecard.css'
import './css/components/input_login.css'
import './css/page/page-index.css'
import './css/page/login.css'
import AuthCheck from "@/components/AuthCheck";

export default function RootLayout({children}:{children: React.ReactNode;})
{
    return (
        <html lang="ko">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>AIOps</title>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>
        <AuthCheck/>
        <main className="document">
            {children}
        </main>
        </body>
        </html>
    );
}