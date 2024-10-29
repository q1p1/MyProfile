import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import linkedin from "../assets/linkedin-logo.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import github from "../assets/github.png";
import email from "../assets/email.png";

interface HeaderProps {
  toggleProjects: () => void;
}

function Header({ toggleProjects }: HeaderProps) {
  const location = useLocation();
  const isExperiencePage = location.pathname === "/experience";

  useEffect(() => {
    const header = document.querySelector("header");
    header?.classList.add("animate-slide-down");
  }, []);

  return (
    <header className="bg-gray-800 text-gray-300 py-3 fixed top-0 w-full z-50 shadow-md opacity-0 transition-opacity duration-500">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
        <div className="flex space-x-4">
          <a
            href="https://github.com/q1p1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-300 animate-bounce-on-hover"
          >
            <img
              src={github}
              alt="GitHub"
              className="h-7 w-7 transition-transform duration-300 transform hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/meshari-al-ghabban-133672296/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-300 animate-bounce-on-hover"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-7 w-7 transition-transform duration-300 transform hover:scale-110"
            />
          </a>
          <a
            href="https://wsend.co/966553338690"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-300 animate-bounce-on-hover"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              className="h-7 w-7 transition-transform duration-300 transform hover:scale-110"
            />
          </a>
          <a
            href="https://www.youtube.com/@Meshari_AlGhabban"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-300 animate-bounce-on-hover"
          >
            <img
              src={youtube}
              alt="YouTube"
              className="h-7 w-7 transition-transform duration-300 transform hover:scale-110"
            />
          </a>
          <a
            href="mailto:mrshari2030ksa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-300 animate-bounce-on-hover"
          >
            <img
              src={email}
              alt="Email"
              className="h-7 w-7 transition-transform duration-300 transform hover:scale-110"
            />
          </a>
        </div>

        <div className="flex space-x-4">
          {!isExperiencePage ? (
            <>
              <button
                onClick={toggleProjects}
                className="bg-gray-800 text-gray-300 font-medium py-1 px-3 rounded transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-105"
              >
                Show Projects
              </button>
              <Link to="/experience">
                <button className="bg-gray-800 text-gray-300 font-medium py-1 px-3 rounded transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-105">
                  View Experience
                </button>
              </Link>
            </>
          ) : (
            <Link to="/">
              <button className="bg-gray-800 text-gray-300 font-medium py-1 px-3 rounded transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-105">
                Back to Home
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
