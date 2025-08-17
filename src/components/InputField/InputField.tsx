import React, { useId, useState } from "react";
import { cn } from "../../utils/cn";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable,
}) => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  const baseClasses =
    "w-full rounded-md transition placeholder:text-gray-400 disabled:cursor-not-allowed focus:ring-2 focus:ring-offset-0 dark:focus:ring-offset-0";
  const variants = {
    filled:
      "bg-gray-100 dark:bg-gray-800 border border-transparent focus:ring-blue-500",
    outlined:
      "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-blue-500",
    ghost:
      "bg-transparent border-b border-gray-400 dark:border-gray-700 focus:ring-blue-500 rounded-none",
  } as const;
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  } as const;

  const effectiveType =
    type === "password" && !showPassword ? "password" : "text";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          type={effectiveType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-describedby={
            errorMessage ? `${id}-error` : helperText ? `${id}-help` : undefined
          }
          className={cn(
            baseClasses,
            variants[variant],
            sizes[size],
            invalid && "border-red-500 focus:ring-red-500",
            disabled && "opacity-60",
            loading && "pr-10"
          )}
        />

        {clearable && value && !disabled && (
          <button
            type="button"
            onClick={() => onChange?.({ target: { value: "" } } as any)}
            aria-label="Clear input"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
          >
            ✕
          </button>
        )}

        {type === "password" && !disabled && (
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        )}

        {loading && (
          <span
            role="status"
            aria-live="polite"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm animate-pulse"
          >
            ...
          </span>
        )}
      </div>

      {helperText && !errorMessage && (
        <span id={`${id}-help`} className="text-xs text-gray-500">
          {helperText}
        </span>
      )}
      {errorMessage && (
        <span id={`${id}-error`} className="text-xs text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
