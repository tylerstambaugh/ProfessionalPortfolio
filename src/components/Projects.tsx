import { Container } from "react-bootstrap";
import FullScreenSection from "./FullScreenSection";
import { v4 as uuidv4 } from "uuid";
import segmentSniperImg from "../assets/images/segmentSniperScreenshot.png";
import efaImage from "../assets/images/efa2.png";
import mkKupSkorerImage from "../assets/images/mkKupSkorer.png";
import exercismImage from "../assets/images/exercismScreenshot.png";
import virtualBooneImage from "../assets/images/virtualBoone.png";
import stravaWeekInBikeImage from "../assets/images/stravaWeekInBike.png";
import ProjectsRows from "./ProjectsRows";

export type project = {
  id: string;
  title: string;
  shortDescription: string | JSX.Element;
  longDescription: string | JSX.Element;
  imageSrc: any;
  url?: string | null;
};

export const projects: project[] = [
  {
    id: uuidv4(),
    url: "https://github.com/tylerstambaugh/SegmentSniper",
    title: "Segment Sniper",
    shortDescription: (
      <>
        <p>
          A .Net Web API / React project that integrates with the Strava open
          API to allow athletes to analyze workout data efficiently.
        </p>
        <p>
          The project is hosted in Azure, and the beta version is accessible{" "}
          <a
            href="https://as-segmentsniper-frontend-eastus-dev.azurewebsites.net/#/"
            target="_blank"
          >
            here
          </a>
        </p>
      </>
    ),
    imageSrc: segmentSniperImg,
    longDescription: (
      <>
        <p>
          I've been an bicycle racer for many years and have user Strava to
          track my performance. When I got into writing software and found out
          that they had an open API, I began writing a companion app to automate
          a routine data analysis task.
        </p>
        <br />
        <p>
          This tool allows users to interrogate data from their activities and
          find segments where they are close to the leader.
        </p>
        <br />
        <p>It is built using:</p>
        <ul>
          <li>.Net 7 Web API backend on SQL Server via Entity Framework</li>
          <li>Vite React frontend using Typescript</li>
          <li>Custom JWT authentication and authorization</li>
          <li>SOA adhering to SOLID principles</li>
        </ul>
      </>
    ),
  },
  {
    id: uuidv4(),
    url: "https://www.elevenfifty.org/courses/software-development",
    title: "Eleven Fifty Academy",
    shortDescription: `In May of 2022 I completed Eleven Fifty Academy's Software Development Course.`,
    imageSrc: efaImage,
    longDescription: `This entailed over 600 hours of course 
    instruction and lab time learning to build and maintain .Net applications. It was a fantastic experience that allowed 
    me to rapidly build on the knowledge I'd gained over the years working with software engineers and transition to
     software engineering.`,
  },
  {
    id: uuidv4(),
    url: "https://github.com/tylerstambaugh/MK_KupSkorer",
    title: "Mario Kart Kup Skorer",
    shortDescription:
      "A .Net Web API / MVC application used to solve the real world problems of tracking Mario Kart Kup scoring across game sessions.",
    imageSrc: mkKupSkorerImage,
    longDescription: `As a casual video game player, I routinely play Mario Kart with a group of friends. We started tracking player Kup wins on a cardboard box,
    and eventually upgraded to printed spreadsheets that were manually filled out. This was a bit cumbersome and any analysis had to also be hand calculated. I built an MVC app
    that allowed us to quickly and easily record the wins as well as query the data to glean insights into who was king of the track.  `,
  },
  {
    id: uuidv4(),
    url: "https://github.com/tylerstambaugh/MMM-StravaWeekInBike",
    title: "Strava Week in Bike",
    shortDescription: (
      <span>
        A few years ago, with an old display and some one way mirror, I built a{" "}
        <a href="https://magicmirror.builders/">magic mirror </a>
        to hang in my house. Recently I wrote a module to display my weekly
        Strava bike stats.
      </span>
    ),
    imageSrc: stravaWeekInBikeImage,
    longDescription: `The Magic Mirror is an open source project that allows you to build a smart mirror that displays information like the weather, news, and calendar events. 
    I wrote a module that displays my weekly bike stats from Strava. 
    It was a fun project that allowed me to learn more about the Strava API and how to write a module for the Magic Mirror.`,
  },
  {
    id: uuidv4(),
    url: "https://exercism.org/tracks/csharp",
    title: "Exercism-ing",
    shortDescription: (
      <span>
        I continue to hone my skills and learn new ones by routinely completing
        coding katas on Exercism.org. You can see my progress{" "}
        <a href="https://exercism.org/profiles/tylerstambaugh">here</a>
      </span>
    ),
    imageSrc: exercismImage,
    longDescription: `I was turned onto this site when taking the software development course at Eleven Fifty Academy. I still frequent it, and Leetcode, to 
    challenge myself and continue to learn the features of the c# and Javascript languages (primarily). I may never need to implement a binary search algorithm, but having
    done it before makes me appreciate even more the tools and libraries we have at our disposal. And who knows, maybe I'll end up working 
    on an embedded system where resources are at a premium and need to use bitwise operations to meet the constraints of the environment.`,
  },
  {
    id: uuidv4(),
    title: "Coming Soon... Virtual Boone",
    shortDescription:
      "I'm currently working on learning A.I. fundamentals and am modeling a chatbot named after my dog Boone.",
    imageSrc: virtualBooneImage,
    longDescription: "Check back soon for more updates.",
  },
];

export default function Projects() {
  return (
    <>
      <FullScreenSection
        isDarkBackground
        backgroundColor="#0e3c22"
        id="projects"
        fullScreen={false}
      >
        <Container>
          <ProjectsRows data={projects} />
        </Container>
      </FullScreenSection>
    </>
  );
}
