"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactUsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [firstNameFieldSelected, setFirstNameFieldSelected] = useState(false);
  const [lastNameFieldSelected, setLastNameFieldSelected] = useState(false);
  const [emailFieldSelected, setEmailSelected] = useState(false);
  const [phoneFieldSelected, setPhoneFiledSelected] = useState(false);
  const [subFieldSelected, setSubFieldSelected] = useState(false);
  const [messageFieldSelected, setMessageSelected] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <div className="py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 max-lg:gap-6"
      >
        <div className="w-full flex lg:justify-between items-center gap-6 max-lg:flex-col">
          <div className="w-full">
            <input
              onClick={() => setFirstNameFieldSelected(!firstNameFieldSelected)}
              {...register("firstName", { required: "First Name is required" })}
              className={`w-full py-4 bg-transparent text-lg font-medium text-brandColorSecondary px-1 outline-none placeholder-textSecondary border-b-[2px] ${
                firstNameFieldSelected
                  ? "border-b-brandColor"
                  : "border-b-brandColorSecondary"
              }`}
              type="text"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-brandColor text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="w-full">
            <input
              onClick={() => setLastNameFieldSelected(!lastNameFieldSelected)}
              {...register("lastName", { required: "Last Name is required" })}
              className={`w-full py-4 bg-transparent text-lg font-medium text-brandColorSecondary px-1 outline-none placeholder-textSecondary border-b-[2px] ${
                lastNameFieldSelected
                  ? "border-b-brandColor"
                  : "border-b-brandColorSecondary"
              }`}
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-brandColor text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="w-full flex lg:justify-between items-center gap-6 max-lg:flex-col">
          <div className="w-full">
            <input
              onClick={() => setEmailSelected(!emailFieldSelected)}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full py-4 bg-transparent text-lg font-medium text-brandColorSecondary px-1 outline-none placeholder-textSecondary border-b-[2px] ${
                emailFieldSelected ? "border-b-brandColor" : "border-b-brandColorSecondary"
              }`}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-brandColor text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full">
            <input
              onClick={() => setPhoneFiledSelected(!phoneFieldSelected)}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Invalid phone number",
                },
              })}
              className={`w-full py-4 bg-transparent text-lg font-medium text-brandColorSecondary px-1 outline-none placeholder-textSecondary border-b-[2px] ${
                phoneFieldSelected ? "border-b-brandColor" : "border-b-brandColorSecondary"
              }`}
              type="tel"
              placeholder="Phone"
            />
            {errors.phone && (
              <p className="text-brandColor text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className=" ">
          <input
            onClick={() => setSubFieldSelected(!subFieldSelected)}
            {...register("subject", { required: "Subject is required" })}
            className={`w-full py-4 bg-transparent text-lg font-medium text-black px-1 outline-none placeholder-textSecondary border-b-[2px] ${
              subFieldSelected ? "border-b-brandColor" : "border-b-brandColorSecondary"
            }`}
            type="text"
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="text-brandColor text-sm">{errors.subject.message}</p>
          )}
        </div>

        <div className="">
          <input
            onClick={() => setMessageSelected(!messageFieldSelected)}
            {...register("message", { required: "Message is required" })}
            className={`w-full py-4 bg-transparent text-lg font-medium text-brandColorSecondary px-1 outline-none placeholder-textSecondary border-b-[2px] ${
              messageFieldSelected ? "border-b-brandColor" : "border-b-brandColorSecondary"
            }`}
            placeholder="Message"
          />
          {errors.message && (
            <p className="text-brandColor text-sm">{errors.message.message}</p>
          )}
        </div>

        <div className="flex w-full space-x-4 mt-10">
          <button
            type="submit"
            className="w-1/2 py-4 bg-brandColorSecondary text-backgroundColor  hover:scale-95 text-xl font-medium transition duration-500"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 py-4 bg-transparent text-brandColorSecondary border-[2px] border-brandColorSecondary  hover:scale-95 text-xl font-medium transition duration-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
