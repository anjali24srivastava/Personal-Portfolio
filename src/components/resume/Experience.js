import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer & Trainer   (ON-GOING)"
            subTitle="Fluxvisio Dynamics LLP"
            result="Kanpur , Uttar Pradesh"
            des="As a Web Developer and Trainer at Fluxvisio Dynamics LLP, I will design and develop web applications while also conducting training sessions to mentor aspiring developers. My role involves creating innovative solutions for clients, guiding team members on best coding practices, and staying updated with the latest web technologies."
          />
          <ResumeCard
            title="Software Developer "
            subTitle="Zidio Development"
            result="Kanpur , Uttar Pradesh"
            des="As a Software Developer and Trainer, I developed a dynamic resume builder web application that empowers users to create, customize, and download professional resumes. I implemented intuitive UI/UX for an enhanced user experience, integrated easy-to-use form fields, and utilized modern web technologies for real-time previews and PDF export. Additionally, I trained team members on the development process and best practices, ensuring efficient project execution."
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="The Sparks Foundation"
            result="Kanpur , Uttar Pradesh"
            des="As a Web Developer Intern, I contributed to building a payment sync website that integrated multiple payment systems for seamless, secure transactions. I worked on both front-end and back-end development, ensuring real-time data synchronization and creating user-friendly interfaces for a smooth payment experience across platforms"
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">20XX - 20XX</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ML Instructor"
            subTitle="ABC Platform (20XX - 20XX)"
            result="UK"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="ABC King's College (20XX - 20XX)"
            result="CANADA"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="App Developer"
            subTitle="ABC Company (20XX - 20XX)"
            result="India"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
