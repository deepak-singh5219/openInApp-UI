"use client";
import { AuthButtons } from "@/components/UI";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();
  const session = useSession();
  if (session.status === "unauthenticated") router.push("/login");
  const googleSignIn = () => {
    signIn("google", {
      callbackUrl: "/home",
    });
  };
  const googleSignOut = () => {
    signOut();
    if (session.status === "unauthenticated") router.push("/login");
  };
  useEffect(()=> router.push("/login"));

  return (
    <div className="flex justify-center items-center w-screen h-screen flex flex-col">
      <div className="mb-10">
        <h1>This is a Landing Page (Under Construction). Please go to</h1>
        <Link href="/home">
          <p className="font-bold underline ml-2 text-center">Home Page</p>
        </Link>
      </div>
      <div>
        {session.status === "authenticated" ? (
          <AuthButtons
            title="Sign Out from Google"
            color="#FFFFFF"
            icon={<GoogleIcon />}
            onClick={googleSignOut}
          />
        ) : (
          <AuthButtons
            title="Sign in with Google"
            color="#FFFFFF"
            icon={<GoogleIcon />}
            onClick={googleSignIn}
          />
        )}
      </div>
    </div>
  );
}
