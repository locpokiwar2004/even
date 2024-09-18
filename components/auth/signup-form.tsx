"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import s from "../../app/[locale]/signup/page.module.css";
import { registerUser } from "@/app/api/users";
import { toastError, toastSuccess } from "../common/toast";
import Image from "next/image";
import { randomBytes } from "crypto";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface FormData {
    fullname: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const SignUpForm: React.FC = () => {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue
    } = useForm<FormData>();

    const { t } = useTranslation();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const { confirmPassword, ...userData } = data;

        try {
            const response = await registerUser(userData);
            if (response.status == 201) {
                console.log("Registration Successful", response.data.message);
                toastSuccess(t("auth:SignUpSuccess"));
                router.push("/login");
                return response.data;
            } else {
                console.error("Registration Failed", response.data.message);
                toastError(response.data.message);
            }
        } catch (error) {
            toastError(t("auth:SignUpFailed"));
            console.error("Error submitting form", error);
        }
    };

    const generatePassword = (length: number): string => {
        return randomBytes(length).toString("hex").slice(0, length);
    };

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(12);
        setValue("password", newPassword);
        setValue("confirmPassword", newPassword);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div>
                <label htmlFor="fullname" className="block text-xs font-medium text-gray-700">
                    {t("auth:Fullname")}
                </label>
                <input
                    type="text"
                    id="fullname"
                    {...register("fullname", {
                        required: t("auth:FullnameRequired"),
                        pattern: { value: /^[a-zA-Z\s]+$/, message: t("auth:InvalidFullname") }
                    })}
                    className={` ${s["input"]} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm`}
                    placeholder={t("auth:Fullname")}
                />
                {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
            </div>

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
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                    {t("auth:Phone")}
                </label>
                <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                        required: t("auth:PhoneRequired"),
                        pattern: { value: /^\+?\d{10,15}$/, message: t("auth:InvalidPhone") }
                    })}
                    className={` ${s["input"]} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm`}
                    placeholder={t("auth:Phone")}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div>
                <div className="flex flex-row justify-between">
                    <label htmlFor="password" className="block text-xs font-medium text-gray-700">
                        {t("auth:Password")}
                    </label>
                    <label
                        style={{ userSelect: "none" }}
                        htmlFor="password"
                        className="block text-xs font-bold text-blue-700"
                        onClick={handleGeneratePassword}
                    >
                        {t("auth:GenPassword")}
                    </label>
                </div>

                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        {...register("password", {
                            required: t("auth:PasswordRequired"),
                            minLength: { value: 8, message: t("auth:PasswordMinLength") }
                        })}
                        className={` ${s["input"]} mt-1 pr-8 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm`}
                        placeholder={t("auth:Password")}
                    />
                    <span
                        style={{ userSelect: "none" }}
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer text-gray-600"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div>
                <label htmlFor="confirm-password" className="block text-xs font-medium text-gray-700">
                    {t("auth:ConfirmPassword")}
                </label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirm-password"
                        {...register("confirmPassword", {
                            required: t("auth:ConfirmPasswordRequired"),
                            validate: (value) => value === watch("password") || t("auth:PasswordsMustMatch")
                        })}
                        className={` ${s["input"]} mt-1 pr-8 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm`}
                        placeholder={t("auth:ConfirmPassword")}
                    />
                    <span
                        style={{ userSelect: "none" }}
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer text-gray-600"
                    >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
            <p className="text-xs pb-5 font-light text-gray-400 mb-12">{t("auth:SignUpDescription")}</p>
            <button
                type="submit"
                className={` ${s["btn"]} w-full py-2 px-4  text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 `}
            >
                {t("auth:SignUp")}
            </button>

            <div className="text-center py-5">
                <p className="text-xs text-gray-400">{t("auth:Or")}</p>
                <button className="mt-4 flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Image src="https://www.google.com/favicon.ico" alt="Google Icon" width={20} height={20} />
                    {t("auth:SignWithGoogle")}
                </button>
            </div>

            <p className="text-sm text-center text-gray-400">
                {t("auth:AlreadyHaveAccount")}
                <Link href="/login" className="font-bold">
                    {t("auth:Login")}
                </Link>
            </p>
        </form>
    );
};

export default SignUpForm;
