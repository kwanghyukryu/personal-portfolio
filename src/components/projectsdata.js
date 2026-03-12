import github from './pic/github-mark.png';
import drone from './pic/drone.png';
import discordbot from './pic/discordbot.png';
import pong from './pic/pong.png';
import bicycle from './pic/bike.png';
import restaurant from './pic/togo.png';
import aihelper from './pic/aistudy.png';
import rov from './pic/subvision.png';
import asl from './pic/asl.png';
import strava from './pic/strava.png';

const projectsData = [
  {
    id: 1,
    title: "Real-Time ASL to Speech System",
    description: "A real-time American Sign Language recognition system that converts hand signs into spoken audio.",
    details: [
      "Built a real-time ASL classifier using OpenCV and MediaPipe with a custom dataset of hand landmarks.",
      "Trained a classification model using standardized hand landmark vectors for accurate letter detection.",
      "Developed a Flask server that streams predicted ASL letters to external devices in real time.",
      "Implemented a BeagleY-AI C client using libcurl to fetch predictions and output them via joystick-controlled text buffers.",
      "Integrated text-to-speech using espeak to convert predictions into spoken output."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: asl
  },
  {
    id: 2,
    title: "Strava Art Route Generator",
    description: "An iOS app that converts images and drawings into runnable or cyclable GPS routes.",
    details: [
      "Built an iOS app using Swift and MapKit that transforms user-drawn shapes into GPS routes.",
      "Implemented intersection detection to align drawings with real-world road networks.",
      "Placed route pins at valid intersections and generated optimized paths between them.",
      "Integrated live map rendering, GPS tracking, and dynamic overlays for instant visualization.",
      "Optimized polyline calculations to reduce MapKit API calls and improve performance."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: strava
  },
  {
    id: 3,
    title: "All-in-One AI Study Helper",
    description: "A full-stack AI-powered study web app that generates personalized guides, quizzes, and flashcards.",
    details: [
      "Designed a full-stack web application that generates personalized study guides, flashcards, and quizzes from typed topics or uploaded PDFs.",
      "Developed a REST API backend using Express and Prisma ORM to manage guides, quiz attempts, and planner events.",
      "Implemented PDF ingestion using pdf-parse and Multer to extract text for content generation.",
      "Built a React + Tailwind CSS dashboard that integrates flashcards, history logs, and study planner."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: aihelper
  },
  {
    id: 4,
    title: "Smart Bicycle Light System",
    description: "A wireless bike signaling system using two Arduino boards communicating via Wi-Fi.",
    details: [
      "Built a wireless communication system between two Arduino boards for real-time turn and brake signaling.",
      "Programmed data transfer through HTTP requests to a remote website for signal state synchronization.",
      "Implemented LED output patterns for turn and brake signals based on live user input.",
      "Constructed circuit with breadboard and LED matrix for clear real-time display."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: bicycle
  },
  {
    id: 5,
    title: "CCTV Drone",
    description: "An autonomous and manually controlled drone with real-time facial tracking.",
    details: [
      "Developed controllable and automated drone functions using the DJI Tello library in Python.",
      "Integrated drone video feed with desktop display through real-time video streaming.",
      "Implemented face detection and tracking with OpenCV to dynamically follow targets."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: drone
  },
  {
    id: 6,
    title: "Restaurant Website",
    description: "A responsive multi-page restaurant website featuring an AI-powered meal recommender.",
    details: [
      "Built a React-based responsive web app with custom navigation and collapsible navbar.",
      "Integrated OpenAI’s ChatGPT API for real-time meal recommendations based on user preferences.",
      "Implemented budget filters, dietary restrictions, and dynamic CSV-based menu display.",
      "Added Google Maps API for live restaurant location embedding."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: restaurant
  },
  {
    id: 7,
    title: "SFU SubVision",
    description: "An underwater ROV project designed to solve real-time maritime challenges.",
    details: [
      "Developed the rover control system in Python using ROS2 for inter-node communication and real-time responsiveness.",
      "Collaborated in a multidisciplinary engineering team to test, debug, and improve ROV performance.",
      "Implemented control nodes enabling smooth coordination between hardware modules and remote commands."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: rov
  },
  {
    id: 8,
    title: "Discord Casino Bot",
    description: "A Discord bot with game logic, database integration, and user tracking.",
    details: [
      "Developed a Discord bot using Discord.js with various mini-games including blackjack, roulette, and slots.",
      "Integrated user tracking through MongoDB for persistent balances and statistics.",
      "Used modular JavaScript functions for game logic, event handling, and leaderboard management."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: discordbot
  },
  {
    id: 9,
    title: "Single Player Pong",
    description: "A retro-style single-player Pong game with increasing difficulty.",
    details: [
      "Programmed Pong using C++ and SFML with ball speed scaling and score tracking.",
      "Designed collision detection and sound effects for an engaging arcade experience."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: pong
  }
];

export default projectsData;
