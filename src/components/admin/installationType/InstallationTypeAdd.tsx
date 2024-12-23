"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import Input from "@/components/shared/Input";
import ImageInput from "@/components/shared/ImageInput";
import { useAddData } from "@/hooks/useApi";
import { toast } from "sonner";
import { useCookies } from "next-client-cookies";
import { FormModalProps } from "../../../../types";
import FormSubmitButton from "@/components/shared/FormSubmitButton";
import { schema } from "./Schema";


const InstallationTypeAdd: React.FC<FormModalProps> = ({ modalClose }) => {
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
    const addFinish = useAddData(['installationsType'], `/v1/installation-types/create-installation-type`, token)


    const onSubmit = (data: any) => {
        try {
            addFinish.mutate(data, {
                onSuccess: (responseData) => {
                    toast.success("Successfully added new installation type!");
                    reset();
                    modalClose(false);
                },
                onError: (error: any) => {
                    toast.error("Failed to create new installation type");
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

            <h2 className="text-xl font-semibold text-primary">Add New Installation Type</h2>
            <div className="grid grid-cols-1 gap-5">
                <Input
                    label="Installation Type Name"
                    name="name"
                    type="text"
                    placeholder="Enter installation type"
                    register={register}
                    error={errors.name}
                    required
                />

                <Input
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Enter installation type description"
                    register={register}
                    error={errors.description}

                />



            </div>
            {/* Product Name */}
            <FormSubmitButton
                status={addFinish.status}
                buttonName="Add Installation Type"
                context="Adding"
            />
        </form>
    );
};

export default InstallationTypeAdd;
