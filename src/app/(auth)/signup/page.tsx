"use client";
import { FC } from "react";
import { AuthButtons, Button, Input, Text } from "@/components/UI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import AppleIcon from "@mui/icons-material/Apple";
import Link from "next/link";
import { GoogleIcon } from "../../../../public/assets/icons";
import { signIn, useSession } from "next-auth/react";

const schema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Please enter a valid Email" }),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
export type IForm = z.infer<typeof schema>;

interface ISignUpForm {}

const Signup: FC<ISignUpForm> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: zodResolver(schema) });
  const router = useRouter();
  const session = useSession();
  const googleSignIn = () => {
    signIn("google");
    if(session.status === "authenticated") router.push('/home');
  };
  const onSubmitReady = async (data: IForm) => {
    const response = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_APIAUTH!,
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    if (result?.status == "failed") {
      return toast.error("Failed");
    }
    toast.success("Success");
    router.push("/login");
  };
  return (
    <>
      <div className="flex flex-1 flex-col px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full md:max-w-md flex flex-col">
          <Text variant="titleXl" className="inline-block max-w-max">
            Sign Up
          </Text>
          <Text variant="titleSm" className="inline-block max-w-max mt-2">
            Create a new Account
          </Text>
          <div className="flex flex-col md:flex-row mt-8 md:gap-x-8 gap-y-5">
            <AuthButtons
              title="Sign up with Google"
              color="#FFFFFF"
              icon={<GoogleIcon />}
              onClick={googleSignIn}
            />
            <AuthButtons
              title="Sign up with Apple"
              color="#FFFFFF"
              icon={<AppleIcon />}
              onClick={() => console.log("You clicked on the pink circle!")}
            />
          </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-cardLight p-8 rounded-[20px]">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmitReady)}>
            <div>
              <Text variant="titleSm" className="inline-block max-w-max mb-2">
                Name
              </Text>
              <Input
                variant="image"
                placeholder=""
                className="block w-full rounded-md  py-1.5 text-primary bg-cardSecondary shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttonSecondary sm:text-sm sm:leading-6"
                register={register("name")}
              />
              {errors.name?.message && (
                <Text variant="error" className="ml-2 mt-2">
                  {errors.name?.message}
                </Text>
              )}
            </div>
            <div>
              <Text variant="titleSm" className="inline-block max-w-max mb-2">
                Email address
              </Text>
              <Input
                variant="image"
                placeholder=""
                className="block w-full rounded-md  py-1.5 text-primary bg-cardSecondary shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttonSecondary sm:text-sm sm:leading-6"
                register={register("email")}
              />
              {errors.email?.message && (
                <Text variant="error" className="ml-2 mt-2">
                  {errors.email?.message}
                </Text>
              )}
            </div>
            <div>
              <Text variant="titleSm" className="inline-block max-w-max mb-2">
                Password
              </Text>
              <Input
                variant="image"
                placeholder=""
                className="block w-full rounded-md  py-1.5 text-primary bg-cardSecondary shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttonSecondary sm:text-sm sm:leading-6"
                register={register("password")}
              />
              {errors.password?.message && (
                <Text variant="error" className="ml-2 mt-2">
                  {errors.password?.message}
                </Text>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-buttonSecondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className="text-center text-sm mt-4 text-secondary">
          Already have an account? <Link href="/login">Login here</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
