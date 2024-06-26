import type { Metadata } from "next";

import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";
import Script from "next/script";
import Header from "./common/header";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });
declare global {
    interface Window {
        kakao: any;
        Kakao: any;
    }
}
export const metadata: Metadata = {
    title: "농놀고",
    description: "언제 어디서든 편하게 농구하자",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={notoSansKr.className}>
                <Header />
                {children}
            </body>
            <Script
                type="text/javascript"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services`}
            />
        </html>
    );
}
