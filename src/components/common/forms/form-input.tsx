import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  Path,
} from "react-hook-form";
import BaseInput from "../input";
import clsx from "clsx";

interface FormInputProps<T extends FieldValues> {
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "checkbox"
    | "radio"
    | "date"
    | "tel";
  name: Path<T>;
  errors: Partial<Record<keyof T, { message?: string }>>;
  validation?: Omit<
    RegisterOptions<T, Path<T>>,
    "setValueAs" | "disabled" | "valueAsNumber" | "valueAsDate"
  >;
  control: Control<T>;
  placeholder: string;
  className?: string;
}

const FormInput = <T extends FieldValues>({
  type,
  placeholder,
  name,
  errors,
  validation,
  control,
  className,
}: FormInputProps<T>) => (
  <div className={clsx("flex-1 min-w-[200px]", className)}>
    <Controller
      control={control}
      name={name}
      rules={validation}
      render={({ field }) => (
        <BaseInput
          type={type}
          placeholder={placeholder}
          className="w-full"
          borderClassName={errors[name] ? "!border-danger" : ""}
          {...field}
          value={field.value ?? ""} // Ensure value is never undefined
        />
      )}
    />
  </div>
);

export default FormInput;
