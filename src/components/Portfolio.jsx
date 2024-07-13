"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FileText,
  ChevronDown,
  ChevronUp,
  Sun,
  Moon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const ExpandableCard = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);
  const contentRef = React.useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setShowExpandButton(contentRef.current.scrollHeight > 200);
    }
  }, [children]);

  return (
    <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-gray-800 dark:text-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-full" : "max-h-[200px]"
          }`}
        >
          {children}
        </div>
        {showExpandButton && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-500 flex items-center"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-1 w-4 h-4" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-1 w-4 h-4" />
              </>
            )}
          </button>
        )}
      </CardContent>
    </Card>
  );
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        <header className="mb-12 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 sm:p-8 shadow-2xl dark:bg-gray-800 dark:bg-opacity-30">
          <div className="flex justify-between items-center mb-8">
            <Image src="/favicon.svg" alt="Favicon" width={28} height={28} />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="text-yellow-400" />
              ) : (
                <Moon className="text-gray-800" />
              )}
            </button>
          </div>
          <div className="relative w-full h-48 sm:h-64 mb-8">
            <Image
              src="https://media.licdn.com/dms/image/C4D16AQGFHcGCnbbtcA/profile-displaybackgroundimage-shrink_350_1400/0/1618342344046?e=1726099200&v=beta&t=eP37MgQnrmlbMceTgblVVnWOJEprRqUlUw6JYcfKPA4"
              alt="Cover"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="relative w-32 h-32">
              <Image
                src="https://media.licdn.com/dms/image/C5603AQE9P-OXFoPi0g/profile-displayphoto-shrink_400_400/0/1651194064143?e=1726099200&v=beta&t=LZr90wlm4QFnWid2NSTFl5c2xaahqCQkQmt_o1da7CM"
                alt="Asrar Farooq"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold">Asrar Farooq</h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                CompSci & CyberSecurity @ KU | Computational Researcher @
                Stowers
              </p>
              <div className="mt-4 flex justify-center sm:justify-start space-x-4">
                <a
                  href="https://github.com/Asrarfarooq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/asrarfarooq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/YourInstagramUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a
                  href="/docs/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <FileText className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <ExpandableCard title="Education">
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">The University of Kansas</h3>
                  <p>
                    Bachelor of Science in Computer Science, August 2020 - May
                    2024
                  </p>
                  <p>
                    GPA: 3.8, Dean's Honor Roll, Full Tuition Scholarship, GAP
                    w/ Distinction, & Tradition of Excellence Award 2022
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Boys Institute Langate Kupwara
                  </h3>
                  <p>
                    High School, Physics, Chemistry, Math & English, 2015 - 2019
                  </p>
                </li>
              </ul>
            </ExpandableCard>

            <ExpandableCard title="Experience">
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">
                    Stowers Institute for Medical Research
                  </h3>
                  <p>Computational Researcher, May 2024 - Present</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Developing full stack bioinformatics tools using MERN
                      stack for re-running and integrating experimental samples.
                    </li>
                    <li>
                      Revamped Bioreports tool with Django and Python to
                      automate report creation, reducing analyst workload.
                    </li>
                    <li>
                      Automated pipelines that cut manual analysis and report
                      generation time from days to minutes.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold">
                    University Academic Support Centers - KU
                  </h3>
                  <p>Web Developer, February 2022 - July 2024</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Designed and optimized websites for various centers,
                      achieving more than 300,000 page views.
                    </li>
                    <li>
                      Launched Wingspan KU, a new center to better serve
                      students and faculty in writing and learning.
                    </li>
                    <li>
                      Ensured WCAG 2.0 and Section 508 compliance for UASC
                      websites.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold">Paycom Software, Inc.</h3>
                  <p>Software Development Intern, May 2023 - August 2023</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Streamlined employee referral process with QR codes by
                      creating auto-completed Referral feature.
                    </li>
                    <li>
                      Developed a unified solution for referral tracking and
                      sharing for over 6000 employees.
                    </li>
                    <li>
                      Provided exportable referral data for employee and
                      client-side reporting.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold">KU Information Technology</h3>
                  <p>Full Stack Developer, April 2021 - February 2022</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Spearheaded the migration of 800 university websites to a
                      new CMS system, impacting more than 30,000 students.
                    </li>
                    <li>
                      Collaborated in the design, development, and deployment of
                      websites for diverse departments.
                    </li>
                    <li>
                      Provided comprehensive training and support for campus
                      staff in utilizing the campus CMS (Drupal).
                    </li>
                  </ul>
                </li>
              </ul>
            </ExpandableCard>

            <ExpandableCard title="Projects">
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">
                    <a
                      href="https://kalamity.tech/"
                      className="text-blue-400 hover:underline dark:text-blue-300"
                    >
                      Kalamity
                    </a>
                  </h3>
                  <p>
                    ReactJS, Netlify, API's (EONET, USGS, GoogleMaps) | Spring
                    2024
                  </p>
                  <p>
                    Developed a real-time disaster tracking web app leveraging
                    EONET and USGS data to map natural disasters with
                    geo-location, alerts, and safe routes for users worldwide.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    <a
                      href="https://github.com/Ehtishammushtaq/EECS581-Capstone"
                      className="text-blue-400 hover:underline dark:text-blue-300"
                    >
                      Mapalyze
                    </a>
                  </h3>
                  <p>
                    ReactJS, C#, .NET, Tailwind CSS, MySQL, Azure | Fall 2023
                  </p>
                  <p>
                    Developed a floor plan conversion application transforming
                    2D floor plan images into dynamic 3D models, enhancing
                    spatial visualization and providing indoor navigation
                    features.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    <a
                      href="https://www.paycom.com/"
                      className="text-blue-400 hover:underline dark:text-blue-300"
                    >
                      Codathon - Paycom
                    </a>
                  </h3>
                  <p>ReactJS, C#, .NET, MySQL | Summer 2023</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Created a weekly challenge tool for developers using LDAP
                      authentication in a 48-hour team project.
                    </li>
                    <li>
                      Built an admin panel for CRUD challenges, submission
                      review, and winner selections.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold">
                    <a
                      href="https://ae.ku.edu/kubesat"
                      className="text-blue-400 hover:underline dark:text-blue-300"
                    >
                      KUbeSat
                    </a>
                  </h3>
                  <p>C, Python | Spring 2023</p>
                  <p>
                    Collaborated on a student-faculty project to build cube
                    satellites for aerospace research, focusing on the Attitude
                    Determination (ADCS) subsystem for satellite stabilization
                    and precise mission pointing.
                  </p>
                </li>
              </ul>
            </ExpandableCard>
          </div>

          <div className="space-y-8">
            <ExpandableCard title="Skills">
              <ul className="space-y-2">
                <li>
                  <strong>Programming Languages:</strong> JavaScript, HTML5,
                  CSS3, Python, C/C++, C#, PHP
                </li>
                <li>
                  <strong>Web Development:</strong> ReactJS, Next.js, Node.js,
                  Django, .NET, jQuery, Laravel, Drupal, Tailwind CSS
                </li>
                <li>
                  <strong>Databases:</strong> MySQL, MongoDB, SQLite
                </li>
                <li>
                  <strong>DevOps & Cloud:</strong> Git, GitHub, GitLab,
                  BitBucket, Vercel, Netlify, Docker, Nginx
                </li>
                <li>
                  <strong>Development Methodologies:</strong> Agile, CI/CD,
                  Object-Oriented Programming (OOP), SEO
                </li>
                <li>
                  <strong>IT and Digital Tools:</strong> ServiceNow, VMWare,
                  Citrix, Jira, Splunk, Zenoss, Confluence
                </li>
                <li>
                  <strong>Soft Skills:</strong> Teamwork, Problem-Solving,
                  Adaptability, Leadership, Critical Thinking, Conflict
                  Resolution
                </li>
              </ul>
            </ExpandableCard>

            <ExpandableCard title="Certifications">
              <ul className="list-disc list-inside">
                <li>Undergraduate Certificate in Cybersecurity</li>
              </ul>
            </ExpandableCard>

            <ExpandableCard title="Languages">
              <ul className="list-disc list-inside">
                <li>English (Native)</li>
                <li>Hindi (Native)</li>
                <li>Kashmiri (Native)</li>
                <li>Urdu (Native)</li>
                <li>Arabic (Elementary)</li>
                <li>Persian (Elementary)</li>
              </ul>
            </ExpandableCard>

            <ExpandableCard title="Honors & Awards">
              <ul className="list-disc list-inside">
                <li>GAP with Distinction Award</li>
                <li>KU Tradition of Excellence</li>
                <li>Member National Society of Collegiate Scholars</li>
                <li>KU International Excellence Award</li>
              </ul>
            </ExpandableCard>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
