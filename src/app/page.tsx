"use client";
import { AuthButtons } from "@/components/UI";
import GoogleIcon from "@mui/icons-material/Google";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const session = useSession();
  if (session.status === "unauthenticated") router.push("/login");
  const googleSignOut = () => {
    signOut();
    if (session.status === "unauthenticated") router.push("/login");
  };
  return (
    <div>
      <h1>Home</h1>
      <AuthButtons
        title="Sign Out from Google"
        color="#FFFFFF"
        icon={<GoogleIcon />}
        onClick={googleSignOut}
      />
    </div>
  );
}
