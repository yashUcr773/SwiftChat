import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastContext from "./Context/ToasterContext";
import AuthContext from "./Context/AuthContext";
import ActiveStatus from "@/components/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SwiftChat.",
    description: "Send messages to your friends.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthContext>
                    <ToastContext></ToastContext>
                    <ActiveStatus></ActiveStatus>
                    {children}
                </AuthContext>
            </body>
        </html>
    );
}
