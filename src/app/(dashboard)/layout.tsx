import type {Metadata} from "next";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import {Suspense} from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Members",
  description: "Members of department",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header/>
      <div className="flex">
        <div className="basis-[200px]">
          <Menu/>
        </div>
        <div className="flex-auto">
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  )
    ;
}
