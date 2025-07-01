import { projectBanners } from "../assets/assetsOfAllImages";

export const projectDetails = [
    {
      banner:projectBanners.EphemeralChat,
      alt: "real-time-chat-banner.png",
      title: "Real Time Ephemeral Chat",
      techStackList: ["React", "Tailwind CSS", "Node.js", "Express.js", "Socket.io", "JWT"],
      sourceCode:'https://github.com/SuryaGoswami06/quick-chat',
      liveLink:'https://joyful-platypus-959466.netlify.app/',
      description: "A chat application enabling group conversations via group IDs, with all chats and rooms vanishing upon browser tab closure. Features real-time communication using Socket.io, responsive design with React and Tailwind CSS, and secure encryption with JWT. Backend built with Node.js and Express.js."
    },
    {
      banner:projectBanners.SudokuSolver,
      alt: "sudoku-solver-banner.png",
      title: "Sudoku Solver",
      techStackList: ["HTML", "CSS", "JavaScript"],
      sourceCode:'https://github.com/SuryaGoswami06/sudoku-solver',
      liveLink:'https://suryagoswami06.github.io/sudoku-solver/',
      description: "A web-based Sudoku solver with real-time validation and highlighting of incorrect entries. Uses a backtracking algorithm in JavaScript to solve puzzles. Features a user-friendly interface for inputting Sudoku puzzles, built with HTML, CSS, and JavaScript."
    },
    // {
    //   banner:projectBanners.TypingGame,
    //   alt: "multiplayer-typing-banner.png",
    //   title: "Multiplayer Real Time Typing",
    //   techStackList: ["React", "Socket.io", "FakerAPI", "Multiavatar API"],
    //   description: "A real-time typing competition app allowing solo or multiplayer (3-4 users) sessions. Features dynamic typing challenges via FakerAPI, unique player avatars from Multiavatar API, and a live leaderboard. Measures typing speed (WPM), accuracy, and completion time."
    // },
    // {
    //   banner:projectBanners.SnakeGame,
    //   alt: "snake-game-banner.png",
    //   title: "Snake Game",
    //   techStackList: ["HTML", "CSS", "JavaScript", "Canvas"],
    //   description: "A classic Snake game built using HTML5 Canvas for rendering. Players control a snake to eat food and grow while avoiding collisions. Features a responsive design and smooth gameplay using JavaScript for logic, styled with CSS."
    // }
  ]