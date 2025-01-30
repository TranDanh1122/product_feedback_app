import React from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarComponent from "@/components/app/SidebarComponent";
export default function Home(): React.JSX.Element {
    return <>
        <SidebarProvider>
            <SidebarInset>
                <main className="container">
                    <SidebarComponent />

                    <SidebarTrigger />
                </main>
            </SidebarInset>
        </SidebarProvider>
    </>

}