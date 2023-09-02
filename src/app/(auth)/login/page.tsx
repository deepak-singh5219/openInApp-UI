"use client";
import { FC } from "react";
import { AuthButtons, Button, Input, Text } from "@/components/UI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid Email" }),
  password: z.string().min(8),
});

export type IForm = z.infer<typeof schema>;

interface ILoginForm {}

const LoginForm: FC<ILoginForm> = () => {
  const session = useSession();
  const googleSignIn = () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: zodResolver(schema) });

  const onSubmitReady = async (data: IForm) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/home",
    });
    console.log(res);
  };
  return (
    <>
      <div className="flex flex-1 flex-col px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full md:max-w-md flex flex-col">
          <Text variant="titleXl" className="inline-block max-w-max">
            Sign In
          </Text>
          <Text variant="titleSm" className="inline-block max-w-max mt-2">
            Sign in to your account
          </Text>
          <div className="flex flex-col md:flex-row mt-8 md:gap-x-8 gap-y-5">
            <AuthButtons
              title="Sign in with Google"
              color="#FFFFFF"
              icon={<GoogleIcon />}
              onClick={googleSignIn}
            />
            <AuthButtons
              title="Sign in with Apple"
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
            <Text
              variant="infoXs"
              className="inline-block max-w-max mt-8 text-blue"
            >
              Forgot password?
            </Text>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-buttonSecondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <p className="text-center text-sm text-secondary">
          Dont have an account?{" "}
          <Link href="/signup">
            <Text
              variant="infoSm"
              className="inline-block max-w-max mt-8 text-blue"
            >
              Register here
            </Text>
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
