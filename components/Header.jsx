import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { PenBox } from "lucide-react";
import UserMenu from "./user-menu";
import { checkUser } from "@/lib/checkUser";

const Header = async() => {
  await checkUser()
  return (
    <header className="container mx-auto">
      <nav className="items-center  flex justify-between px-6 py-4 ">
        <Link href="/">
          <Image
            src={"/logoipsum-311.svg"}
            width={200}
            height={56}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href='/project/create'><Button variant="destructive"><PenBox/><span>Create Project</span></Button></Link>
          
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant={"outline"} size={"sm"}>
                LogIn
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
          <UserMenu/>
          </SignedIn>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
