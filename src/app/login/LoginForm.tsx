"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useAddData } from "@/hooks/useApi";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Input from "@/components/shared/Input";
import { loginSchema } from "./loginSchma";

interface UserInfo {
  email: string;
  password: string;
}
function LoginForm() {
  const cookies = useCookies();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserInfo>({
    resolver: yupResolver(loginSchema),
  });
  const [passView, setPassView] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = useAddData(["user"], `/v1/auth/signin`);

  const onSubmit = async (data: UserInfo) => {
    try {
      signIn.mutate(data, {
        onSuccess: (responseData) => {
          toast.success("Login successfully");
          cookies.set("myKitchenAccessToken", responseData.data.accessToken);
          cookies.set("myKitchenRefreshToken", responseData.data.refreshToken);
          reset();
          router.push(`/admin/brand`);
        },
        onError: (error: any) => {
          toast.error("Failed to login");
        },
      });
    } catch (error: any) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-col gap-1">
        <h1 className=" text-[#333333] text-4xl leading-[39px] text-center font-bold">
          Welcome Back
        </h1>
        <p className="text-[#8A8A8A] text-sm leading-[21px] text-center">
          Welcome Back, Please enter Your details
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full max-w-[370px] flex justify-center flex-col gap-4"
      >
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          register={register}
          error={errors.email}
          required
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          register={register}
          error={errors.password}
          required
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
        <div>
          {loading ? (
            <div className="flex items-center justify-center">
              {/* <BeatLoader color="#000000" size={14} /> */}
            </div>
          ) : (
            <input
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-brandColor transition cursor-pointer"
              value={"Log In"}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
