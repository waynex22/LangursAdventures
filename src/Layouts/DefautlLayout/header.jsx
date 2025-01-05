import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b border-b-slate-100 sticky top-0 z-[9999] bg-white">
      <div className="container mx-auto h-[96px] p-6">
        <div className="flex items-center justify-between">
          <Link to='/' className="logo">
            <img className="w-16" src="./image/logo.png" alt="Logo" />
          </Link>
          <div className="hidden md:flex items-center gap-x-10">
            <Link
              to="/"
              className="text-textPrimary hover:text-primary text-base font-bold"
            >
              Home
            </Link>
            <Link
              to="/tour"
              className="text-textPrimary hover:text-primary text-base font-bold"
            >
              Daily Tours
            </Link>
            <Link
              to="/faq"
              className="text-textPrimary hover:text-primary text-base font-bold"
            >
              FAQ
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}

          {/* Contact and Book Now (Both mobile and desktop) */}
          <div className="flex items-center gap-x-5">
            <div className="hidden md:flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 32 32"
                id="phone"
              >
                <path d="M13.216 8.064c-.382-4.394-4.966-6.55-5.16-6.638a.974.974 0 0 0-.582-.078c-5.292.878-6.088 3.958-6.12 4.086a.99.99 0 0 0 .02.54c6.312 19.584 19.43 23.214 23.742 24.408.332.092.606.166.814.234a.99.99 0 0 0 .722-.042c.132-.06 3.248-1.528 4.01-6.316a.997.997 0 0 0-.096-.612c-.068-.132-1.698-3.234-6.218-4.33a.977.977 0 0 0-.884.21c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146-.07-.57 1.236-2.572 2.738-4.2a.998.998 0 0 0 .26-.766z"></path>
              </svg>
              <p className="contact font-bold">Hotline: +84 338715366</p>
            </div>
            <Link to='/booking' className="booking font-bold px-6 py-2 bg-primary text-textPrimary rounded-xl hover:bg-orange-500 hover:text-white cursor-pointer">
              <p>Book Now</p>
            </Link>
            <div className="md:hidden flex items-center gap-x-5">
              <button onClick={toggleMenu} className="w-8">
                {isMenuOpen ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M17.8782 15.9977L23.606 10.2832C23.8568 10.0324 23.9977 9.69222 23.9977 9.33749C23.9977 8.98277 23.8568 8.64257 23.606 8.39174C23.3552 8.14091 23.015 8 22.6602 8C22.3055 8 21.9653 8.14091 21.7145 8.39174L16 14.1195L10.2855 8.39174C10.0347 8.14091 9.6945 8 9.33977 8C8.98504 8 8.64485 8.14091 8.39402 8.39174C8.14319 8.64257 8.00227 8.98277 8.00227 9.33749C8.00227 9.69222 8.14319 10.0324 8.39402 10.2832L14.1218 15.9977L8.39402 21.7122C8.26917 21.836 8.17007 21.9834 8.10244 22.1457C8.03482 22.308 8 22.4821 8 22.658C8 22.8338 8.03482 23.0079 8.10244 23.1702C8.17007 23.3325 8.26917 23.4799 8.39402 23.6037C8.51785 23.7286 8.66517 23.8277 8.8275 23.8953C8.98982 23.9629 9.16392 23.9977 9.33977 23.9977C9.51562 23.9977 9.68972 23.9629 9.85204 23.8953C10.0144 23.8277 10.1617 23.7286 10.2855 23.6037L16 17.8759L21.7145 23.6037C21.8383 23.7286 21.9856 23.8277 22.148 23.8953C22.3103 23.9629 22.4844 23.9977 22.6602 23.9977C22.8361 23.9977 23.0102 23.9629 23.1725 23.8953C23.3348 23.8277 23.4822 23.7286 23.606 23.6037C23.7308 23.4799 23.8299 23.3325 23.8976 23.1702C23.9652 23.0079 24 22.8338 24 22.658C24 22.4821 23.9652 22.308 23.8976 22.1457C23.8299 21.9834 23.7308 21.836 23.606 21.7122L17.8782 15.9977Z"
                        fill="black"
                      ></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7Z"
                        stroke="#1D2939"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7Z"
                        stroke="#1D2939"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M14 17C14 15.3431 15.3431 14 17 14C18.6569 14 20 15.3431 20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17Z"
                        stroke="#1D2939"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17Z"
                        stroke="#1D2939"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg p-4 absolute top-[96px] left-0 right-0 z-50">
            <Link
              to="/"
              className="block text-textPrimary hover:text-primary text-base font-bold py-2"
            >
              Home
            </Link>
            <Link
              to="/tour"
              className="block text-textPrimary hover:text-primary text-base font-bold py-2"
            >
              Daily Tours
            </Link>
            <Link
              to="/faq"
              className="block text-textPrimary hover:text-primary text-base font-bold py-2"
            >
              FAQ
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
