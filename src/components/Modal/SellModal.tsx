import { useState, type SubmitEvent } from "react";
import { X } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { convertImageToBase64 } from "../../utils/imageUtils";
import { createProduct } from "../../services/ProductService";

interface SellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SellModal({ isOpen, onClose }: SellModalProps) {
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user) {
      setError("Please login first.");
      return;
    }

    const trimmedTitle = title.trim();
    const trimmedLocation = location.trim();
    const trimmedDescription = description.trim();
    const numericPrice = Number(price);

    if (!trimmedTitle) {
      setError("Please enter a product title.");
      return;
    }

    if (!category) {
      setError("Please select a category.");
      return;
    }

    if (!price || !Number.isFinite(numericPrice) || numericPrice <= 0) {
      setError("Please enter a valid price greater than 0.");
      return;
    }

    if (!trimmedLocation) {
      setError("Please enter a location.");
      return;
    }

    if (!trimmedDescription) {
      setError("Please enter a product description.");
      return;
    }

    if (!image) {
      setError("Please select a product image.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const imageBase64 = await convertImageToBase64(image);

      await createProduct(
        user.uid,
        trimmedTitle,
        category,
        numericPrice,
        trimmedLocation,
        trimmedDescription,
        imageBase64,
      );

      setTitle("");
      setCategory("");
      setPrice("");
      setLocation("");
      setDescription("");
      setImage(null);

      onClose();
    } catch (error) {
      console.error("Failed to create product:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to post product. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

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

        <div className="mb-5">
          <h2 className="pr-8 text-xl font-bold text-gray-900 sm:text-2xl">
            Sell Item
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-800">
              Title
            </label>

            <input
              type="text"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter product title"
              className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-800">
              Category
            </label>

            <select
              required
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-600"
            >
              <option value="">Select category</option>
              <option value="Cars">Cars</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Fashion">Fashion</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-800">
              Price
            </label>

            <input
              type="number"
              min="0"
              required
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="Enter price"
              className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-800">
              Location
            </label>

            <input
              type="text"
              required
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Enter location"
              className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-800">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              placeholder="Describe your product"
              rows={3}
              className="w-full resize-none rounded-md border border-gray-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-800">
              Product Image
            </label>

            <label className="flex min-h-20 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 px-3.5 py-4 text-center transition hover:bg-gray-50">
              <span className="max-w-full truncate text-sm font-medium text-gray-700">
                {image ? image.name : "Upload product image"}
              </span>

              <span className="mt-1 text-xs text-gray-500">JPG, PNG</span>

              <input
                type="file"
                accept="image/*"
                required={!image}
                onChange={(event) => {
                  setImage(event.target.files?.[0] ?? null);
                }}
                className="hidden"
              />
            </label>
          </div>

          {error && <p className="text-xs leading-4 text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Posting..." : "Sell Item"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SellModal;
