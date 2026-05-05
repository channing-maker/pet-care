import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "萌爪洗护社 | 宠物洗护美容预约",
  description:
    "萌爪洗护社提供宠物洗澡、护理、美容造型、皮毛养护与上门接送服务。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
