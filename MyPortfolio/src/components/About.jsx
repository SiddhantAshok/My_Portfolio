import React from "react";

function About() {
  return (
    <div
      name="about"

      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">

          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div>
          <p className="text-xl mt-10 md:mt-20">
            I am a passionate Software Engineer with more than 4 years of
            experience in building scalable and intelligent software solutions.
            My core expertise lies in .NET Core, C#, React, SQL, and cloud
            technologies like AWS and Azure. At BusinessNext (CRMnext), I work
            on enterprise-grade CRM systems, leveraging modern DevOps tools such
            as Docker and Jenkins to ensure robust and continuous delivery.
            <br />
            <br />
            Beyond traditional backend and frontend development, I’ve delved
            deep into machine learning and AI. One of my notable projects
            includes a Python-based service that auto-generates UI form layouts
            from images using OCR and object detection—blending innovation with
            real-world utility.
            <br />
            <br />
            Previously at Ginger Webs, I led the development of high-impact
            products including secure exam browsers, AI-based proctoring tools,
            and scalable OMR/OCR systems, earning 2× Employee of the Month and
            3× Spot Awards for my contributions.
            <br />
            <br />
            I’m driven by a strong desire to innovate, solve real-world
            problems, and constantly evolve across domains like AI/ML, computer
            vision, and automation. I thrive in agile, fast-paced environments
            where tech meets purpose.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
