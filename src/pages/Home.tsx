import { useState } from "react";
import LoginModal from "../components/Modal/LoginModal";
import { useAuth } from "../hooks/useAuth";

function Home() {
  const [openLogin, setOpenLogin] = useState(false);
  const { user, logout, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      {!user ? (
        <button
          onClick={() => setOpenLogin(true)}
          className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Login
        </button>
      ) : (
        <>
          <img
            src={user.photoURL ?? ""}
            alt={user.displayName ?? "User"}
            className="h-16 w-16 rounded-full"
          />

          <h1 className="text-2xl font-bold">
            Hello, {user.displayName}
          </h1>

          <p>{user.email}</p>

          <button
            onClick={logout}
            className="rounded-md bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            Logout
          </button>
        </>
      )}

      <LoginModal
        isOpen={openLogin}
        onClose={() => setOpenLogin(false)}
      />
    </div>
  );
}

export default Home;