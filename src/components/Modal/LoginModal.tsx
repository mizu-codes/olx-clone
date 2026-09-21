import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleGoogleLogin = async () => {
    try {
      setError("");
      setLoading(true);

      await loginWithGoogle();
      onClose();
    } catch (error) {
      console.error(error);
      setError("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black"
          aria-label="Close"
        >
          ×
        </button>

        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Login to OLX
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Login to buy and sell products
          </p>
        </div>

        {/* Google button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            "Signing in..."
          ) : (
            <>
              <span className="text-lg font-bold">G</span>
              Continue with Google
            </>
          )}
        </button>

        {error && (
          <p className="mt-4 text-center text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginModal;