import { forwardRef, useRef } from "react";
import { Input } from "@/components/ui/input";
import clsx from "clsx";

const focused = "!border-black";

interface BaseInputProps {
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  borderClassName?: string;
  value: string | number;
}

const BaseInput = forwardRef(
  (
    {
      type = "text",
      onChange,
      onBlur,
      onFocus,
      placeholder = "",
      className,
      borderClassName,
      value,
      ...props
    }: BaseInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const leftFrameRef = useRef<HTMLDivElement>(null);
    const rightFrameRef = useRef<HTMLDivElement>(null);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      onFocus?.(e); // Optional chaining
      leftFrameRef.current?.classList.add(focused);
      rightFrameRef.current?.classList.add(focused);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(e); // Optional chaining
      leftFrameRef.current?.classList.remove(focused);
      rightFrameRef.current?.classList.remove(focused);
    };

    return (
      <div
        className={clsx("relative py-4 md:py-[30] 2xl:py-8 px-4", className)}
      >
        {/* Left frame */}
        <div
          ref={leftFrameRef}
          className={clsx(
            "absolute left-0 top-1/2 -translate-y-1/2 w-8 h-full border-l-2 border-t-2 border-b-2 border-light-gray",
            borderClassName
          )}
        />

        {/* Right frame */}
        <div
          ref={rightFrameRef}
          className={clsx(
            "absolute right-0 top-1/2 -translate-y-1/2 w-8 h-full border-r-2 border-t-2 border-b-2 border-light-gray",
            borderClassName
          )}
        />

        <div className="space-y-2 w-full flex items-center">
          <Input
            id="name"
            type={type}
            onChange={onChange}
            ref={ref}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="border-none text-center text-black text-base font-normal leading-normal focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-medium focus:placeholder:text-black"
            {...props}
          />
        </div>
      </div>
    );
  }
);
BaseInput.displayName = "BaseInput";
export default BaseInput;
