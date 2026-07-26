import { useState } from "react";

function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState("login"); // "login" or "signup"

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-sm p-6 sm:p-8 relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-slate-100 dark:bg-slate-800 rounded-full p-1">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
              mode === "login"
                ? "bg-teal-700 text-white"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
              mode === "signup"
                ? "bg-teal-700 text-white"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Sign Up
          </button>
        </div>

        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-1 text-center">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 text-center">
          {mode === "login"
            ? "Log in to access your parent/student portal"
            : "Sign up to get started with Pavna School"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          />

          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition"
          >
            {mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-xs text-center text-slate-400 mt-5">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button onClick={() => setMode("signup")} className="text-teal-700 dark:text-teal-400 font-semibold">
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setMode("login")} className="text-teal-700 dark:text-teal-400 font-semibold">
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthModal;