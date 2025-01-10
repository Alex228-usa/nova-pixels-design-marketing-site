"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import ButtonBase from "../button-base";
import FormInput from "./form-input";
import { customRequest } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  email: string;
  name: string;
  phone: string;
  description: string;
}

const FooterForm = () => {
  const { toast } = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await customRequest<{ message: string; status: number }>(
        "/api/formEndpoint",
        {
          method: "POST",
          body: data,
        }
      );

      toast({
        title: "Success",
        description: "Form submitted successfully",
        className: "bg-[#5cb85c] text-black border-none",
        duration: 1000,
      });

      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-wrap gap-x-9 gap-y-6">
        <FormInput
          control={control}
          type="email"
          placeholder="Enter your email"
          name="email"
          errors={errors}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          }}
        />
        <FormInput
          control={control}
          type="text"
          placeholder="Enter your name"
          name="name"
          errors={errors}
          validation={{
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          }}
        />
        <FormInput
          control={control}
          type="tel"
          placeholder="Enter your phone"
          name="phone"
          errors={errors}
          validation={{
            required: "Phone is required",
            pattern: {
              value: /^\+?\d{10,15}$/,
              message: "Enter a valid phone number",
            },
          }}
        />
        <FormInput
          control={control}
          type="text"
          placeholder="Describe your project"
          name="description"
          errors={errors}
          validation={{
            required: "Description is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          }}
          className={"w-full flex-auto"}
        />
      </div>

      <div className="mt-6 w-full">
        <ButtonBase
          type="submit"
          title={isSubmitting ? "Submitting..." : "LET'S TALK"}
          btnClassName={`group w-full h-20 text-xl md:h-20 md:text-3xl 2xl:h-36 2xl:text-4xl flex items-center justify-center gap-2 text-black py-4 px-8 rounded-full font-semibold transition-colors ${
            isSubmitting && "opacity-50 cursor-not-allowed"
          }`}
          arrowClassName="md:h-6 md:w-6 2xl:h-8 2xl:w-8"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};

export default FooterForm;
