"use client";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <>
      <main className="bg-[#f9f8f8] text-[#373636]">
        <Navbar />
        <section className="min-h-[calc(100vh-4.5rem)] flex flex-col items-left justify-center pr-6 pl-6 border-b border-[#373636] border-opacity-60 font-space">
          <h1 className="text-[3rem]">Front-End Developer</h1>
          <p className="w-[50%] text-[1.25rem]">
            I build interactive, aesthetic, and performant web experiences —
            combining a designer’s eye with an engineer’s mind.
          </p>
        </section>
        <section className="min-h-[100vh] flex flex-row items-center justify-center gap-20 pr-6 pl-6 border-b border-[#373636] border-opacity-60 font-space">
          <div className="photo-side">
            <Image
              src="/images/Rectangle-7.png"
              alt="profile-pic"
              className="w-[60rem] h-auto object-cover"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="text-side w-auto flex flex-col justify-between h-full gap-12">
            <div className="personal-info">
              <h2 className="text-[2rem]">Naz Ozkan</h2>
              <p>
                I’m a front-end developer with a product design background,
                combining clean code with visual clarity. I thrive at the
                intersection of design and engineering. Passionate about
                learning, I constantly explore new technologies, tools, and
                frameworks to push the boundaries of what I can build.
              </p>
            </div>
            <div className="tech-stack-info">
              <h3 className="text-[2rem]">Tech Stack</h3>
              <ul className="flex flex-wrap gap-4 mt-2">
                <li className="border px-4 py-2">React</li>
                <li className="border px-4 py-2">JavaScript</li>
                <li className="border px-4 py-2">TypeScript</li>
                <li className="border px-4 py-2">TailwindCSS</li>
                <li className="border px-4 py-2">Node.js</li>
                <li className="border px-4 py-2">Next.js</li>
                <li className="border px-4 py-2">Express.js</li>
                <li className="border px-4 py-2">Mongo DB</li>
                <li className="border px-4 py-2">Photoshop</li>
                <li className="border px-4 py-2">Figma</li>
                <li className="border px-4 py-2">Blender</li>
              </ul>
            </div>
            <ul className="flex flex-row w-[20] justify-between mt-8">
              <li className="flex flex-row items-center gap-1">
                GitHub
                <span>
                  <BsArrowUpRight />
                </span>
              </li>
              <li className="flex flex-row items-center gap-1">
                Linkedin
                <span>
                  <BsArrowUpRight />
                </span>
              </li>
              <li className="flex flex-row items-center gap-1">
                Mail
                <span>
                  <BsArrowUpRight />
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="min-h-[100vh] flex flex-col gap-16 pr-6 pl-6 py-32 border-b border-[#373636] border-opacity-60 font-space">
          <h2 className="text-[2rem]">Projects</h2>
          <div className="noirline flex flex-row gap-40 items-center">
            <div className="info-area">
              <h3 className="text-[1.5rem] mb-16">NOIRline</h3>
              <p>
                NOIRline is a concept-driven digital fashion collection that
                blends urban identity with interactive web design.
              </p>
              <ul className="flex flex-row gap-8 mt-4">
                <li className="border px-4 py-2">React</li>
                <li className="border px-4 py-2">TypeScript</li>
                <li className="border px-4 py-2">TailwindCSS</li>
                <li className="border px-4 py-2">Next.js</li>
              </ul>
            </div>
            <div className="video-area">
              <video
                src="/videos/noirline-recording.mp4"
                controls
                className="max-w-[40rem] border-none outline-none"
                autoPlay={true}
                loop
                muted
              />
            </div>
          </div>
          <div className="explora flex flex-row gap-40 items-center">
            <div className="info-area ">
              <h3 className="text-[1.5rem] mb-8">Explora</h3>
              <p>
                Explora is a full-stack travel platform where users share
                authentic location-based recommendations on an interactive map.
                Built from scratch using the MERN stack and map APIs, it enables
                community-driven discovery.
              </p>
              <ul className="flex flex-row gap-8 mt-4">
                <li className="border px-4 py-2">React</li>
                <li className="border px-4 py-2">JavaScript</li>
                <li className="border px-4 py-2">Node.js</li>
                <li className="border px-4 py-2">Express.js</li>
                <li className="border px-4 py-2">Mongo DB</li>
              </ul>
            </div>
            <div className="video-area">
              <video
                src="/videos/explora-video.mp4"
                controls
                className="max-w-[40rem] border-none outline-none"
                autoPlay={true}
                loop
                muted
              />
            </div>
          </div>
          <h2 className="text-[2rem] mt-24">Works</h2>
          <div className="bubiwear flex flex-row gap-40 items-center">
            <div className="info-area">
              <h3 className="text-[1.5rem] mb-8">BubiWear</h3>
              <p>
                BubiWear is a custom-designed e-commerce platform for showcasing
                and selling streetwear products. Developed with modern front-end
                technologies and a scalable backend to manage products, orders,
                and users efficiently.
              </p>
              <ul className="flex flex-row gap-8 mt-4">
                <li className="border px-4 py-2">JavaScript</li>
                <li className="border px-4 py-2">Node.js</li>
                <li className="border px-4 py-2">Express.js</li>
                <li className="border px-4 py-2">Mongo DB</li>
              </ul>
            </div>
            <div className="video-area"></div>
          </div>
          <div className="mgdesign flex flex-row gap-40 items-center">
            <div className="info-area">
              <h3 className="text-[1.5rem] mb-8">mgdesign</h3>
              <p>
                mgdesign is a company showcase website that presents the
                studio’s unique product designs and creative vision. It
                highlights their approach to aesthetics, innovation, and
                storytelling through curated visuals and content.
              </p>
              <ul className="flex flex-row gap-8 mt-4">
                <li className="border px-4 py-2">JavaScript</li>
                <li className="border px-4 py-2">CSS</li>
                <li className="border px-4 py-2">HTML</li>
              </ul>
            </div>
            <div className="video-area">
              <div>
                <Image
                  src="/images/mg-design.png"
                  alt="mgdesign"
                  className="max-w-[40rem] border-none outline-none"
                  width={1000}
                  height={1000}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-[100vh] flex flex-col gap-20 pr-6 pl-6 border-b border-[#373636] border-opacity-60 font-space">
          <div className="tabs-section flex flex-row gap-20 mt-20 text-[2rem]">
            <h2
              className={`cursor-pointer transition ${
                activeTab === "experience"
                  ? "border-b-2 border-[#373636] "
                  : "opacity-60"
              }`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </h2>
            <h2
              className={`cursor-pointer transition ${
                activeTab === "education"
                  ? "border-b-2 border-[#373636]"
                  : "opacity-60"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </h2>
          </div>
          {activeTab === "experience" && (
            <div className="experience-info mb-32">
              <div className="mgdesign-section flex flex-col gap-4 mb-16">
                <h3 className="text-[1.5rem] mb-4">mgdesign</h3>
                <p>Web Developer</p>
                <p>2024 July - 2025 March</p>
                <p className="opacity-60">
                  The mgdesign website was developed through an iterative
                  process where design and development progressed hand in
                  hand.Several versions of the site were built in parallel with
                  the design phase.Project did not finished.
                </p>
              </div>
              <div className="sampler-hamm-section flex flex-col gap-4 mb-16">
                <h3 className="text-[1.5rem] mb-4">Sampler & Hamm Design</h3>
                <p>Product Design Intern</p>
                <p>2024 March - June</p>
                <p className="opacity-60">
                  In Sampler, worked on digital product design including
                  websites and branding projects.In Hamm, created digital assets
                  for physical products — including 3D modeling, rendering, and
                  visualizations.
                </p>
              </div>
              <div className="bellatrix-section flex flex-col gap-4 mb-16">
                <h3 className="text-[1.5rem] mb-4">Bellatrix Space Team</h3>
                <p>Product Designe</p>
                <p>2024 Jan - March</p>
                <p className="opacity-60">
                  I was part of the first Turkish team accepted to NASA’s HERC
                  challenge. Contributed to the design and development of a
                  crewed rover. Also worked on STEM-focused educational
                  projects.
                </p>
              </div>
            </div>
          )}
          {activeTab === "education" && (
            <div className="education-info mb-32">
              <div className="school mb-16">
                <h3 className="text-[1.5rem] mb-4">
                  Istanbul Technical University
                </h3>
                <p>Industrial Product Design</p>
                <p>Bachelor of Science</p>
                <p className="opacity-60">2018-2024 GPA:3.01</p>
              </div>
              <div className="certificates flex flex-col gap-4 mb-32">
                <h2 className="text-[1.5rem] mb-4">Certificates</h2>
                <div className="certificate-1">
                  <h3>Web Developer BootCamp by Colt Steele</h3>
                  <p className="opacity-60">
                    React, Mongo DB, Express.js, Node.js, JavaScript,CSS, HTML
                  </p>
                </div>
                <div className="certificate-2">
                  <h3>100 Days Of Code by Maximillian Schwarzmüller</h3>
                  <p className="opacity-60">JavaScript, MongoDB, Node.js</p>
                </div>
                <div className="certificate-3">
                  <h3>Advanced React by Scrimba</h3>
                  <p className="opacity-60">React</p>
                </div>
                <div className="certificate-4">
                  <h3>React Warriors: Front-End Revolution Workshop</h3>
                  <p className="opacity-60">React</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
