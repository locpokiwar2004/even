"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import s from "../../app/[locale]/signup/page.module.css";
import { loginUser } from "@/app/api/users";
import { toastError, toastSuccess } from "../common/toast";
import Image from "next/image";

interface FormData {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const { t } = useTranslation();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await loginUser(data);
            if (response.status === 201) {
                console.log('Login successful', response.data);
                localStorage.setItem('c ', response.data.access_token); 
                toastSuccess(t("auth:LoginSuccess"));
                router.push("/");
            } else {
                console.error('Login failed', response.data.message);
                toastError(response.data.message);
            }
        } catch (error) {
            toastError(t("auth:LoginFailed"));
            console.error('Error during login', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                    {t("auth:Email")}
                </label>
                <input
                    type="text"
                    id="email"
                    {...register("email", {
                        required: t("auth:EmailRequired"),
                        pattern: { value: /^\S+@\S+$/i, message: t("auth:InvalidEmail") }
                    })}
                    className={` ${s["input"]} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm`}
                    placeholder={t("auth:Email")}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
        
            <div>
                <label htmlFor="password" className="block text-xs font-medium text-gray-700">
                    {t("auth:Password")}
                </label>
                <input
                    type="password"
                    id="password"
                    {...register("password", {
                        required: t("auth:PasswordRequired")
                    })}
                    className={` ${s["input"]} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm`}
                    placeholder={t("auth:Password")}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            
            <div className="flex">
                <input
                type="checkbox"
                id="remember"/>
                <label className="text-xs font-regular text-gray-500 ms-1">{t("auth:RememberMe")}</label>

                <Link href="/forgot-password" className="text-xs font-semibold text-gray-500 ms-auto">
                    {t("auth:ForgotPassword")}
                </Link>
            </div>

            <button
                type="submit"
                className={` ${s["btn"]} w-full py-2 px-4  text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 `}
            >
                {t("auth:Login")}
            </button>

            <div className="text-center py-5">
                <p className="text-xs text-gray-400">{t("auth:Or")}</p>
                <button className="mt-5 flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Image src="https://www.google.com/favicon.ico" alt="Google Icon" width={20} height={20} />
                    {t("auth:SignWithGoogle")}
                </button>
            </div>

            <p className="text-sm text-center text-gray-400">
                {t("auth:NotRegistered")}
                <Link href="/signup" className="font-bold">
                    {t("auth:CreateAccount")}
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;
