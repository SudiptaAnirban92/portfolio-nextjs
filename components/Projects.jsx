"use client"
import React from "react";
import basicLanding from "../public/assets/projects/basic-landing.jpg";
import bestEats from "../public/assets/projects/besteats.jpg";
import dataFinance from "../public/assets/projects/data-finance.jpg";
import solar from "../public/assets/projects/solar.jpg";
import portfolio from "../public/assets/projects/portfolio.jpg";
import docs from "../public/assets/projects/docs.jpg";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    // Parent container
    <div id="projects" className="w-full">
      {/* Container */}
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-[#124e66] text-xl tracking-widest uppercase">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Grid items */}

          <ProjectItem
            title="Data Finance"
            backgroundImg={dataFinance}
            projectUrl="/data"
          />
          <ProjectItem
            title="Best Eats"
            backgroundImg={bestEats}
            projectUrl="/best"
          />
          <ProjectItem
            title="Landing Page"
            backgroundImg={basicLanding}
            projectUrl="/basic"
          />
          <ProjectItem
            title="Portfolio App"
            backgroundImg={portfolio}
            projectUrl="/portfolio"
          />

          <ProjectItem
            title="Docs Management App"
            backgroundImg={docs}
            projectUrl="/docs"
          />
          <ProjectItem
            title="Solar Solutions App"
            backgroundImg={solar}
            projectUrl="/solar"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
