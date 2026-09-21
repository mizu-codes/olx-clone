import { Heart, MapPin, Search, UserRound } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoginModal from "../Modal/LoginModal";
import SellModal from "../Modal/SellModal";

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
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <header className="border-b border-gray-200 bg-white">
        <div className="flex h-20 items-center gap-4 px-6">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-blue-600">
              olx
            </h1>
          </div>

          {/* Location */}
          <button
            type="button"
            className="flex h-14 w-80 shrink-0 items-center justify-between rounded-full border border-gray-300 px-5"
          >
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" size={22} />

              <span className="text-base font-medium">India</span>
            </div>
          </button>

          {/* Search */}
          <div className="flex h-14 min-w-0 flex-1 overflow-hidden rounded-full border border-gray-300">
            <input
              type="text"
              placeholder='Search "Cars"'
              className="min-w-0 flex-1 px-6 text-base outline-none"
            />

            <button
              type="button"
              className="flex w-16 items-center justify-center bg-blue-600 text-white"
            >
              <Search size={26} />
            </button>
          </div>

          {/* Wishlist */}
          <button
            type="button"
            onClick={handleWishlistClick}
            className="flex shrink-0 flex-col items-center gap-1"
          >
            <Heart size={25} strokeWidth={2} />
            <span className="text-sm font-medium">Wishlist</span>
          </button>

          {/* Login / Profile */}
          {!user ? (
            <button
              type="button"
              onClick={handleLoginClick}
              className="flex shrink-0 flex-col items-center gap-1"
            >
              <UserRound size={25} strokeWidth={2} />
              <span className="text-sm font-medium">Login</span>
            </button>
          ) : (
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setOpenProfile((prev) => !prev)}
                className="overflow-hidden rounded-full"
              >
                <img
                  src={user.photoURL ?? ""}
                  alt={user.displayName ?? "Profile"}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </button>

              {openProfile && (
                <div className="absolute right-0 top-14 z-50 w-48 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
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

          {/* Sell */}
          <button
            type="button"
            onClick={handleSellClick}
            className="flex h-14 shrink-0 items-center gap-2 rounded-full border-4 border-blue-600 px-6 font-bold text-blue-700 shadow-md"
          >
            <span className="text-2xl leading-none">+</span>
            SELL
          </button>
        </div>
      </header>

      <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
      <SellModal isOpen={openSell} onClose={() => setOpenSell(false)} />
    </>
  );
}

export default Navbar;
