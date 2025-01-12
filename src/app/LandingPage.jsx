



// import React from 'react';
// import { FaRobot, FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
//       {/* Header */}
//       <header className="container mx-auto p-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold tracking-tight text-blue-400">Hackedemics</h1>
//           <nav>
//             <ul className="flex space-x-4">
//               <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
//               <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
//               <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-6 py-20 text-center">
//         <h2 className="text-5xl font-extrabold mb-6 text-blue-400 animate-fade-in-down">
//           Welcome to the Future of Math Learning
//         </h2>
//         <p className="text-xl mb-12 text-gray-300 animate-fade-in-up">
//           Hackedemics: Your AI-powered personal math tutor
//         </p>

//         <div className="flex justify-center space-x-12 mb-16">
//           <div className="flex flex-col items-center">
//             <FaRobot className="text-5xl mb-4 text-blue-500 drop-shadow-lg" />
//             <p className="text-gray-300">AI-Powered</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaGraduationCap className="text-5xl mb-4 text-blue-500 drop-shadow-lg" />
//             <p className="text-gray-300">Personalized Learning</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaChalkboardTeacher className="text-5xl mb-4 text-blue-500 drop-shadow-lg" />
//             <p className="text-gray-300">Interactive Lessons</p>
//           </div>
//         </div>

//         <p className="text-2xl mb-8 text-gray-300 animate-fade-in">
//           Unlike any other app, Hackedemics provides a truly personalized math tutoring experience.
//           Adapt, learn, and excel at your own pace.
//         </p>

//         <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 animate-pulse shadow-lg">
//           Start a Playground
//         </button>
//       </main>

//       {/* Footer */}
//       <footer className="container mx-auto p-6 text-center text-gray-500">
//         <p>&copy; 2023 Hackedemics. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react';
import { FaRobot, FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      {/* Header */}
      <header className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110 hover:rotate-1 duration-300">Hackedemics</h1>
          <nav>
            <ul className="flex space-x-4">
              {/* <li><a href="#" className="hover:text-blue-500 transition-transform transform hover:scale-105 duration-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-transform transform hover:scale-105 duration-300">About</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-transform transform hover:scale-105 duration-300">Contact</a></li> */}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-blue-400 animate-fade-in-down hover:text-blue-500 transition-transform transform hover:scale-110 duration-300">
          Welcome to the Future of Math Learning
        </h2>
        <p className="text-xl mb-12 text-gray-300 animate-fade-in-up hover:text-blue-400 transition-transform transform hover:scale-105 duration-300">
          Hackedemics: Your AI-powered personal math tutor
        </p>

        <div className="flex justify-center space-x-12 mb-16">
          <div className="flex flex-col items-center hover:scale-110 transform transition-transform duration-300">
            <FaRobot className="text-5xl mb-4 text-blue-500 drop-shadow-lg" />
            <p className="text-gray-300">AI-Powered</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transform transition-transform duration-300">
            <FaGraduationCap className="text-5xl mb-4 text-blue-500 drop-shadow-lg" />
            <p className="text-gray-300">Personalized Learning</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transform transition-transform duration-300">
            <FaChalkboardTeacher className="text-5xl mb-4 text-blue-500 drop-shadow-lg" />
            <p className="text-gray-300">Interactive Lessons</p>
          </div>
        </div>

        <p className="text-2xl mb-8 text-gray-300 animate-fade-in hover:text-blue-400 transition-transform transform hover:scale-105 duration-300">
          Unlike any other app, Hackedemics provides a truly personalized math tutoring experience.
          Adapt, learn, and excel at your own pace.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 animate-pulse shadow-lg">
          Start a Playground
        </button>
      </main>

      {/* Footer */}
      <footer className="container mx-auto p-6 text-center text-gray-500">
        <p>&copy; 2023 Hackedemics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

