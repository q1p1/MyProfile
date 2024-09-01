import { Link, useLocation } from "react-router-dom";
import linkedin from "../assets/linkedin-logo.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import github from "../assets/github.png";
interface HeaderProps {
  toggleProjects: () => void;
}
function Header({ toggleProjects }: HeaderProps) {
  const location = useLocation();
  const isExperiencePage = location.pathname === "/experience";

  return (
    <header className="bg-gray-600 text-white p-4 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <img src={github} alt="GitHub" className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <img src={whatsapp} alt="WhatsApp" className="h-8 w-8" />
          </a>
          <a
            href="https://www.youtube.com/channel/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <img src={youtube} alt="YouTube" className="h-8 w-8" />
          </a>
        </div>
        <div className="flex space-x-4">
          {!isExperiencePage ? (
            <>
              <div className="flex space-x-4">
                <button
                  onClick={toggleProjects}
                  className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                >
                  Show Projects
                </button>
              </div>
              <Link to="/experience">
                <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded">
                  View Experience
                </button>
              </Link>
            </>
          ) : (
            <Link to="/">
              <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded">
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