import { Bell, Heart, MapPin, Search, UserRound } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoginModal from "../Modal/LoginModal";
import SellModal from "../Modal/SellModal";
import { toast } from "../../utils/toast";

function Navbar() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [openLogin, setOpenLogin] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openSell, setOpenSell] = useState(false);

  const handleLoginClick = () => {
    setOpenLogin(true);
  };

  const handleSellClick = () => {
    if (!user) {
      setOpenLogin(true);
      return;
    }

    setOpenSell(true);
  };

  const handleWishlistClick = () => {
    if (!user) {
      setOpenLogin(true);
      return;
    }

    navigate("/wishlist");
  };

  const handleLogout = async () => {
    try {
      await logout();
      setOpenProfile(false);
      toast.success("Signed out successfully.");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Unable to sign out. Please try again.");
    }
  };

  return (
    <>
      <header className="border-b border-gray-200 bg-white">
        <div className="flex h-14 items-center gap-3 px-4 sm:h-16 md:gap-6 md:px-6">
          <div className="shrink-0">
            <img
              src="/images/olx_logo_2025.svg"
              alt="OLX"
              className="h-10 w-auto sm:h-11 md:h-12"
            />
          </div>

          <button
            type="button"
            className="hidden h-11 w-44 shrink-0 items-center justify-between rounded-full border border-gray-300 px-4 sm:flex md:w-52"
          >
            <div className="flex items-center gap-2">
              <MapPin className="text-blue-600" size={18} />

              <span className="truncate text-sm font-medium">India</span>
            </div>
          </button>

          <div className="flex h-11 w-full min-w-0 max-w-sm overflow-hidden rounded-full border border-gray-300 sm:max-w-md md:max-w-lg">
            <input
              type="text"
              placeholder='Search "Cars"'
              className="min-w-0 flex-1 px-4 text-sm outline-none md:px-5"
            />

            <button
              type="button"
              className="flex w-11 shrink-0 items-center justify-center bg-blue-600 text-white md:w-12"
            >
              <Search size={20} />
            </button>
          </div>

          <button
            type="button"
            onClick={handleWishlistClick}
            className="ml-auto hidden shrink-0 flex-col items-center gap-1 sm:flex"
          >
            <Heart size={22} strokeWidth={2} />
            <span className="text-xs font-medium">Wishlist</span>
          </button>

          {!user ? (
            <button
              type="button"
              onClick={handleLoginClick}
              className="ml-auto flex shrink-0 flex-col items-center gap-1 sm:ml-0"
            >
              <UserRound size={22} strokeWidth={2} />
              <span className="text-xs font-medium">Login</span>
            </button>
          ) : (
            <div className="relative ml-auto shrink-0 sm:ml-0">
              <button
                type="button"
                onClick={() => setOpenProfile((prev) => !prev)}
                className="overflow-hidden rounded-full"
              >
                <img
                  src={user.photoURL ?? ""}
                  alt={user.displayName ?? "Profile"}
                  className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11"
                />
              </button>

              {openProfile && (
                <div className="absolute right-0 top-12 z-50 w-48 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
                  <p className="truncate px-2 py-1 text-sm font-semibold">
                    {user.displayName}
                  </p>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-2 w-full rounded-md px-2 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <button
            type="button"
            onClick={handleSellClick}
            aria-label="Sell an item"
            className="shrink-0 transition hover:opacity-90 active:scale-95"
          >
            <img
              src="/images/addButton.png"
              alt="Sell"
              className="h-10 w-auto object-contain md:h-11"
            />
          </button>

          <button
            type="button"
            className="hidden shrink-0 items-center justify-center text-gray-800 sm:flex"
          >
            <Bell size={24} strokeWidth={2} />
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-gray-100 px-4 py-2 sm:hidden">
          <button
            type="button"
            className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-gray-300 px-3"
          >
            <MapPin className="text-blue-600" size={16} />
            <span className="text-sm font-medium">India</span>
          </button>

          <div className="flex shrink-0 items-center gap-5">
            <button
              type="button"
              onClick={handleWishlistClick}
              className="flex items-center justify-center text-gray-800"
              aria-label="Wishlist"
            >
              <Heart size={20} strokeWidth={2} />
            </button>

            <button
              type="button"
              className="flex items-center justify-center text-gray-800"
              aria-label="Notifications"
            >
              <Bell size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
      <SellModal isOpen={openSell} onClose={() => setOpenSell(false)} />
    </>
  );
}

export default Navbar;
