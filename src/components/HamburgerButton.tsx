// 'use client';
// import { AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import { FaBars } from 'react-icons/fa6';
// import Sidebar from './Sidebar';

// export default function HamburgerButton() {
//   const [openSideBar, setOpenSideBar] = useState(false);

//   return (
//     <>
//       <div className="w-full flex justify-end items-center">
//         <FaBars
//           size={30}
//           className="cursor-pointer"
//           onClick={() => setOpenSideBar(true)}
//         />
//       </div>
//       <>
//         <AnimatePresence>
//           {openSideBar && <Sidebar setOpenSideBar={setOpenSideBar} />}
//         </AnimatePresence>
//       </>
//     </>
//   );
// }
