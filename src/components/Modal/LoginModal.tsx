import { useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone, X } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SLIDES = [
  {
    image: "/images/guitar.png",
    text: "Help us become one of the safest places to buy and sell",
  },
  {
    image: "/images/love.png",
    text: "Close deals from the comfort of your home.",
  },
  {
    image: "/images/avatar.png",
    text: "Keep all your favourites in one place.",
  },
];

function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

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

  const goToPrevSlide = () => {
    setSlideIndex((current) =>
      current === 0 ? SLIDES.length - 1 : current - 1,
    );
  };

  const goToNextSlide = () => {
    setSlideIndex((current) =>
      current === SLIDES.length - 1 ? 0 : current + 1,
    );
  };

  const currentSlide = SLIDES[slideIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 sm:px-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[calc(100vh-24px)] w-full max-w-[350px] overflow-y-auto rounded-lg bg-white px-5 pb-5 pt-7 shadow-xl sm:px-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-800 transition hover:text-black"
          aria-label="Close"
        >
          <X size={22} strokeWidth={2} />
        </button>

        <div className="flex flex-col items-center">
          <img
            src={currentSlide.image}
            alt=""
            className="h-20 w-20 object-contain"
          />

          <div className="mt-4 grid w-full grid-cols-[28px_minmax(0,1fr)_28px] items-center">
            <button
              type="button"
              onClick={goToPrevSlide}
              aria-label="Previous slide"
              className="flex items-center justify-start text-gray-400 transition hover:text-gray-700"
            >
              <ChevronLeft size={22} strokeWidth={1.7} />
            </button>

            <p className="px-1 text-center text-sm font-semibold leading-snug text-gray-900 sm:text-[15px]">
              {currentSlide.text}
            </p>

            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Next slide"
              className="flex items-center justify-end text-gray-400 transition hover:text-gray-700"
            >
              <ChevronRight size={22} strokeWidth={1.7} />
            </button>
          </div>

          <div className="mt-5 flex items-center gap-2">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setSlideIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  index === slideIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          disabled
          className="mt-6 flex w-full cursor-default items-center justify-center gap-2 rounded-md border-2 border-blue-700 px-3 py-2.5 text-sm font-semibold text-blue-700"
        >
          <Smartphone size={16} strokeWidth={2} />
          Continue with phone
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            "Signing in..."
          ) : (
            <>
              <img
                src="/images/google.png"
                alt=""
                className="h-4 w-4 object-contain"
              />
              Continue with Google
            </>
          )}
        </button>

        {error && (
          <p className="mt-3 text-center text-xs text-red-500">{error}</p>
        )}

        <p className="mt-5 text-center text-sm font-bold text-gray-800">OR</p>

        <p className="mt-5 cursor-default text-center text-sm font-bold text-gray-900 underline">
          Login with Email
        </p>

        <p className="mt-8 text-center text-xs leading-5 text-gray-400">
          All your personal details are safe with us.
        </p>

        <p className="mt-2 text-center text-xs leading-5 text-gray-400">
          If you continue, you are accepting{" "}
          <span className="text-blue-700">
            OLX Terms and Conditions and Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
