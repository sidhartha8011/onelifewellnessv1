import React from "react";
import { MoveDown } from "lucide-react";
import { MoveUp } from "lucide-react";
import flowers from "../../assets/images/organexpandpage/flowers.png";
import { motion } from "framer-motion";

function Testimonials({ image }) {
  const testimonials = [
    {
      id: 1,
      text: "Since using AIChefMate, I've rediscovered my love for cooking! The meal plans are easy and delicious. It's been a game-changer for my busy lifestyle.",
      name: "Emily R.",
      bgColor: "bg-blue-900 !text-white",
      img: "https://images.unsplash.com/photo-1743090597684-8929e6b86b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },
    {
      id: 2,
      text: "I never knew healthy eating could be this simple. From grocery shopping to AIChefMate, my family enjoys diverse, nutritious meals every day.",
      name: "Mark T.",
      bgColor: "bg-blue-900 !text-white",
      img: "https://images.unsplash.com/photo-1743674445265-b311b0ba8118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },
    {
      id: 3,
      text: "The grocery delivery is been incredible! Plus, every meal feels tailored just for me. I'm eating better and feeling great. A big thumbs up!",
      name: "Sarah J.",
      bgColor: "bg-blue-900 !text-white",
      img: "https://images.unsplash.com/photo-1744754460094-7b7df9e1cfcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      text: "This been a revelation for my meal prep routine. The AI-generated plans are spot-on with my tastes and nutritional needs, making healthy eating effortless and enjoyable.",
      name: "Rebecca S.",
      bgColor: "bg-blue-900 !text-white",
      img: "https://images.unsplash.com/photo-1734727348367-d3642d9c686c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "How does the AI create personalized meal plans?",
      answer:
        "Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.",
    },
    {
      id: 2,
      question:
        "Can I integrate special dietary requirements into my meal plan?",
      answer:
        "Absolutely! Our platform is designed to accommodate a range of dietary needs, including vegetarian, vegan, gluten-free, and more. Simply specify your requirements in your profile, and your meal plans will be adjusted accordingly.",
    },
    {
      id: 3,
      question: "How does the grocery delivery service work?",
      answer:
        "Our grocery delivery service partners with local stores to bring fresh ingredients directly to your door based on your meal plan. You can schedule deliveries at your convenience, with options for contactless delivery.",
    },
    {
      id: 4,
      question: "Are there options for budget-conscious users?",
      answer:
        "Yes! You can set budget preferences in your profile, and our AI will create affordable meal plans while maintaining nutritional value. We also highlight cost-effective ingredients and seasonal options.",
    },
    {
      id: 5,
      question:
        "How does the platform accommodate allergies and food sensitivities?",
      answer:
        "Safety is our priority. When you input allergies or sensitivities in your profile, our system automatically excludes those ingredients from your meal plans. We also provide allergen information for all recipes.",
    },
    {
      id: 6,
      question: "Can I adjust my meal plans after they've been created?",
      answer:
        "Absolutely! You can modify any meal plan by swapping recipes, adjusting portions, or changing ingredients. The AI learns from these adjustments to better serve your preferences in the future.",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div>
      <div className="bg-white">
        <motion.div
          className="flex flex-col !p-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="!text-gray-300">Frame</p>
          <div className="flex items-center gap-5">
            <h2 className="!text-4xl !font-medium !text-gray-800">
              Testimonials
            </h2>
            <p className="!text-8xl !font-thin !text-gray-300">/</p>
            <div className=" !text-gray-600 !mt-1">
              <p>
                Real stories from satisfied users: see
                <br />
                how our platform changes lives
              </p>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 !p-4 !mt-10"
            variants={staggerContainer}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="flex flex-col justify-between !px-6 !py-20 cursor-pointer rounded-3xl bg-[#F1F2ED] hover:bg-[#022759] transition-all duration-300 group"
                variants={fadeInUp}
              >
                <p className="!text-gray-800 group-hover:!text-white !text-lg !font-normal !mb-4 transition-colors duration-300">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 !mt-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.img}
                      alt={`${testimonial.name}'s avatar`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="!text-gray-600 group-hover:!text-white !text-sm !font-medium transition-colors duration-300">
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col !p-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="!text-gray-300">FAQ</p>
          <div className="flex items-center gap-5">
            <h2 className="!text-4xl !font-medium !text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="!text-8xl !font-thin !text-gray-300">/</p>
            <div className=" !text-gray-600 !mt-1">
              <p>
                Meal planning made easy: your
                <br />
                questions, answered
              </p>
            </div>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer}
          >
            <motion.div
              className="flex items-start justify-between gap-10 w-full bg-[#F1F2ED] !p-15 rounded-3xl !mt-10"
              variants={fadeInLeft}
            >
              <div className="border border-black rounded-full !p-5 !py-8 bg-[#D9EF78]">
                <span className="">
                  <MoveDown className="" />
                </span>
              </div>
              <div className="flex flex-col items-start gap-5">
                <p className="!font-semibold !text-lg">
                  How does the AI create personalized meal plans?
                </p>
                <p className="!font-regular">
                  Our AI system analyzes your dietary preferences, health goals,
                  and budget to curate meal plans that are unique to you. It
                  continually learns from your feedback and choices to improve
                  its suggestions over time.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start justify-between gap-10 w-full bg-[#F1F2ED] !p-15 rounded-3xl !mt-10"
              variants={fadeInRight}
            >
              <div className="border border-black rounded-full !p-5 !py-8 bg-[#D9EF78]">
                <span className="">
                  <MoveDown className="" />
                </span>
              </div>
              <div className="flex flex-col items-start gap-5">
                <p className="!font-semibold !text-lg">
                  How does the AI create personalized meal plans?
                </p>
                <p className="!font-regular">
                  Our AI system analyzes your dietary preferences, health goals,
                  and budget to curate meal plans that are unique to you. It
                  continually learns from your feedback and choices to improve
                  its suggestions over time.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 !mt-10 !px-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="flex items-center gap-5" variants={fadeInUp}>
              <span className="border border-black rounded-full !p-3">
                <MoveUp className="" size={13} />
              </span>
              <p className="">How does the grocery delivery service work?</p>
            </motion.div>
            <motion.div
              className="flex items-center gap-5 !ml-10"
              variants={fadeInUp}
            >
              <span className="border border-black rounded-full !p-3">
                <MoveUp className="" size={13} />
              </span>
              <p className="">
                How does the platform accommodate allergies and food
                sensitivities?
              </p>
            </motion.div>
            <motion.div className="flex items-center gap-5" variants={fadeInUp}>
              <span className="border border-black rounded-full !p-3">
                <MoveUp className="" size={13} />
              </span>
              <p className="">Are there options for budget-conscious users?</p>
            </motion.div>
            <motion.div
              className="flex items-center gap-5 !ml-10"
              variants={fadeInUp}
            >
              <span className="border border-black rounded-full !p-3">
                <MoveUp className="" size={13} />
              </span>
              <p className="">
                Can I adjust my meal plans after they've been created?
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col !mt-30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="!text-gray-300">Benefits</p>
            <div className="flex items-center gap-5">
              <h2 className="!text-4xl !font-medium !text-gray-800">
                Benefits
              </h2>
              <p className="!text-8xl !font-thin !text-gray-300">/</p>
              <div className=" !text-gray-600 !mt-1">
                <p>
                  Get meal plans tailored to your unique
                  <br /> dietary needs, preferences, and goals,
                  <br /> ensuring a balanced and enjoyable diet.
                </p>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-4 gap-4 !p-4 !mt-10"
              variants={staggerContainer}
            >
              <motion.div
                className="flex flex-col justify-between !px-10 !py-24 cursor-pointer rounded-4xl bg-[#D9EF78] hover:bg-[#022759] transition-all duration-300 group"
                variants={fadeInUp}
              >
                <p className="!text-4xl !font-light group-hover:!text-white">
                  Personalized Nutrition
                </p>
                <p className=" group-hover:!text-white !font-light">
                  Get meal plans tailored to your unique dietary needs,
                  preferences, and goals, ensuring a balanced and enjoyable
                  diet.
                </p>
              </motion.div>
              <motion.div
                className="transition-all duration-300 group overflow-hidden"
                variants={fadeInUp}
              >
                <img
                  src="https://images.unsplash.com/photo-1617500603321-bcd6286973b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZlZ2V0YWJsZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="object-cover w-full h-full rounded-4xl"
                />
              </motion.div>
              <motion.div
                className="flex flex-col justify-between !px-10 !py-24 cursor-pointer rounded-4xl bg-[#F1F2ED] hover:bg-[#022759] transition-all duration-300 group"
                variants={fadeInUp}
              >
                <p className="!text-4xl !font-light group-hover:!text-white">
                  Time-Saving Convenience
                </p>
                <p className=" group-hover:!text-white !font-light">
                  Say goodbye to meal planning stress. Our AI-driven platform
                  simplifies your weekly meal preparation, saving you valuable
                  time.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-between !px-10 !py-24 cursor-pointer rounded-4xl bg-[#F1F2ED] hover:bg-[#022759] transition-all duration-300 group"
                variants={fadeInUp}
              >
                <p className="!text-4xl !font-light group-hover:!text-white">
                  Healthier Eating Habits
                </p>
                <p className=" group-hover:!text-white !font-light">
                  Easily adopt a healthier lifestyle with nutrient-rich meal
                  plans and educational content on nutrition and wellness.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-between !px-10 !py-24 cursor-pointer rounded-4xl bg-[#F1F2ED] hover:bg-[#022759] transition-all duration-300 group"
                variants={fadeInUp}
              >
                <p className="!text-4xl !font-light group-hover:!text-white">
                  Cost-Effective Shopping
                </p>
                <p className=" group-hover:!text-white !font-light">
                  Reduce food waste and save money with efficient grocery
                  shopping lists that align perfectly with your meal plans.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-5 justify-between !px-10 !py-24 cursor-pointer rounded-4xl bg-[#F1F2ED] hover:bg-[#022759] transition-all duration-300 group"
                variants={fadeInUp}
              >
                <p className="!text-4xl !font-light group-hover:!text-white">
                  Seamless Grocery Delivery
                </p>
                <p className=" group-hover:!text-white !font-light">
                  Enjoy the convenience of having all your meal ingredients
                  delivered right to your doorstep through our local grocery
                  store partnerships.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-between !px-10 !py-24 cursor-pointer rounded-4xl bg-[#022759] transition-all duration-300 group"
                variants={fadeInUp}
              >
                <p className="!text-4xl !font-light !text-[#022759]">
                  Personalized Nutrition
                </p>
                <p className=" !text-[#022759] !font-light">
                  Get meal plans tailored to your unique dietary needs,
                  preferences, and goals, ensuring a balanced and enjoyable
                  diet.
                </p>
              </motion.div>
              <motion.div
                className="flex items-center justify-center transition-all duration-300 group overflow-hidden"
                variants={fadeInUp}
              >
                <img
                  src={image}
                  alt=""
                  className="object-cover w-60 rounded-4xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="bg-[#E7FFC9] w-full !p-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-2 gap-5 !p-4">
          {/* Footer section */}
          <motion.div
            className="bg-white !px-6 sm:!px-10 md:!px-20 !py-10 md:!py-20 rounded-2xl shadow-md flex flex-col gap-10 w-full lg:w-auto"
            variants={fadeInLeft}
          >
            <p className="!text-4xl !text-black !font-semibold">Solus</p>
            <div className="flex items-start justify-between gap-5 sm:gap-10 w-full">
              <div className="flex flex-col gap-5">
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  About
                </p>
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  Services
                </p>
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  Therapist
                </p>
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  Resources
                </p>
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  Contact
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  Instagram
                </p>
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  Facebook
                </p>
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  YouTube
                </p>
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  LinkedIn
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  Terms of use
                </p>
                <p className="!text-sm !text-gray-400 hover:!text-gray-700 cursor-pointer">
                  Privacy Policy
                </p>
              </div>
            </div>
          </motion.div>

          {/* Support section */}
          <motion.div
            className="bg-[#022759] !pl-6 sm:!pl-10 md:!pl-20 !py-10 md:!py-20 rounded-2xl shadow-lg w-full lg:w-auto !mt-5 lg:!mt-0"
            variants={fadeInRight}
          >
            <div className="!flex !flex-col md:!flex-row items-center justify-between ">
              <p className="!text-white !text-4xl md:!text-4xl !font-semibold !mb-6 md:!mb-0 max-w-md">
                Find Support,
                <br /> Guidance, <br />
                and Balance.
              </p>

              <img
                src={flowers}
                alt="Decorative flowers"
                className="w-40 md:w-1/3 h-auto !right-0"
              />
            </div>
            <button className="bg-white hover:bg-gray-100 !text-[#022759] !font-bold !py-3 !px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Find Support Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Testimonials;
