import { toast as toastify, type ToastOptions, type Id } from "react-toastify";

const baseOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

function success(message: string, options?: ToastOptions): Id {
  return toastify.success(message, {
    ...baseOptions,
    ...options,
    className: "app-toast app-toast--success",
  });
}

function error(message: string, options?: ToastOptions): Id {
  return toastify.error(message, {
    ...baseOptions,
    ...options,
    className: "app-toast app-toast--error",
  });
}

function info(message: string, options?: ToastOptions): Id {
  return toastify.info(message, {
    ...baseOptions,
    ...options,
    className: "app-toast app-toast--info",
  });
}

function warning(message: string, options?: ToastOptions): Id {
  return toastify.warning(message, {
    ...baseOptions,
    ...options,
    className: "app-toast app-toast--warning",
  });
}

/**
 * Centralized toast helper.
 *
 * Usage:
 *   toast.success("Added to your wishlist.");
 *   toast.error("Couldn't update your wishlist. Please try again.");
 */
export const toast = {
  success,
  error,
  info,
  warning,
};