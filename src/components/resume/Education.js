import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2004 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Science and Engineering"
            subTitle="Pranveer Singh Institute of Technology (2021 - 2025)"
            result="Current 8.1 CGPA"
            des="Studying CS related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Prabhat Senior Secondary Public School (2021)"
            result="94.8%"
            des="Studied in this school from 11th to 12th std. HSC Subjects: Physics, Chemsitry,Mathematics, English,Computer Science "
          />
          <ResumeCard
            title="Primary & Secondary School Education"
            subTitle="Prabhat Senior Secondary Public School  (2019)"
            result="94.6% "
            des="Studied in this school from Nursery to 10th std. SSC Subjects: English, Hindi, Maths, Science, Social Sciences, Computer"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Python Development and Python Programming Fundamentals "
            subTitle="Udemy (Sept. 2024)"
            result="Online"
            des="Proficient in Python development with a strong grasp of Python programming fundamentals, including data structures, algorithms, and object-oriented principles."

          />
          <ResumeCard
            title="SQL Fundamentals"
            subTitle="Accenture (Issued on July 2024)"
            result="Online"
            des="Strong foundation in SQL fundamentals, encompassing database design, querying, and data manipulation techniques. Skilled in creating, updating, and managing relational databases with efficiency and precision."
          />
          <ResumeCard
            title="Software Engineering Job Simulationj"
            subTitle="J.P. Morgan (May 2024)"
            result="Online"
            des="Learnt interface with a stock price data feed and Use JPMorgan Chase & Co. frameworks and tools   "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education