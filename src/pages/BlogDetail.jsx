import React from "react";
import { CirclePlus, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BlogDetail() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="!mb-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex items-center justify-between !px-10 gap-12 !py-5 w-full h-full !mt-24"
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

      <div className="flex flex-col items-center justify-center gap-5 !px-10 !py-5 w-full h-full">
        <motion.div
          className="flex flex-col items-center justify-center gap-5 !px-10 !py-5 w-full h-full !mt-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="!text-3xl !font-bold !text-black text-center"
            variants={textRevealVariants}
          >
            Lorem Ipsum dolor sit amet consectetur Feugiat fermentum.
          </motion.h1>
          <motion.p
            className="!text-xs !font-medium !text-[#8d8d8d] text-center !px-50"
            variants={textRevealVariants}
          >
            Lorem ipsum dolor sit amet consectetur. Diam sagittis faucibus odio
            pharetra fermentum tellus. Faucibus egestas morbi elementum vel
            tortor fames dolor volutpat faucibus. Id quis faucibus consectetur
            sit cursus fusce dui. Tempor luctus vel arcu est.
          </motion.p>
        </motion.div>

        <div className="">
          <motion.div
            className="h-full flex items-center justify-center gap-5 !px-10 !py-5 w-full overflow-hidden"
            variants={imageVariants}
          >
            <motion.img
              src="https://plus.unsplash.com/premium_photo-1681966826227-d008a1cfe9c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div
            className="grid grid-cols-6 !px-10 gap-5"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="col-span-4 flex flex-col"
              variants={itemVariants}
            >
              <motion.h2
                className="!text-xl md:!text-4xl !font-bold !text-gray-800 !mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Lorem Ipsum dolor sit amet consectetur Feugiat fermentum.
              </motion.h2>
              <motion.p
                className="text-justify max-w-none !text-gray-700 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Lorem ipsum dolor sit amet consectetur. Velit platea diam sed ut
                rhoncus. Sed et viverra ullamcorper dictumst elementum mi. Massa
                elementum adipiscing facilisis nisl. Vitae mauris iaculis nunc
                facilisi a pretium at lobortis nunc. Sit odio sed consequat
                scelerisque dolor ac. Scelerisque placerat amet quis vestibulum
                vitae. Consectetur id eget amet pretium semper pulvinar sit cum.
                Pellentesque dictumst eu sem in a orci in. Lacus eget varius mi
                velit sed. Sodales adipiscing ridiculus mattis tempor facilisis
                elementum pretium tincidunt. Sed mattis augue gravida dolor
                mattis vulputate quisque dolor erat. Elementum id amet risus
                vitae. Dictumst sed cursus id ac mattis elit. Ut fringilla arcu
                quis suspendisse in dolor faucibus. Pharetra vulputate dui
                turpis aliquet at mi adipiscing curabitur tristique. Vulputate
                eu diam tristique cursus. Habitant turpis in a egestas aenean ut
                id laoreet congue. Cras enim auctor suspendisse iaculis nunc
                venenatis dui. Porttitor enim rhoncus nec morbi quis. Ac sit
                placerat tempor non facilisi volutpat tristique. Tempus lacus
                gravida vitae sapien at. Cras sit vitae cras faucibus. Massa
                feugiat dapibus facilisis gravida pellentesque in. Lorem arcu
                turpis volutpat pretium lorem sed. Mi enim justo in integer
                arcu. Nascetur amet volutpat risus tortor scelerisque sociis
                blandit at amet. Viverra tellus fermentum et tempus auctor
                egestas. Rhoncus porta odio quisque nulla enim tellus. In
                euismod lacus turpis cras enim mollis ac nunc et. Odio sed
                potenti vulputate id volutpat. Sit amet vestibulum pellentesque
                eros nulla at lectus sed porta. Massa neque eget ultricies nunc
                non morbi sodales. Egestas nam facilisi posuere volutpat. Tellus
                non dictum ornare aliquam sem massa sapien orci. Odio ut quisque
                nec ut lorem massa pellentesque commodo enim. Et adipiscing sed
                orci augue cursus aliquam. Aliquet facilisis egestas netus urna
                viverra. Risus sodales et phasellus eget at. Cursus cursus non
                quis dui nec dui leo. Rhoncus tristique congue nunc eleifend
                venenatis sit. Eget lectus nunc augue donec ac urna. Dui enim
                tempor auctor metus. Aenean at gravida habitasse ultricies lorem
                metus. Nulla sed dictum id commodo risus. Posuere tempus
                consequat risus magna pellentesque tempor. Quam pulvinar
                placerat amet semper cursus diam lectus iaculis. Tellus faucibus
                amet vitae eget vitae proin vivamus. Sed amet nulla neque
                tincidunt pretium eget vulputate eu malesuada. Placerat
                elementum vivamus velit elementum mi et nibh nulla.
              </motion.p>
            </motion.div>
            <motion.div
              className="col-span-2"
              variants={itemVariants}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.div
                className="shadow-md rounded-2xl !p-5 bg-white flex flex-col gap-5"
                variants={cardVariants}
                whileHover="hover"
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
                    Lorem Ipsum dolor sit amet consectetur Feugiat fermentum.
                  </h3>
                  <p className="!text-gray-400 !font-medium !text-sm">
                    Lorem ipsum dolor sit amet consectetur. Diam sagittis
                    faucibus odio pharetra fermentum tellus. Faucibus egestas.
                  </p>
                  <Link to="/blog-detail/1">
                    <motion.p
                      className="!text-blue-500 underline cursor-pointer !text-sm"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Continue reading{">>"}
                    </motion.p>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogDetail;
