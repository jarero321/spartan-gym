"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import Loading from "@/app/loading";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function SignInPage() {
  const { status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const handleSignIn: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok && callback?.error === undefined) {
        toast.success("Logged in successfully!");
        router.refresh();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "authenticated") {
    return redirect("/");
  }

  return (
    <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Gym Management System
      </h2>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleSignIn)}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
          {errors &&
            errors.email &&
            typeof errors.email.message === "string" && (
              <p className="text-red-500 text-xs italic">
                {errors?.email?.message}
              </p>
            )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "This field is required" })}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {errors &&
            errors.password &&
            typeof errors.password.message === "string" && (
              <p className="text-red-500 text-xs italic">
                {errors?.password?.message}
              </p>
            )}
        </div>
        <div className="flex items-start">
          <a
            href="#"
            className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isSubmitting ? "Loading..." : "Sign in"}
        </button>
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          Not registered yet?{" "}
          <Link
            href={"/signup"}
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}
