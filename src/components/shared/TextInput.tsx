"use client";
import React from "react";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IDescription {
  name: string;
  labelName: string;
  control: any;
  errors: any;
  setValue: Function;
  required?: boolean;
}

const modules = {
  toolbar: [
    [{ size: [] }],
    ["bold", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
};

const formats = ["size", "bold", "underline", "list"];

const TextInput: React.FC<IDescription> = ({
  name,
  labelName,
  control,
  errors,
  setValue,
  required,
}) => {
  const handleChange = (content: string) => {
    setValue(content);
  };
  return (
    <div>
      <div className="mb-1">
        <label className="text-sm font-normal pb-2 pl-6 text-brandPrimary">
          {labelName} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
      <div className="w-full">
        <Controller
          name={name}
          control={control}
          rules={{ required: `${labelName} is required` }}
          render={({ field }) => (
            <ReactQuill
              theme="snow"
              value={field.value || ""}
              onChange={(content) => {
                field.onChange(content);
                handleChange(content);
              }}
              modules={modules}
              formats={formats}
              placeholder={`Write here ${name}...`}
            />
          )}
        />
        {errors[name] && (
          <span className="text-red-500 text-sm mt-1 px-6">
            {errors[name].message}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
