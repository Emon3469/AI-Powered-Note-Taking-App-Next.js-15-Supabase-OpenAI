import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LogOutButton from "./LogOutButton";
import { getUser } from "@/auth/server";
import { SidebarTrigger } from "./ui/sidebar";



async function Header() {
    const user = await getUser();
    
    return (
        <header className="bg-popover relative flex h-16 w-full items-center justify-between px-3 sm:px-8" style={{ boxShadow: shadow}}>
            <SidebarTrigger className="absolute left-1 top-1" />

            <Link className="flex items-end gap-2" href="/">
               <Image
                 src="/logo.svg"
                 alt="Logo"
                 height={50}
                 width={120}
                 className="rounded-full"
                 priority
               />
            </Link>

            <div className="flex gap-4">
                {
                    user ? (<LogOutButton />) : (
                        <>
                          <Button asChild>
                            <Link href="/sign-up" className="hidden sm:block">
                                Sign Up
                            </Link>
                          </Button>
                          <Button asChild>
                            <Link href="/login">Log In</Link>
                          </Button>
                        </>
                    )
                }
                <DarkModeToggle />
            </div>
        </header>
    );
}

export default Header;