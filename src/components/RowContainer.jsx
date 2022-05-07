import { motion } from "framer-motion";
import React, {  useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import NotFound from "../img/NotFound.svg";
const RowContainer = (props) => {
  const rowContainer = useRef();
  


  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 flex items-center md:justify-center gap-3 scroll-smooth
    ${
      props.flag
        ? "overflow-x-scroll scrollbar-none"
        : "flex-wrap overflow-x-hidden justify-center"
    }
    `}
    >
      {props.data && props.data.length > 0 ? (
        props.data.map((item) => (
          <div
            key={item?.id}
            className="w-full min-w-[300px] md:w-340 md:min-w-[340px] h-[225px] bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div className="w-40 h-40 -mt-8 drop-shadow-2xl ">
                <img
                  whileHover={{ scale: 1.2 }}
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} کالری
              </p>
              <div className="flex items-center gap-8 ">
                <p className="text-lg text-headingColor font-semibold">
                {item.price} <span className="text-sm text-red-500">ريال</span> 
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" alt="" />
          <p className="text-xl text-headingColor font-semibold my-2">Items Not Available</p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
