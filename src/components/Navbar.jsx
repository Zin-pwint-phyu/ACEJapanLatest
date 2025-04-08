import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { pages } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { path } from "framer-motion/client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEng, setIsEng] = useState(false);
  const servicePaths = [
    "/outsourceservice",
    "/recruitment",
    "/operating",
    "/nearshore",
    "/offshore",
  ];

  const isServiceActive = servicePaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-0 px-15 mx-auto xl:px-0 cusContainer  z-50">
        <div className="bg-red h-20 w-full mx-auto mt-5 justify-between  shadow-md hidden lg:flex xl:p-4 p-2 ">
          <div className="text-white flex xl:text-lg lg:text-xs ">
            {pages
              .filter((page) => page.name !== "Get in Touch")
              .map((page, index) => {
                const isActive =
                  location.pathname === page.path ||
                  (page.name === "Service" && isServiceActive);
                return (
                  <div
                    className={`xl:pl-5 ${
                      page.name === "Service" ? "relative" : ""
                    }`}
                    key={index}
                    onMouseLeave={() =>
                      page.name === "Service" && setIsDropdownOpen(false)
                    }>
                    <motion.div
                      animate={
                        isActive
                          ? {
                              color: "#C12329",
                              backgroundColor: "white",
                            }
                          : {}
                      }
                      whileHover={{ color: "red" }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className={`cursor-pointer font-regular px-3 py-2 duration-200 nav relative flex items-center gap-2  `}>
                      <Link
                        to={page.path} // Changed to Link
                        onClick={(e) => {
                          if (page.name === "Service") {
                            e.preventDefault();
                            setIsDropdownOpen(!isDropdownOpen);
                          }
                        }}>
                        <span className="group-hover:text-red">
                          {page.name}
                        </span>
                      </Link>
                    </motion.div>
                    {/* Dropdown Menu */}
                    {page.name === "Service" && isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute xl:left-4 md:left-0 top-12 z-50 xl:w-[400px] lg:w-[250px] md:w-[200px] py-4 bg-white text-black shadow-lg rounded-md font-regular px-2 dropDown ">
                        <Link
                          to="/outsourceservice"
                          className="block px-4 py-4 ">
                          <span>Outsourcing Service</span>
                        </Link>
                        <Link to="/recruitment" className="block px-4 py-4 ">
                          <span>Recruitment Service</span>
                        </Link>
                        <Link to="/operating" className="block px-4 py-4 ">
                          <span>Operating & Maintenance Service</span>
                        </Link>
                        <Link to="/nearshore" className="block px-4 py-4 ">
                          <span>Nearshore System Development</span>
                        </Link>
                        <Link to="/offshore" className="block px-4 py-4 ">
                          <span>Offshore System Development</span>
                        </Link>
                      </motion.div>
                    )}
                  </div>
                );
              })}
          </div>
          <div className="flex  justify-center items-center mr-5 gap-4">
            <div className="w-fit xl:py-4 py-2 px-6 bg-color-30 justify-center items-center hidden lg:flex">
              <Link to="/contactus" className="text-xl text-white">
                Get in touch?
              </Link>
            </div>
            <div className="relative xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] overflow-hidden cursor-pointer ">
              <img
                src="/JP (2).png"
                alt="Japanese"
                className={`absolute w-full transition-transform duration-500 ${
                  isEng ? "translate-y-full " : "translate-y-0 "
                }`}
                // onClick={() => setIsEng(true)}
              />
              {/* <img
                src="/Eng.png"
                alt="English"
                className={`absolute w-full transition-transform  duration-500 ${
                  isEng ? "translate-y-0    " : "-translate-y-full "
                }`}
                onClick={() => setIsEng(false)}
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      {!isMenuOpen && (
        <div
          className="text-4xl text-color-1 lg:hidden absolute top-0 right-0 p-8 cursor-pointer  z-50"
          onClick={() => setIsMenuOpen(true)}>
          <RxHamburgerMenu />
        </div>
      )}

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed lg:hidden top-0 left-0 w-full h-full bg-seconary flex flex-col items-start text-left text-black justify-start font-semibold text-lg z-40">
            {/* Close Button */}
            <div
              className="absolute top-0 p-8 right-0 text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}>
              <RxCross1 className="font-bold" />
            </div>

            {/* Menu Items */}
            <ul className="space-y-6 w-full text-xl mt-20 font-bold">
              {pages.map((page, index) => {
                const isActive = location.pathname === page.path;
                return (
                  <div
                    className={`xl:pl-5 ${
                      page.name === "Service" ? "relative" : ""
                    }`}
                    key={index}>
                    <motion.div
                      animate={
                        isActive
                          ? {
                              color: "white",
                              backgroundColor: "black",
                            }
                          : {}
                      }
                      className={`cursor-pointer font-bold pl-8 py-2 nav relative flex items-center gap-2`}>
                      {page.name === "Service" ? (
                        <span
                          className="group-hover:text-white py-3"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                          {page.name}
                        </span>
                      ) : (
                        <Link
                          to={page.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="w-full h-full block">
                          <span className="group-hover:text-white py-3">
                            {page.name}
                          </span>
                        </Link>
                      )}
                    </motion.div>

                    {/* Dropdown Menu */}
                    {page.name === "Service" && isDropdownOpen && (
                      <motion.div
                        initial={{ maxHeight: 0, y: -10 }}
                        animate={{ maxHeight: 300, y: 0 }}
                        exit={{ maxHeight: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className="text-black font-bold pl-6 dropDown overflow-hidden">
                        <Link
                          to="/outsourceservice"
                          className="block px-4 py-3"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}>
                          <span>OutSourcing Service</span>
                        </Link>
                        <Link
                          to="/recruitment"
                          className="block px-4 py-3"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}>
                          <span>Recriment Service</span>
                        </Link>
                        <Link
                          to="/operating"
                          className="block px-4 py-3"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}>
                          <span>Operating & Maintenance Service</span>
                        </Link>
                        <Link
                          to="/nearshore"
                          className="block px-4 py-3"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}>
                          <span>Nearshore System Development</span>
                        </Link>
                        <Link
                          to="/offshore"
                          className="block px-4 py-3"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}>
                          <span>Offshore System Development</span>
                        </Link>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

// import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
// import { AnimatePresence, motion } from "framer-motion";
// import { pages } from "../constants";
// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isEng, setIsEng] = useState(false);

//   const servicePaths = [
//     "/outsourceservice",
//     "/recruitment",
//     "/operating",
//     "/nearshore",
//     "/offshore",
//   ];

//   const isServiceActive = servicePaths.some((path) =>
//     location.pathname.startsWith(path)
//   );

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <div className="sticky top-0 px-15 container xl:px-0 mx-auto z-50">
//         <div className="bg-red h-auto w-full mx-auto mt-5 items-center justify-between pl-12 shadow-md hidden md:flex md:p-4 lg:p-2">
//           <div className="text-white flex text-xl md:text-lg ">
//             {pages
//               .filter((page) => page.name !== "Get in Touch")
//               .map((page, index) => {
//                 const isActive =
//                   location.pathname === page.path ||
//                   (page.name === "Service" && isServiceActive);
//                 return (
//                   <div
//                     className={`xl:pl-5 ${
//                       page.name === "Service" ? "relative" : ""
//                     }`}
//                     key={index}
//                     onMouseLeave={() =>
//                       page.name === "Service" && setIsDropdownOpen(false)
//                     }>
//                     <motion.a
//                       href={page.path}
//                       animate={
//                         isActive
//                           ? {
//                               color: "#C12329",
//                               backgroundColor: "white",
//                             }
//                           : {}
//                       }
//                       whileHover={{ color: "red" }}
//                       transition={{ duration: 0.2, ease: "easeInOut" }}
//                       className={`cursor-pointer font-bold px-3 py-2 duration-200 nav relative flex items-center gap-2`}
//                       onClick={(e) => {
//                         if (page.name === "Service") {
//                           e.preventDefault();
//                           setIsDropdownOpen(!isDropdownOpen);
//                         }
//                       }}>
//                       <span className="group-hover:text-red">{page.name}</span>
//                     </motion.a>
//                     {/* Dropdown Menu */}
//                     {page.name === "Service" && isDropdownOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="absolute xl:left-4 md:left-0 top-12 z-50 lg:w-[500px] md:w-[300px] py-4 bg-white text-black shadow-lg rounded-md font-bold px-2 dropDown ">
//                         <a
//                           href="/outsourceservice"
//                           className="block px-4 py-4 ">
//                           <span>Outsourcing Service</span>
//                         </a>
//                         <a href="/recruitment" className="block px-4 py-4 ">
//                           <span>Recruitment Service</span>
//                         </a>
//                         <a href="/operating" className="block px-4 py-4 ">
//                           <span>Operating & Maintenance Service</span>
//                         </a>
//                         <a href="/nearshore" className="block px-4 py-4 ">
//                           <span>Nearshore System Development</span>
//                         </a>
//                         <a href="/offshore" className="block px-4 py-4 ">
//                           <span>Offshore System Development</span>
//                         </a>
//                       </motion.div>
//                     )}
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
