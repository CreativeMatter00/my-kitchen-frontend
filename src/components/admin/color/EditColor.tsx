"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "@/components/ui/checkbox";
import { useParams, useRouter } from "next/navigation";
import Input from "@/components/shared/Input";
import ImageInput from "@/components/shared/ImageInput";
import { useAddData, useFetchData, useUpdateData } from "@/hooks/useApi";
import { toast } from "sonner";
import { useCookies } from "next-client-cookies";
import { schema } from "./Schema";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/Reducer/MainSlice";
import { FormModalProps } from "../../../../types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FormSubmitButton from "@/components/shared/FormSubmitButton";
const EditColor: React.FC<FormModalProps> = ({ modalClose }) => {
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
    const router = useRouter();
    const cookies = useCookies();
    const token = cookies.get('myKitchenAccessToken')
    const editData = useSelector((state: RootState) => state.Initial.editData)
    const updateCategory = useUpdateData([`colors`], `/v1/color/update-color/${editData._id}`, token)

    console.log("editData", editData)
    const onSubmit = (data: any) => {
        try {
            updateCategory.mutate(data, {
                onSuccess: (responseData) => {
                    toast.success("Successfully updated color!");
                    reset();
                    modalClose(false)
                },
                onError: (error: any) => {
                    toast.error("Failed to update color");
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

            <h2 className="text-xl font-semibold text-primary">Edit Color</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                <Input
                    label="color Name"
                    name="name"
                    type="text"
                    placeholder="Enter color name"
                    register={register}
                    error={errors.name}
                    required
                    defaultValue={editData.name}
                />
                <Input
                    label="Color Code"
                    name="code"
                    type="text"
                    placeholder="Enter color code name"
                    register={register}
                    error={errors.code}
                    required
                    defaultValue={editData.code}
                />

                <Input
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Enter color description"
                    register={register}
                    error={errors.description}
                    required
                    defaultValue={editData.description}
                />


                <div className="col-span-1 lg:col-span-2">
                    <Controller
                        name="activeStatus"
                        control={control}
                        render={({ field }) => (
                            <Select
                                onValueChange={(value) => field.onChange(value)}
                                defaultValue={String(editData.activeStatus)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select active status" />
                                </SelectTrigger>
                                <SelectContent className="z-[9999] bg-black text-white">
                                    <SelectItem value="true" className="bg-black hover:bg-brandColor">Active</SelectItem>
                                    <SelectItem value="false" className="bg-black hover:bg-brandColor">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>
            </div>
            {/* color Name */}

            <FormSubmitButton
                status={updateCategory.status}
                buttonName="Update Color"
                context="Updating"
            />
        </form>
    );
};

export default EditColor;
