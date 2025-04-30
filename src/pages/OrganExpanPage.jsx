import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import spiral from "../assets/images/organexpandpage/spiral.png";
import heart from "../assets/images/organexpandpage/heart-organ.png";
import brain from "../assets/images/organexpandpage/brain-organ.png";
import muscle from "../assets/images/human-anatomy/humanbody.png";
import stomach from "../assets/images/organexpandpage/stomach-organ.png";
import bladder from "../assets/images/organexpandpage/bladder-organ.png";
import owl from "../assets/images/organexpandpage/owl.png";
import humanbody from "../assets//images/human-anatomy/humanbody.png";
import { Plus } from "lucide-react";

import {
  Activity,
  HeartPulse,
  BrainCircuit,
  Dumbbell,
  Utensils,
  Droplets,
} from "lucide-react";
import Testimonials from "../components/OrganExpan/Testimonials";

function OrganExpanPage() {
  const { type } = useParams();
  const [openIndex, setOpenIndex] = useState(null);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const overviewData = {
    brain: {
      title: "Your Brain: The Key to Your Health and Well-Being",
      description:
        "The brain is the command center of your body, controlling everything from your thoughts and emotions to movement and memory. Whether you're seeking answers about brain health, aging, or neurological conditions, this guide will help you understand how your brain works and what you can do to keep it healthy.",
    },
    tabs: [
      {
        title: "How Your Brain Works",
        description: `Imagine your brain as a bustling city, where specialized, "districts" handle different tasks:`,
        points: [
          {
            name: "Cerebrum",
            description: "Thinking, memory & voluntary movement",
          },
          {
            name: "Cerebellum",
            description: "Balance & coordination",
          },
          {
            name: "Brainstem",
            description: "Autopilot for breathing, heart rate & digestion",
          },
          {
            name: "Limbic System",
            description: "Emotions & motivation",
          },
          {
            name: "Thalamus & Hypothalamus",
            description:
              "Sensory relay plus regulation of hunger, sleep & body temperature",
          },
        ],
        conclusion:
          "All these regions communicate constantly to let you move, think and feel—without you even realizing it.",
      },
      {
        title: "How Your Brain Changes with Age",
        points: [
          {
            ageRange: "Childhood (0–10 years)",
            description:
              "Rapid neural-network growth fuels effortless learning, though impulse control is still in development.",
          },
          {
            ageRange: "Teenage Years (10–20 years)",
            description:
              "The emotional limbic system outpaces the still-maturing prefrontal cortex, leading to intense feelings and risk-taking.",
          },
          {
            ageRange: "Adulthood (20–40 years)",
            description:
              "Peak problem-solving and memory—yet stress and lifestyle can introduce fatigue and early burnout.",
          },
          {
            ageRange: "Middle Age (40–65 years)",
            description:
              "Slight shrinkage may slow recall, but experience boosts decision-making; common challenges include brain fog and forgetfulness.",
          },
          {
            ageRange: "Senior Years (65+ years)",
            description:
              "Neuroplasticity remains, but risks for dementia and stroke rise—an active lifestyle can slow cognitive decline.",
          },
        ],
      },
      {
        title: "Common Myths About the Brain",
        myths: [
          {
            myth: "We Only Use 10% of Our Brain",
            reality: "False: nearly every region is active, even during sleep.",
          },
          {
            myth: "Left-Brained vs. Right-Brained People",
            reality:
              "Myth: both hemispheres collaborate on virtually all tasks.",
          },
          {
            myth: "Brain Damage Is Always Permanent",
            reality:
              "Neuroplasticity enables rewiring and functional recovery after injury.",
          },
          {
            myth: "Classical Music Makes You Smarter",
            reality:
              "While it can enhance focus and mood, it doesn't directly boost intelligence.",
          },
        ],
      },
      {
        title: "How to Keep Your Brain Healthy",
        strategies: [
          {
            category: "Nutrition",
            description:
              "Omega-3s (salmon, walnuts), antioxidants (berries, dark chocolate), leafy greens & whole grains nourish neurons.",
          },
          {
            category: "Exercise",
            description:
              "Boosts blood flow, improves memory & lowers neurodegenerative risk.",
          },
          {
            category: "Sleep",
            description: "7–9 hours clears toxins and consolidates memories.",
          },
          {
            category: "Mental Stimulation",
            description:
              "Reading, learning new skills or strategic games builds new neural connections.",
          },
          {
            category: "Stress Management",
            description:
              "Mindfulness, meditation & deep-breathing protect key memory centers and regulate emotions.",
          },
        ],
      },
    ],
  };

  // Define organ data similar to AnatomyCard
  const organData = {
    brain: {
      image: brain,
      title: "The Brain",
      structure:
        "Your brain comprises five primary regions: the cerebrum (the largest section, handling thinking, memory & voluntary movement), the cerebellum (balance & coordination), the brainstem (automatic life-support functions like breathing, heart rate & digestion), the limbic system (emotions & motivation), and the thalamus & hypothalamus (sensory relay plus regulation of hunger, sleep & body temperature)",
      function:
        "Each region plays a distinct role: the cerebrum drives problem-solving and intentional actions; the cerebellum fine-tunes motor control; the brainstem governs vital processes on autopilot; the limbic system orchestrates emotional responses; and the thalamus/hypothalamus integrate sensory signals and maintain homeostasis",
      importance:
        "As your body’s command center, the brain controls everything from thoughts and emotions to movement and memory. Grasping how it operates is essential for protecting cognitive health, optimizing performance, and making lifestyle choices that support long-term wellness",
      facts:
        "Your brain exhibits remarkable neuroplasticity—reorganizing and forming new connections throughout life and even after injury. It processes and consolidates memories during sleep, often unlocking insights overnight, and contrary to the “10%” myth, brain scans reveal nearly every region remains active, even at rest .",
      icons: [
        {
          icon: <BrainCircuit size={24} />,
          value: "86 billion",
          label: "neurons",
        },
        {
          icon: <Activity size={24} />,
          value: "100,000",
          label: "miles of blood vessels",
        },
        {
          icon: <HeartPulse size={24} />,
          value: "750ml",
          label: "blood flow per minute",
        },
      ],
    },
    heart: {
      image: heart,
      title: "The Heart",
      structure:
        "The heart has four chambers: two atria (upper) and two ventricles (lower). It also contains valves that ensure blood flows in the correct direction.",
      function:
        "The heart pumps blood through the circulatory system, delivering oxygen and nutrients to cells and removing waste products.",
      importance:
        "The cardiovascular system is essential for sustaining life, as every cell in the body requires a constant supply of oxygen and nutrients.",
      facts:
        "Your heart beats about 100,000 times per day, pumping 2,000 gallons of oxygen-rich blood to all parts of the body.",
      icons: [
        {
          icon: <Activity size={24} />,
          value: "70-80",
          label: "beats per minute at rest",
        },
        {
          icon: <HeartPulse size={24} />,
          value: "5-6",
          label: "liters of blood pumped per minute",
        },
        {
          icon: <Activity size={24} />,
          value: "2.5B",
          label: "heartbeats in an average lifetime",
        },
      ],
    },
    muscle: {
      image: muscle,
      title: "Skeletal Muscles",
      structure:
        "Skeletal muscles are made up of bundles of muscle fibers called fascicles. Each muscle fiber contains myofibrils composed of sarcomeres, the basic functional units of muscles.",
      function:
        "Skeletal muscles are attached to bones by tendons and are used to create movement by contracting and relaxing.",
      importance:
        "Besides movement, skeletal muscles maintain posture, generate body heat, and protect internal organs.",
      facts:
        "Skeletal muscles make up about 40% of your body weight and contain 50-75% of all proteins in your body.",
      icons: [
        {
          icon: <Dumbbell size={24} />,
          value: "640+",
          label: "muscles in the body",
        },
        {
          icon: <Activity size={24} />,
          value: "35%",
          label: "of body mass in men",
        },
        {
          icon: <HeartPulse size={24} />,
          value: "30%",
          label: "of body mass in women",
        },
      ],
    },
    stomach: {
      image: stomach,
      title: "The Stomach",
      structure:
        "The stomach is a J-shaped organ with three main parts: the fundus (top), the body (middle), and the antrum (bottom). It has three layers of muscles and a mucus lining.",
      function:
        "The stomach stores food, mixes it with digestive juices, and begins the process of breaking down food into nutrients the body can absorb.",
      importance:
        "The stomach plays a crucial role in digestion, protecting the body from harmful substances, and producing hormones that regulate hunger.",
      facts:
        "The stomach can expand to hold about 1-1.5 liters of food and liquid. It produces 2-3 liters of gastric juice daily.",
      icons: [
        {
          icon: <Utensils size={24} />,
          value: "3-5",
          label: "hours to digest a meal",
        },
        {
          icon: <Activity size={24} />,
          value: "pH 1-3",
          label: "stomach acid",
        },
        {
          icon: <HeartPulse size={24} />,
          value: "20-30%",
          label: "of protein digestion",
        },
      ],
    },
  };

  const faqItems = [
    {
      question: "How do I book a therapy session?",
      answer:
        "You can book a therapy session through our online portal or by calling our customer service. Simply select your preferred therapist, date, and time slot that works for you.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes, we offer convenient online therapy sessions through our secure video platform. These sessions provide the same quality care as in-person visits from the comfort of your home.",
    },
    {
      question: "What's the difference between therapy and coaching?",
      answer:
        "Therapy typically focuses on healing, processing emotions, and addressing mental health concerns, while coaching focuses on setting goals, personal development, and future-oriented strategies.",
    },
    {
      question: "Do I need a subscription to access services?",
      answer:
        "We offer both subscription plans and pay-per-session options. Subscriptions provide better value if you plan on regular sessions, while individual bookings offer more flexibility.",
    },
    {
      question: "Can I switch therapists if I don't feel the right connection?",
      answer:
        "Absolutely! We understand the importance of finding the right therapist. You can request a change at any time, and we'll help match you with someone who better fits your needs.",
    },
    {
      question: "Is my information and session history kept confidential?",
      answer:
        "Yes, we adhere to strict confidentiality standards. Your personal information and session details are encrypted and protected according to HIPAA regulations and professional ethics standards.",
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
        staggerChildren: 0.2,
      },
    },
  };

  // Get the current organ data or default to heart if type doesn't exist
  const currentOrgan = organData[type] || organData.heart;
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E7FFC9]">
      <motion.div
        className="bg-[#ADFB49] flex-grow flex items-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <img
          src={spiral}
          alt="Background spiral"
          className="w-1/2 absolute z-0"
        />

        <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full !p-10">
          {/* Organ image */}
          <motion.div
            className="flex items-center justify-center"
            variants={fadeInUp}
          >
            <img
              src={currentOrgan.image}
              alt={currentOrgan.title}
              className="w-96"
            />
          </motion.div>

          {/* Information section - SLIGHTLY LARGER THAN PREVIOUS VERSION */}
          <motion.div
            className="flex flex-col gap-4 bg-white !p-5 rounded-2xl shadow-lg w-full md:w-4/5 mt-22 mx-auto"
            variants={fadeInUp}
          >
            <h1 className="!text-2xl !font-bold text-blue-900">
              {currentOrgan.title}
            </h1>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {/* Structure info card */}
              <motion.div
                className="bg-[#022759] rounded-xl !p-4 !text-white"
                variants={fadeInUp}
              >
                <h2 className="!text-md !font-bold mb-2 !text-white">
                  Structure
                </h2>
                <p className="!text-sm !text-white">{currentOrgan.structure}</p>
              </motion.div>

              {/* Function info card */}
              <motion.div
                className="bg-[#022759] rounded-xl !p-4 !text-white"
                variants={fadeInUp}
              >
                <h2 className="!text-md !font-bold mb-2 !text-white">
                  Function
                </h2>
                <p className="!text-sm !text-white">{currentOrgan.function}</p>
              </motion.div>

              {/* Importance info card */}
              <motion.div
                className="bg-[#022759] rounded-xl !p-4 !text-white"
                variants={fadeInUp}
              >
                <h2 className="!text-md !font-bold mb-2 !text-white">
                  Importance
                </h2>
                <p className="!text-sm !text-white">
                  {currentOrgan.importance}
                </p>
              </motion.div>

              {/* Facts info card */}
              <motion.div
                className="bg-[#022759] rounded-xl !p-4 "
                variants={fadeInUp}
              >
                <h2 className="!text-md !font-bold mb-2 !text-white">
                  Key Facts
                </h2>
                <p className="!text-sm !text-white">{currentOrgan.facts}</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-4 !p-4 rounded-xl bg-[#022759]"
              variants={fadeInUp}
            >
              {currentOrgan.icons.map((item, index) => (
                <div
                  key={index}
                  className="bg-white !p-3 rounded-xl flex flex-col items-center justify-center w-full"
                >
                  <div className="mb-2 text-[#002B5B]">{item.icon}</div>
                  <p className="!text-lg !font-bold text-[#002B5B]">
                    {item.value}
                  </p>
                  <p className="!text-[10px] text-[#002B5B]">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="bg-white w-full !p-10">
        <motion.div
          className="flex flex-col items-center justify-center text-[#022759] gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h1 className="!text-4xl !font-bold">{overviewData.brain.title}</h1>
          <p className="!font-medium !text-sm w-[58%] text-center">
            {overviewData.brain.description}
          </p>
        </motion.div>

        <div className="flex items-center justify-between !mt-20">
          <div className="flex items-center justify-center relative w-1/3">
            <img
              src={owl}
              alt="Owl mascot"
              className="w-90 wwa-page-scrolling"
            />
            <img
              src={currentOrgan.image}
              alt={`${currentOrgan.title} illustration`}
              className="absolute w-30"
            />
          </div>
          <motion.div
            className="w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="space-x-2 !mb-4 flex flex-wrap gap-2">
              {overviewData.tabs.map((tab, index) => (
                <button
                  key={index}
                  className="bg-[#C4DDFF] !px-4 !py-2 hover:bg-[#ADFB49] hover:text-white !text-xs  cursor-pointer !font-bold text-[#022759] transition rounded-lg"
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="bg-white !p-4 rounded-xl max-w-xl shadow-md">
              <p className="!font-bold !text-lg text-[#022759]">
                Overview of {currentOrgan.title}
              </p>
              <p className="text-gray-700 !mt-2">{currentOrgan.structure}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-[#E7FFC9] w-full !p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="flex flex-col items-center justify-center text-[#022759] gap-3">
          <h1 className="!text-4xl !font-bold">
            Overview of {currentOrgan.title}
          </h1>
          <p className="!font-medium !text-sm w-1/2 text-center">
            {currentOrgan.importance}
          </p>
        </div>
        <div className="flex items-start justify-around !px-10 !mt-20">
          <div className="">
            <img src={humanbody} alt="" className="w-[70%]" />
          </div>
          <motion.div
            className="w-full flex flex-col gap-4"
            variants={staggerContainer}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl !p-5"
                variants={fadeInUp}
              >
                <button
                  className="w-full flex items-center justify-between !p-4 text-left focus:outline-none cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <span className="!font-medium text-gray-700">
                    {item.question}
                  </span>
                  <span className="!p-1 rounded-full bg-gray-200">
                    <Plus size={20} className="transition-transform " />
                  </span>
                </button>

                {openIndex === index && (
                  <div className="!px-4 !pb-4 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <Testimonials image={currentOrgan.image} />
    </div>
  );
}

export default OrganExpanPage;
