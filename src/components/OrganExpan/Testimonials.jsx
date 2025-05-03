import React, { useState, useRef, useEffect } from "react";
import { MoveDown, MoveUp, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import flowers from "../../assets/images/organexpandpage/flowers.png";

function Testimonials({ image, type }) {
  // Single state to track which FAQ is expanded, -1 means none
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Toggle function for FAQs
  const toggleFAQ = (index) => {
    if (expandedFAQ === index) {
      // If clicking the already expanded FAQ, collapse it
      setExpandedFAQ(null);
    } else {
      // Otherwise expand the clicked FAQ and collapse any other
      setExpandedFAQ(index);
    }
  };

  // Combined FAQ data
  const allFAQs = {
    brain: [
      {
        question: " Your brain never turns off",
        answer:
          "Even while you sleep, your brain is active—sorting memories, clearing waste, and regulating vital functions like breathing and heart rate.",
      },
      {
        question: " Stress changes your brain",
        answer:
          "Chronic stress can shrink key areas like the hippocampus (memory) and enlarge the amygdala (emotional reactivity), affecting mood and decision-making.",
      },
      {
        question: " Learning reshapes your brain",
        answer:
          "Every time you learn something new, your brain forms and strengthens connections—this ability is called neuroplasticity and it lasts a lifetime.",
      },
      {
        question: " The brain and gut are connected",
        answer:
          "Your brain communicates with your gut through the vagus nerve and shared neurotransmitters—what you eat can directly affect how you feel and think.",
      },
      {
        question: " You use your whole brain",
        answer:
          "The idea that we only use 10% of our brain is a myth. Nearly every region is active, even when you're resting or daydreaming.",
      },
      {
        question: " Brain cells talk in milliseconds",
        answer:
          "Neurons send signals across your body in just milliseconds—faster than any computer, enabling instant reactions and decisions.",
      },
    ],
  };

  const currentFaq = allFAQs[type];

  const basicFacts = {
    brain: {
      sub: "Facts",
      title: "Brain Myths vs. Facts",
      description: `Quick insights into one of your body's most powerful organs.`,
      fact: [
        {
          title: "Myth: The brain stops growing after childhood.",
          description: `Fact: Your brain is capable of lifelong change. Neuroplasticity allows it to adapt, grow, and rewire itself—even after injury or trauma.`,
        },
        {
          title: "Myth: The brain doesn't use much energy.",
          description: `Fact: Your brain uses about 20% of your body's total energy—even though it's just 2% of your weight. It's always working, even at rest.`,
        },
        {
          title: "Myth: Sleep is just for rest—not for the brain.",
          description: `Fact: During deep sleep, your brain consolidates memories, clears toxins, and recharges. Sleep is essential for focus and emotional balance.`,
        },
        {
          title: "Myth: The brain isn't very active.",
          description: `Fact: Your brain generates up to 70,000 thoughts every day—guiding your decisions, memories, and feelings from moment to moment.`,
        },
        {
          title: `Myth: The brain doesn't need much blood.`,
          description: `Fact: The brain has around 100,000 miles of blood vessels—enough to circle the Earth four times—delivering vital nutrients and oxygen.`,
        },
        {
          title: "Myth: The brain only has a few nerve cells.",
          description: `Fact: Your brain contains about 86 billion neurons, each forming thousands of connections to send signals across your entire body.`,
        },
      ],
    },
    heart: {
      sub: "Facts",
      title: "Heart Myths vs. Facts",
      description: `Quick insights into one of your body's most powerful organs.`,
      fact: [
        {
          title: "Myth: Only older people get heart disease.",
          description: `Fact: Heart disease can affect people of all ages, especially with poor diet, stress, smoking, or family history.`,
        },
        {
          title: "Myth: A strong heart doesn't need exercise.",
          description: `Fact: Even the healthiest heart benefits from regular activity—exercise strengthens your heart just like any other muscle.`,
        },
        {
          title: "Myth: Chest pain is the only heart attack symptom.",
          description: `Fact: Other signs include jaw pain, nausea, shortness of breath, and fatigue—especially in women.`,
        },
        {
          title: "Myth: If I feel fine, my heart must be healthy.",
          description: `Fact: Heart problems can build silently for years. Regular checkups are key, even without symptoms.`,
        },
        {
          title: "Myth: Heart problems only come from genetics.",
          description: `Fact: Lifestyle plays a major role—what you eat, how much you move, and how you manage stress all impact your heart health.`,
        },
        {
          title: "Myth: Only cardio workouts matter for the heart.",
          description: `Fact: Strength training, flexibility, and even walking are all heart-healthy when done consistently.`,
        },
      ],
    },
    stomach: {
      sub: "Facts",
      title: "Gut Myths vs. Facts",
      description: `Understanding your microbiome goes beyond digestion—your gut influences everything from immunity to mood.`,
      fact: [
        {
          title: "Myth: A healthy gut just means no bloating",
          description:
            "Fact: Gut health includes immunity, mood, energy, and metabolism—not just digestion",
        },
        {
          title: "Myth: Probiotics are all you need",
          description:
            "Fact: They help, but gut health also depends on fiber, sleep, movement, and stress",
        },
        {
          title: "Myth: All gut issues are food-related",
          description:
            "Fact: Sleep loss, medications, and mental health can impact your gut too",
        },
        {
          title:
            "Myth: You only need to care about your gut if you have symptoms",
          description:
            "Fact: A balanced gut supports long-term wellness—even if you feel fine today",
        },
        {
          title: "Myth: More fiber is always better",
          description:
            "Fact: Fiber helps—but too much, too fast can cause discomfort. Gradual change is key",
        },
        {
          title: `"Myth: You need a "gut detox""`,
          description:
            "Fact: Your body detoxes naturally—daily balance is better than any cleanse",
        },
      ],
    },
    muscleArm: {
      sub: "Facts",
      title: "Muscle & Joint Myths vs. Facts",
      description: `Stay strong and mobile by separating common myths from science-backed truths about movement, aging, and pain.`,
      fact: [
        {
          title: "Myth: Bones stop changing after your teens",
          description:
            "Fact: Bones constantly rebuild—they respond to use, nutrition, and age",
        },
        {
          title: "Myth: You should avoid all activity when joints hurt",
          description:
            "Fact: Gentle movement often reduces pain and helps joints stay flexible",
        },
        {
          title: "Myth: Cracking joints causes arthritis",
          description:
            "Fact: It doesn't cause joint damage, though it might annoy those around you!",
        },
        {
          title: "Myth: Strength training is only for athletes",
          description:
            "Fact: It's key for maintaining bone density, mobility, and injury prevention for everyone",
        },
        {
          title: "Myth: Back pain always means something is wrong",
          description:
            "Fact: Most back pain comes from posture or strain and improves with movement",
        },
        {
          title: "Myth: Muscle loss is inevitable with age",
          description:
            "Fact: Resistance training and protein intake help maintain and rebuild muscle at any age",
        },
      ],
    },
  };

  const currentFacts = basicFacts[type];

  const benefits = {
    brain: {
      sub: "benefits",
      title: "Brain Health Benefits",
      description: `Support your brain's health and performance with simple, science-backed habits that improve focus, memory, and long-term function.`,
      insight: [
        {
          title: "Cognitive Clarity",
          description:
            "Improve focus and mental sharpness with habits like staying hydrated, getting enough sleep, and taking regular screen breaks.",
        },
        {
          title: "Emotional Balance",
          description:
            "Support emotional well-being by calming stress centers in the brain through mindfulness, social connection, and gratitude.",
        },
        {
          title: "Memory Boost",
          description:
            "Strengthen memory with quality sleep, healthy fats, and daily brain exercises like puzzles, learning, or journaling.",
        },
        {
          title: "Stress Resilience",
          description:
            "Protect your brain from chronic stress by practicing deep breathing, movement, and rest to reduce cortisol's impact.",
        },
        {
          title: "Neuroplasticity Growth",
          description:
            "Keep your brain flexible by learning new skills, switching routines, or engaging in novel experiences that challenge your thinking.",
        },
        {
          title: "Brain-Healthy Nutrition",
          description:
            "Fuel your mind with omega-3s, leafy greens, and antioxidant-rich foods that help neurons thrive and fight inflammation.",
        },
        {
          title: "Better Sleep Cycles",
          description:
            "Give your brain 7–9 hours of restful sleep to lock in memories, clear toxins, and reset for the next day.",
        },
      ],
    },
    heart: {
      sub: "benefits",
      title: "Heart Health Benefits",
      description: `Support your heart's health and performance with simple, science-backed habits that improve circulation, endurance, and long-term function.`,
      insight: [
        {
          title: "Stronger Circulation",
          description:
            "Delivers oxygen and nutrients efficiently to muscles, brain, and vital organs.",
        },
        {
          title: "Steadier Energy",
          description:
            "Keeps you energized and focused throughout the day by fueling cells consistently.",
        },
        {
          title: "Reduced Disease Risk",
          description:
            "Lowers chances of hypertension, heart attacks, and other cardiovascular conditions.",
        },
        {
          title: "Emotional Regulation",
          description:
            "Improved heart health leads to better stress response and emotional balance.",
        },
        {
          title: "Deeper, Restorative Sleep",
          description:
            "A calm, regulated heart enhances sleep quality and overnight recovery.",
        },
        {
          title: "Long-Term Vitality",
          description:
            "Maintains stamina and supports healthy aging through improved resilience.",
        },
        {
          title: "Quick Recovery from Stress",
          description:
            "A healthy heart helps you bounce back faster from emotional or physical challenges.",
        },
        {
          title: "Better Physical Performance",
          description:
            "Supports strength, endurance, and overall activity levels with improved circulation.",
        },
      ],
    },

    stomach: {
      sub: "benefits",
      title: "Gut Health Benefits",
      description: `Support your gut for smoother digestion, stronger immunity, better mood, and lifelong wellness.`,
      insight: [
        {
          title: "Better Digestion",
          description:
            "A healthy gut breaks down food efficiently and keeps you regular, reducing bloating, cramping, and discomfort.",
        },
        {
          title: "Stronger Immunity",
          description:
            "Your gut helps defend against illness by supporting your immune system and reducing inflammation.",
        },
        {
          title: "Improved Mood & Focus",
          description:
            "A balanced microbiome supports better mental clarity, mood stability, and emotional resilience.",
        },
        {
          title: "Hormone Balance",
          description:
            "Your gut helps regulate hormones that affect appetite, stress, sleep, and mood—creating internal balance.",
        },
        {
          title: "Clearer Skin",
          description:
            "Skin issues like acne and eczema can reflect gut imbalances. A healthy gut may reduce breakouts and improve glow.",
        },
        {
          title: "Energy Support",
          description:
            "Efficient digestion means better nutrient absorption—keeping you fueled and focused throughout the day.",
        },
        {
          title: "Long-Term Health Protection",
          description:
            "A diverse gut microbiome lowers your risk for chronic conditions like diabetes, obesity, autoimmune issues, and even Alzheimer's.",
        },
      ],
    },
    muscleArm: {
      sub: "benefits",
      title: "Musculoskeletal Health Benefits",
      description: `Support your muscles, bones, and joints to stay strong, mobile, and injury-resistant throughout life.`,
      insight: [
        {
          title: "Postural Strength",
          description:
            "A strong MSK system helps you stand tall, sit correctly, and reduce strain on your spine, joints, and muscles.",
        },
        {
          title: "Injury Prevention",
          description:
            "Muscle strength and joint stability protect your body from everyday injuries like falls, strains, or back pain.",
        },
        {
          title: "Mobility & Flexibility",
          description:
            "Healthy muscles and joints allow smooth, pain-free movement—making everyday actions like climbing stairs or lifting bags easier.",
        },
        {
          title: "Functional Fitness",
          description:
            "The MSK system powers your ability to carry, walk, balance, and stay independent—especially important with age.",
        },
        {
          title: "Bone Health Support",
          description:
            "Weight-bearing exercise strengthens bones and slows natural bone loss, reducing the risk of fractures or osteoporosis.",
        },
        {
          title: "Recovery & Repair",
          description:
            "With rest, movement, and nutrition, the MSK system naturally heals, rebuilds, and adapts to physical demands.",
        },
        {
          title: "Long-Term Strength",
          description:
            "Staying active and strong in your 30s, 40s, and beyond supports energy, balance, and resilience throughout life.",
        },
      ],
    },
  };

  const currentBenefits = benefits[type];

  // Background colors for benefits section
  const bgColors = ["bg-[#022759]", "bg-[#D9EF78]", "bg-[#F1F2ED]"];

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

  // FAQ animation variants
  const faqContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const faqItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  // Carousel navigation
  const nextSlide = () => {
    if (currentFacts.fact.length <= itemsPerSlide) return;

    const maxSlide = Math.ceil(currentFacts.fact.length / itemsPerSlide) - 1;
    setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (currentFacts.fact.length <= itemsPerSlide) return;

    const maxSlide = Math.ceil(currentFacts.fact.length / itemsPerSlide) - 1;
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  // Handle responsive carousel
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerSlide(1);
      } else if (width < 768) {
        setItemsPerSlide(2);
      } else if (width < 1024) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate visible items for current slide
  const getVisibleItems = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return currentFacts.fact.slice(start, end);
  };

  // Calculate dots for pagination
  const totalDots = Math.ceil(currentFacts.fact.length / itemsPerSlide);

  return (
    <div className="">
      <div className="bg-white">
        {/* facts section starts here */}
        <div className="flex flex-col !p-20">
          <style jsx>{`
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              transition: transform 0.6s;
              transform-style: preserve-3d;
            }
            .flip-card-front,
            .flip-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
            }
            .flip-card-back {
              transform: rotateY(180deg);
            }
          `}</style>

          <p className="text-gray-300">{currentFacts.sub}</p>
          <div className="flex flex-wrap items-center !gap-5">
            <h2 className="!text-4xl font-medium !text-gray-800">
              {currentFacts.title}
            </h2>
            <p className="!text-8xl !font-thin !text-gray-300">/</p>
            <div className="text-gray-600 mt-1">
              <p>{currentFacts.description}</p>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative !mt-10">
            <div className="flex items-center justify-between w-full !!mb-6">
              <button
                onClick={prevSlide}
                className="!bg-gray-100 !hover:bg-gray-200 !p-3 rounded-full shadow-md transition-all duration-300"
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalDots }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 !p-2 ${
                      idx === currentSlide ? "bg-[#022759]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-gray-100 hover:bg-gray-200 rounded-full shadow-md transition-all duration-300 !p-2"
                disabled={currentSlide === totalDots - 1}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Flip Cards */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 !p-4"
              ref={carouselRef}
            >
              {getVisibleItems().map((fact, i) => (
                <div key={`${currentSlide}-${i}`} className="flip-card h-80">
                  <div className="flip-card-inner">
                    {/* Front of Card */}
                    <div className="flip-card-front rounded-3xl bg-[#F1F2ED] flex items-center justify-center !p-8 ">
                      <h4 className="text-center text-xl font-medium">
                        {fact.title}
                      </h4>
                    </div>

                    {/* Back of Card */}
                    <div className="flip-card-back rounded-3xl bg-gray-200 !text-black flex items-center justify-center !p-8 shadow-md overflow-auto">
                      <p className="text-center">{fact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* facts section ends here */}

        {/* faq starts here */}
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
              <p>Meal planning made easy: your questions, answered</p>
            </div>
          </div>

          {/* Fixed FAQ mapping */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 !mt-10"
            variants={faqContainer}
            initial="hidden"
            animate="visible"
          >
            {currentFaq &&
              currentFaq.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`transition-all duration-300 ${
                    expandedFAQ === index
                      ? "flex items-start justify-between gap-10 w-full bg-[#F1F2ED] !p-15 rounded-3xl"
                      : "flex items-center gap-5"
                  }`}
                  layout
                  variants={faqItem}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {expandedFAQ === index ? (
                    <>
                      <motion.div
                        className="border border-black rounded-full !p-5 !py-8 bg-[#D9EF78] cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MoveUp />
                      </motion.div>
                      <div className="flex flex-col items-start gap-5">
                        <p className="!font-semibold !text-lg">
                          {faq.question}
                        </p>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="!font-regular">{faq.answer}</p>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      <motion.span
                        className="border border-black rounded-full !p-3 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MoveDown className="" size={13} />
                      </motion.span>
                      <div className="flex flex-col">
                        <p className="">{faq.question}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
          </motion.div>
          {/* faq ends here */}

          <motion.div
            className="flex flex-col !mt-30 !mb-40"
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
                <p className="w-1/2">{currentBenefits.description}</p>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 !p-4 !mt-10"
              variants={staggerContainer}
            >
              {currentBenefits.insight.slice(0, 7).map((item, index) => (
                <motion.div
                  className={`flex flex-col justify-between gap-5 !px-10 !py-24 cursor-pointer rounded-4xl ${
                    bgColors[index % 3]
                  } hover:bg-[#022759] transition-all duration-300 group`}
                  variants={fadeInUp}
                  key={index}
                >
                  <p
                    className={`!text-4xl !font-light ${
                      bgColors[index % 3] === "bg-[#022759]"
                        ? "!text-white"
                        : bgColors[index % 3] === "bg-[#D9EF78]"
                        ? "!text-gray-800"
                        : "!text-gray-800"
                    } group-hover:!text-white`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`${
                      bgColors[index % 3] === "bg-[#022759]"
                        ? "!text-white"
                        : bgColors[index % 3] === "bg-[#D9EF78]"
                        ? "!text-gray-800"
                        : "!text-gray-800"
                    } group-hover:!text-white !font-light`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}

              {/* Image in the last column */}
              <div className="flex items-center justify-center">
                {image && (
                  <img
                    src={image}
                    alt={`${type} health visual`}
                    className="w-[80%] "
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="bg-[#E7FFC9] w-full !p-20 !mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 !p-4">
          {/* Footer section */}
          <motion.div
            className="bg-white !px-6 sm:!px-10 md:!px-20 !py-10 md:!py-20 rounded-2xl shadow-md flex flex-col gap-10 w-full"
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
