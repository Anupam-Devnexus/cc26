import { FaRegUserCircle } from "react-icons/fa";

export default function UserMenu({ setShowLogin, setShowSignup, setShowConfirm, isOpen, toggle }) {
    return (
        <div className="relative text-white z-50">
            {/* Avatar and Name */}
            <div
                className="flex items-center gap-2 py-2 rounded-lg shadow-md cursor-pointer"
                onClick={toggle}
            >
                <FaRegUserCircle className="text-2xl sm:text-3xl" />
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/5"
                    onClick={toggle}
                ></div>
            )}

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 bg-[var(--var-red-col)] text-white rounded-md shadow-lg w-40 z-50">
                    <ul className="text-sm flex items-center justify-between">
                        <li onClick={() => { setShowLogin(true); toggle(); }} className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer">Log In</li>

                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer">Guest</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
