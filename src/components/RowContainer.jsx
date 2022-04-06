import { motion } from "framer-motion";
import React from "react";
import { MdShoppingBasket } from "react-icons/md";

const RowContainer = (props) => {
  return (
    <div
      className={`w-full my-12 flex items-center gap-3
    ${props.flag ? "overflow-x-scroll scrollbar-none" : "flex-wrap overflow-x-hidden"}
    `}
    >
      {props.data &&
        props.data.map((item) => (
          <div
            key={item.id}
            className="w-full min-w-[300px] md:w-340 md:min-w-[340px] h-auto bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.imageURL}
                alt=""
                className="w-40 -mt-8 drop-shadow-2xl "
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item.calories} Calories
              </p>
              <div className="flex items-center gap-8 ">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
