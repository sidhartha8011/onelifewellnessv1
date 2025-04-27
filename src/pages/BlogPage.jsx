import React from "react";
import bgLogo from "../assets/images/blog/bg-logo.png";
import { CirclePlus, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BlogPage() {
  const today = new Date();

  const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

  const formattedDate = today.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const lorem = new Array(10).fill("Lorem ipsum");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, rotate: 90, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="flex flex-col gap-90 !mb-90">
      <div
        className="bg-cover bg-no-repeat h-screen relative"
        style={{ backgroundImage: `url(${bgLogo})`, backgroundSize: "100%" }}
      >
        <motion.div
          className="absolute top-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center justify-between !px-10 gap-12 !py-5 w-full h-full"
            variants={headerVariants}
          >
            <span className="!text-[#022759] !font-medium">
              <p className="!font-bold !text-lg">{dayOfWeek}</p>
              <p className="!font-medium !text-xs">{formattedDate}</p>
            </span>
            <div className="flex items-center gap-10">
              {lorem.map((item, index) => (
                <motion.p
                  className="!text-sm !font-medium"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <CirclePlus className="!text-white bg-[#022759] w-10 h-10 !p-2 rounded-lg" />
            </motion.button>
          </motion.div>
          <motion.div
            className="!px-10 !mt-10 grid grid-cols-3 gap-5"
            variants={containerVariants}
          >
            {/* First Column */}
            <motion.div
              className="w-full overflow-hidden flex flex-col gap-5"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between">
                <motion.h1
                  className="flex items-center gap-2 !font-bold !text-xl"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Lorem, ipsum.
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight
                      className="!text-white bg-gray-400 !p-1 rounded-full"
                      size={18}
                    />
                  </motion.div>
                </motion.h1>
                <div className="flex items-center gap-5">
                  {["Lorem", "Lorem", "Lorem"].map((text, index) => (
                    <motion.p
                      key={index}
                      className="hover:!font-medium hover:underline cursor-pointer !font-medium !text-xs !text-gray-500 hover:!text-black"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </div>
              <motion.div
                className="w-[453px] h-[330px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1681966826227-d008a1cfe9c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-fit rounded-2xl"
                />
                <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                  {formattedDate}
                </p>
              </motion.div>
              <motion.div
                className=""
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="!text-xl !font-bold ">
                  Lorem Ipsum dolor sit amet consectetur Feugiat fermentum.
                </h1>
                <p className="!text-sm !font-medium !mt-2">
                  Lorem ipsum dolor sit amet consectetur. Diam sagittis faucibus
                  odio pharetra fermentum tellus. Faucibus egestas morbi
                  elementum vel tortor fames dolor volutpat faucibus. Id quis
                  faucibus consectetur sit cursus fusce dui. Tempor luctus vel
                  arcu est.
                </p>
                <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                  {formattedDate}
                </p>
              </motion.div>
              <motion.div
                className="flex items-center gap-5"
                whileInView={{
                  transition: { staggerChildren: 0.1 },
                }}
              >
                {[1, 2, 3].map((_, index) => (
                  <motion.img
                    key={index}
                    src="https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3BhcGVyfGVufDB8fDB8fHww"
                    alt=""
                    className="rounded-xl w-35"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </motion.div>
              <motion.p
                className="!text-blue-500 underline cursor-pointer"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Continue reading{">>"}
              </motion.p>
            </motion.div>

            {/* Second Column */}
            <motion.div className="" variants={itemVariants}>
              <div className="flex flex-col gap-5">
                <motion.h1
                  className="flex items-center gap-2 !font-bold !text-xl"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Lorem, ipsum.
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight
                      className="!text-white bg-gray-400 !p-1 rounded-full"
                      size={18}
                    />
                  </motion.div>
                </motion.h1>
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    className="shadow-md rounded-2xl !p-5 bg-white flex flex-col gap-8"
                    variants={cardVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-5">
                      <motion.button
                        className="!p-2 border border-black"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Lorem.
                      </motion.button>
                      <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                        {formattedDate}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <h3 className="!text-lg !font-bold">
                        Lorem Ipsum dolor sit amet consectetur Feugiat
                        fermentum.
                      </h3>
                      <p className="!text-gray-400 !font-medium !text-sm">
                        Lorem ipsum dolor sit amet consectetur. Diam sagittis
                        faucibus odio pharetra fermentum tellus. Faucibus
                        egestas.
                      </p>
                      {index === 0 ? (
                        <Link to="/blog-detail/1">
                          <motion.p
                            className="!text-blue-500 underline cursor-pointer !text-sm"
                            whileHover={{ scale: 1.02, x: 5 }}
                          >
                            Continue reading{">>"}
                          </motion.p>
                        </Link>
                      ) : (
                        <motion.p
                          className="!text-blue-500 underline cursor-pointer !text-sm"
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          Continue reading{">>"}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Third Column */}
            <motion.div className="" variants={itemVariants}>
              <div className="flex flex-col gap-5">
                <motion.h1
                  className="flex items-center gap-2 !font-bold !text-xl"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Lorem, ipsum.
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight
                      className="!text-white bg-gray-400 !p-1 rounded-full"
                      size={18}
                    />
                  </motion.div>
                </motion.h1>
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    className="shadow-md rounded-2xl !p-5 bg-white flex flex-col gap-8"
                    variants={cardVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-5">
                      <motion.button
                        className="!p-2 border border-black"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Lorem.
                      </motion.button>
                      <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                        {formattedDate}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <h3 className="!text-lg !font-bold">
                        Lorem Ipsum dolor sit amet consectetur Feugiat
                        fermentum.
                      </h3>
                      <p className="!text-gray-400 !font-medium !text-sm">
                        Lorem ipsum dolor sit amet consectetur. Diam sagittis
                        faucibus odio pharetra fermentum tellus. Faucibus
                        egestas.
                      </p>
                      <motion.p
                        className="!text-blue-500 underline cursor-pointer !text-sm"
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        Continue reading{">>"}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogPage;
