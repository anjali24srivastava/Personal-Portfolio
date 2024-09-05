import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="Tasty Twists: Food Ordering Site"
          des=" Developed a user-friendly food ordering website that streamlines the process of selecting, customizing, and purchasing meals. Implemented features for menu browsing, real-time order tracking, and secure payment processing. Designed an intuitive seamless navigation, and integrated backend systems to ensure efficient order management and customer satisfaction."
          src={projectFour}
          githubLink="https://github.com/anjali24srivastava/Dinner-Dive"
          websiteLink=""
        />

        <ProjectsCard
          title="GridLock Game (BASIC)"
          des="Created a classic Tic-Tac-Toe game featuring a 3x3 grid where two players can compete by strategically placing Xs and Os. The game checks for wins by aligning symbols in rows, columns, or diagonals. Designed for simplicity and ease of play, providing an engaging experience for users."
          src={projectOne}
          githubLink="https://github.com/anjali24srivastava/GridLock-Game"
          websiteLink="https://gridlock-game.netlify.app/"

        />
        <ProjectsCard
          title="Voice-Mate (BASIC) "
          des=" Developed a user-friendly website that converts text to speech, enabling users to input text and hear it spoken aloud. The platform features an intuitive interface for easy text entry and playback, utilizing advanced text-to-speech technology to deliver clear, accurate audio, enhancing accessibility and user interaction"
          src={projectTwo}
          githubLink="https://github.com/anjali24srivastava/VoiceMate"
          websiteLink="https://voicemate-convertor.netlify.app/"
        />
        <ProjectsCard
          title="Task Tracker Application"
          des=" Built a task tracker application website that allows users to create, manage, and track tasks and projects. Features include task categorization, deadlines, progress updates, and priority settings. The intuitive interface ensures easy navigation and organization, helping users stay productive and efficiently manage their workload."
          src={projectThree}
          githubLink="https://github.com/anjali24srivastava/To-Do-Web-App"
          websiteLink=""
        />
        
        <ProjectsCard
          title="Job Portal "
          des=" Developed a job portal website that connects job seekers with employers. Features include advanced search filters, job listings, application tracking, and user profiles. Designed for ease of navigation, it enables users to quickly find and apply for jobs, while employers can post opportunities and manage applications efficiently."
          src={projectFive}
          githubLink="https://github.com/anjali24srivastava/Job-Portal"
          websiteLink=""
        />
        {/* <ProjectsCard
          title="Face Detection"
          des=" This project uses various libraries like to detect human face from a given image, detect a face from a live -webcam video and to create an attendance system."
          src={projectSix}
          githubLink="https://github.com/mihirc0111/Face-Detection-ML-Project-Python.git"
          websiteLink=""
        /> */}
      </div>
    </section>
  );
}

export default Projects