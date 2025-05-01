import React from "react";
import { MoveDown } from "lucide-react";
import { MoveUp } from "lucide-react";
import flowers from "../../assets/images/organexpandpage/flowers.png";
import { motion } from "framer-motion";
import CallToAction from "../CallToAction";

function Testimonials({ image, type }) {
  const basicFacts = {
    brain: {
      sub: "Facts",
      title: "Brain Myths vs. Facts",
      description: `Quick insights into one of your body’s most powerful organs.`,
      fact: [
        {
          title: "Myth: The brain stops growing after childhood.",
          description: `Fact: Your brain is capable of lifelong change. Neuroplasticity allows it to adapt, grow, and rewire itself—even after injury or trauma.`,
        },
        {
          title: "Myth: The brain doesn’t use much energy.",
          description: `Fact: Your brain uses about 20% of your body’s total energy—even though it’s just 2% of your weight. It’s always working, even at rest.`,
        },
        {
          title: "Myth: Sleep is just for rest—not for the brain.",
          description: `Fact: During deep sleep, your brain consolidates memories, clears toxins, and recharges. Sleep is essential for focus and emotional balance.`,
        },
        {
          title: "Myth: The brain isn’t very active.",
          description: `Fact: Your brain generates up to 70,000 thoughts every day—guiding your decisions, memories, and feelings from moment to moment.`,
        },
        {
          title: `Myth: The brain doesn’t need much blood.`,
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
      description: `Quick insights into one of your body’s most powerful organs.`,
      fact: [
        {
          title: "Myth: Only older people get heart disease.",
          description: `Fact: Heart disease can affect people of all ages, especially with poor diet, stress, smoking, or family history.`,
        },
        {
          title: "Myth: A strong heart doesn’t need exercise.",
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
  };

  const currentFacts = basicFacts[type];

  const benefits = {
    brain: {
      sub: "benefits",
      title: "Brain Health Benefits",
      description: `Support your brain’s health and performance with simple, science-backed habits that improve focus, memory, and long-term function.`,
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
            "Protect your brain from chronic stress by practicing deep breathing, movement, and rest to reduce cortisol’s impact.",
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
      description: `Support your heart’s health and performance with simple, science-backed habits that improve circulation, endurance, and long-term function.`,
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
  };

  const currentBenefits = benefits[type];

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
    <div className="">
      <div className="bg-white">
        <motion.div
          className="flex flex-col !p-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="!text-gray-300">{currentFacts.sub}</p>
          <div className="flex items-center gap-5">
            <h2 className="!text-4xl !font-medium !text-gray-800">
              {currentFacts.title}
            </h2>
            <p className="!text-8xl !font-thin !text-gray-300">/</p>
            <div className=" !text-gray-600 !mt-1">
              <p>{currentFacts.description}</p>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 !p-4 !mt-10"
            variants={staggerContainer}
          >
            {currentFacts.fact.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="flex flex-col justify-between gap-3 !px-6 !py-20 cursor-pointer rounded-3xl bg-[#F1F2ED] hover:bg-[#022759] transition-all duration-300 group"
                variants={fadeInUp}
              >
                <h4 className="group-hover:!text-white">{testimonial.title}</h4>
                <p className="!text-gray-800 group-hover:!text-white !text-lg !font-normal !mb-4 transition-colors duration-300">
                  {testimonial.description}
                </p>
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
              className="grid grid-cols-4 gap-4 !p-4 !mt-10"
              variants={staggerContainer}
            >
              {currentBenefits.insight.map((item, index) => (
                <motion.div
                  className="flex flex-col justify-between gap-5 !px-10 !py-24 cursor-pointer rounded-4xl bg-gray-200 hover:bg-[#022759] transition-all duration-300 group"
                  variants={fadeInUp}
                  key={index}
                >
                  <p className="!text-4xl !font-light group-hover:!text-white">
                    {item.title}
                  </p>
                  <p className=" group-hover:!text-white !font-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
