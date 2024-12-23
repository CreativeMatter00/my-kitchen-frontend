"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { schema } from "./Schema";
import Input from "@/components/shared/Input";
import ImageInput from "@/components/shared/ImageInput";
import { useAddData } from "@/hooks/useApi";
import { toast } from "sonner";
import { useCookies } from "next-client-cookies";
import { FormModalProps } from "../../../../types";
import FormSubmitButton from "@/components/shared/FormSubmitButton";


const Add: React.FC<FormModalProps> = ({ modalClose }) => {
    const router = useRouter();
    const cookies = useCookies();
    const token = cookies.get('myKitchenAccessToken')
    const {
        control,
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema) as any,
    });

    const addBrand = useAddData(['brands'], `/v1/brand/create-brand`, token)


    const onSubmit = (data: any) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        if (data.logo && data.logo[0]) {           // Check if logo is provided
            formData.append("logo", data.logo[0]);   // Append logo file to FormData
        }
        try {
            addBrand.mutate(formData, {
                onSuccess: (responseData) => {
                    console.log("responseData", responseData)
                    toast.success("Successfully added new brand!");
                    reset();
                    modalClose(false);
                },
                onError: (error: any) => {
                    toast.error("Failed to create new brand");
                },
            });
        } catch (error: any) {
            console.error("Error uploading image:", error);
        }
    };

    const onError = (e: any) => {
        console.error("Form validation error:", e);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="container mx-auto px-3 mt-5 space-y-4"
        >

            <h2 className="text-xl font-semibold text-primary">Add New Brand</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <Input
                    label="Brand Name"
                    name="name"
                    type="text"
                    placeholder="Enter brand name"
                    register={register}
                    error={errors.name}
                    required
                />

                <Input
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Enter product description"
                    register={register}
                    error={errors.description}

                />

                {/* Image Upload */}
                <div className="col-span-1 lg:col-span-2"
                >
                    <ImageInput
                        label="Logo"
                        name="logo"
                        register={register}
                        error={errors.logo}
                        required
                    />
                </div>

            </div>
            {/* Product Name */}
            <FormSubmitButton
                status={addBrand.status}
                buttonName="Add Brand"
                context="Adding"
            />
        </form>
    );
};

export default Add;
