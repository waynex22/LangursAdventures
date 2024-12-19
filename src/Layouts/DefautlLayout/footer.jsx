import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <footer class="bg-footer">
        <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
            <div>
              <img src="./image/logo.png" className="w-24" alt="" />

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <p className="text-white font-light text-base">Langur's Adventures</p>
                </li>
                <li>
                <p className="text-white font-light text-base">No 225, 1/4 street, Cat Ba town, Cat Ba island, Hai Phong, Vietnam</p>
                    </li>                
              </ul>
            </div>

            <div>
              <p class="font-medium text-white">INTRODUCE</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <Link to='/' className="text-white font-light text-base hover:text-primary/70">About us</Link>
                </li>
                <li>
                  <Link to='/' className="text-white font-light text-base hover:text-primary/70">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to='/' className="text-white font-light text-base hover:text-primary/70">Contact</Link>
                </li>
                <li>
                  <Link to='/' className="text-white font-light text-base hover:text-primary/70">Hotline: +84 338715366</Link>
                </li>
                <li>
                  <Link to='/' className="text-white font-light text-base hover:text-primary/70">Email: info@langursadventures.com</Link>
                </li>
                
              </ul>
            </div>

            <div>
              <p class="font-medium text-white">DAILY TOUR</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <Link to='/' className="text-white font-light text-base hover:text-primary/70">Rock Climbing</Link>
                </li>
                <li>
                  <Link to='/' className="text-white font-light text-base hover:text-primary/70">Kayaking</Link>
                </li>
                <li>
                  <Link to='/' className="text-white font-light text-base hover:text-primary/70">Deep Warter Solo</Link>
                </li>
              </ul>
            </div>

            <div>
              <p class="font-medium text-white">DESTINATION</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <Link to='/' className="text-white font-light text-base hover:text-primary/70">Cat Ba</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="flex items-center justify-center text-xs text-gray-500 p-2">
            &copy; 2024. Langur's Adventures 
            . All rights reserved.
          </p>
      </footer>
    </>
  );
};

export default footer;
