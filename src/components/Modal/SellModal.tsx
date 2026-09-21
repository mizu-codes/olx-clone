interface SellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SellModal({ isOpen, onClose }: SellModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-xl bg-white p-8 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-4 text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        <h2 className="mb-2 text-2xl font-bold">
          Sell Your Product
        </h2>

        <p className="text-gray-500">
          Sell product form will be added here.
        </p>
      </div>
    </div>
  );
}

export default SellModal;