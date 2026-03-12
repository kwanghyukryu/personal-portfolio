
import drone from './pic/drone.png';
import discordbot from './pic/discordbot.png';
import pong from './pic/pong.png';
import bicycle from './pic/bike.png';
import restaurant from './pic/togo.png';
import aihelper from './pic/aistudy.png';
import fpga from './pic/fpga.png';
import birthday from './pic/birthday.png';
import rocker from './pic/rocker.png';
import rov from './pic/subvision.png';
import reaction from './pic/reaction.png';
import calc from './pic/calc.png';
import asl from './pic/asl.png';
import strava from './pic/strava.png';

const mprojectsData = [
  {
    id: 1,
    title: "Real-Time ASL to Speech System",
    description: "A real-time American Sign Language recognition system that converts hand signs into spoken audio.",
    details: [
      "Built a real-time ASL classifier using OpenCV and MediaPipe with a custom dataset of hand landmarks.",
      "Trained a machine learning model for letter recognition using normalized landmark vectors.",
      "Developed a Flask server streaming ASL predictions to external systems in real time.",
      "Implemented a BeagleY-AI C client using libcurl to fetch predictions and display output.",
      "Integrated text-to-speech using espeak for real-time spoken feedback."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: asl
  },
  {
    id: 2,
    title: "Strava Art Route Generator",
    description: "An iOS app that converts images and drawings into runnable or cyclable GPS routes.",
    details: [
      "Built an iOS app in Swift using MapKit to convert drawings into GPS routes.",
      "Implemented intersection detection to align sketches with real road networks.",
      "Generated optimized running and cycling routes between valid road intersections.",
      "Integrated live GPS tracking, route overlays, and map visualization."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: strava
  },
  {
    id: 3,
    title: "All-in-One AI Study Helper",
    description: "A full-stack AI-powered study web app that generates personalized guides, quizzes, and flashcards.",
    details: [
      "Built full-stack web application using React, Node.js, and Prisma ORM for dynamic study content.",
      "Integrated OpenAI API for quiz and flashcard generation from uploaded PDFs.",
      "Implemented RESTful endpoints and real-time dashboard with progress tracking."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: aihelper
  },
  {
    id: 4,
    title: "Smart Bicycle Light System",
    description: "A wireless bike signaling system using two Arduino boards communicating via Wi-Fi.",
    details: [
      "Used HTTP requests for data sync between transmitter and receiver Arduinos.",
      "Designed LED matrix interface for visual turn and brake signaling.",
      "Prototyped on breadboard and integrated with custom 3D-printed housing."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: bicycle
  },
  {
    id: 5,
    title: "CCTV Drone",
    description: "An autonomous drone capable of manual control and facial tracking in real-time.",
    details: [
      "Programmed DJI Tello drone with Python using OpenCV for live face detection.",
      "Implemented PID tuning for stable tracking and camera feed display.",
      "Enabled wireless video streaming to desktop client."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: drone
  },
  {
    id: 6,
    title: "Restaurant Website",
    description: "A responsive AI meal recommender site built with React and OpenAI API integration.",
    details: [
      "Designed UI with React Router for navigation and dynamic menus.",
      "Integrated ChatGPT API for meal recommendations based on dietary preferences.",
      "Added embedded Google Maps and CSV-based dynamic menu display."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: restaurant
  },
  {
    id: 7,
    title: "SFU SubVision",
    description: "An underwater ROV built using ROS2 for real-time control and sensor fusion.",
    details: [
      "Implemented Python-based ROS nodes for sensor, thruster, and video coordination.",
      "Worked with cross-disciplinary teams on ROV structure, electronics, and communication.",
      "Optimized control delay and data throughput during live simulation testing."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: rov
  },
  {
    id: 8,
    title: "Discord Casino Bot",
    description: "A Discord bot featuring games like Blackjack and Roulette with persistent user stats.",
    details: [
      "Developed with Discord.js and MongoDB for user tracking and game data.",
      "Implemented modular functions for various game mechanics.",
      "Designed leaderboard and statistics tracking for engagement."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: discordbot
  },
  {
    id: 9,
    title: "Single Player Pong",
    description: "Retro-style arcade Pong game with difficulty scaling and sound integration.",
    details: [
      "Coded with C++ and SFML for graphics and collision physics.",
      "Added ball speed scaling, score tracking, and audio feedback for immersion."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: pong
  },
  {
    id: 10,
    title: "Reaction Time Game",
    description: "A hardware-based reaction speed game built with BeagleY-AI and joystick module.",
    details: [
      "Used BeagleY-AI GPIO and HAL drivers for LED control and timing detection.",
      "Implemented real-time input reading and response timing.",
      "Designed gameplay loop measuring user reaction accuracy and latency."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: reaction
  },
  {
    id: 11,
    title: "React Calculator Web App",
    description: "A simple yet elegant calculator built using React and modern UI design.",
    details: [
      "Developed using React functional components with reusable logic hooks.",
      "Implemented operator precedence and error handling for smooth user experience."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: calc
  },
  {
    id: 12,
    title: "Rocker Bogie System",
    description: "A mechanical rover suspension system designed in SolidWorks.",
    details: [
      "Modified an existing rover design to improve stability and obstacle handling.",
      "Designed rocker-bogie suspension for enhanced terrain maneuverability."
    ],
    githubLink: "https://www.canva.com/design/DAGXpA1MSIA/t7L-0Nvj7mH7-wbTWemO_A/edit",
    imageSrc: rocker
  },
  {
    id: 13,
    title: "FPGA Alarm System",
    description: "A digital alarm system implemented on FPGA using VHDL.",
    details: [
      "Programmed FPGA board logic to detect triggers and activate alarms.",
      "Designed VHDL logic modules for timing and alert control."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: fpga
  },
  {
    id: 14,
    title: "Birthday Lookup System",
    description: "A C++ program that stores and retrieves birthday data.",
    details: [
      "Developed C++ application for storing and searching birthday records.",
      "Used efficient data structures for fast lookup and retrieval."
    ],
    githubLink: "https://github.com/kwanghyukryu",
    imageSrc: birthday
  }
];

export default mprojectsData;
