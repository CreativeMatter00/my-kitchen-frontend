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
const EditStyle: React.FC<FormModalProps> = ({ modalClose }) => {
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
    const cookies = useCookies();
    const token = cookies.get('myKitchenAccessToken')
    const editData = useSelector((state: RootState) => state.Initial.editData)
    const updatedStyle = useUpdateData([`styles`], `/v1/style/update-style/${editData._id}`, token)
    const onSubmit = (data: any) => {
        try {
            updatedStyle.mutate(data, {
                onSuccess: (responseData) => {
                    toast.success("Successfully updated styles!");
                    reset();
                    modalClose(false)
                },
                onError: (error: any) => {
                    toast.error("Failed to update styles");
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

            <h2 className="text-xl font-semibold text-primary">Edit Style</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                <Input
                    label="Styles Name"
                    name="name"
                    type="text"
                    placeholder="Enter styles name"
                    register={register}
                    error={errors.name}
                    required
                    defaultValue={editData.name}
                />

                <Input
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Enter styles description"
                    register={register}
                    error={errors.description}
                    required
                    defaultValue={editData.description}
                />

                {/* Image Upload */}

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
            {/* styles Name */}

            <FormSubmitButton
                status={updatedStyle.status}
                buttonName="Update Style"
                context="Updating"
            />
        </form>
    );
};

export default EditStyle;
