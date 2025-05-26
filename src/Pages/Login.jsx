import React, { useState } from "react";
import Signup from "./SignUp";
export default function Login({ isOpen, onClose }) {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [showSignup, setShowSignup] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const postUrl = ""; // your backend login endpoint

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!data.email.trim()) newErrors.email = "Email is required.";
        else if (!validateEmail(data.email)) newErrors.email = "Enter a valid email.";
        if (!data.password.trim()) newErrors.password = "Password is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccess("");
            return;
        }

        try {
            const response = await fetch(postUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess("Login successful!");
                setData({ email: "", password: "" });
            } else {
                setErrors({ form: "Invalid email or password." });
            }
        } catch (err) {
            setErrors({ form: "Network error. Please try again." });
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed px-4  inset-0 z-50 flex items-center justify-center bg-black/80">
            <Signup isOpen={showSignup} onClose={() => setShowSignup(false)} />
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 relative">
               <div className="flex items-center justify-center gap-2 w-full mb-4">
  <h1 className="text-xl sm:text-2xl text-[var(--var-red-col)] font-bold">Login</h1>
  <span className="text-[var(--var-red-col)] font-semibold">/</span>
  <span
    onClick={() => setShowSignup(true)}
    className="text-sm sm:text-base text-[var(--var-red-col)] font-semibold cursor-pointer hover:underline transition-all"
  >
    Sign Up
  </span>
</div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {errors.form && <p className="text-red-600 text-sm">{errors.form}</p>}
                    {success && <p className="text-green-600 text-sm">{success}</p>}

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--var-red-col)]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@mail.com"
                            value={data.email}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-[var(--var-red-col)] text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-[var(--var-red-col)]">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <p className="text-[var(--var-red-col)] text-xs mt-1">{errors.password}</p>}
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        {/* Cancel Button */}
                        <button
                            type="button"
                            className="text-gray-500 border-2 border-gray-500 px-4 py-2 rounded-xl hover:text-gray-700 text-base font-medium"
                            onClick={onClose}
                            aria-label="Cancel"
                        >
                            Cancel
                        </button>

                        {/* Log In Button */}
                        <button
                            type="submit"
                            className="bg-[var(--var-red-col)] text-white px-5 py-2 rounded-lg font-medium hover:bg-red-600 transition duration-300"
                        >
                            Log In
                        </button>
                    </div>



                </form>
                <div className="text-sm mt-4 text-gray-600 text-center">
                    Don’t have an ID?{" "}
                    <span
                        onClick={() => setShowSignup(true)}
                        className="text-[var(--var-red-col)] font-semibold cursor-pointer hover:underline">
                        Sign Up!
                    </span>
                </div>

            </div>
        </div>
    );
}
