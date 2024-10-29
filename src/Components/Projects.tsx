import { useState, useEffect, SetStateAction } from "react";
import github from "../assets/github.png";
import QR from "../assets/qr.png";
import task from "../assets/TASK.png";
import AI from "../assets/image.png";
import Car from "../assets/Car.png";
import mapss from "../assets/mapss.png";
import Whathar from "../assets/whathar.png";
import pildeeng from "../assets/pildeeng.png";
import came from "../assets/came.png";
import management from "../assets/implementation.png";

const projectsData = [
  {
    title: "QR Code",
    description:
      "This program allows you to create QR Codes and Barcodes quickly and easily. You can enter any text or link, and the program will generate the required code directly. The program features the flexibility to switch between QR Code and Barcode, making it suitable for a variety of uses such as sharing links or identifying products.",
    imageUrl: QR,
    projectUrl: "https://qr-code-fainal.vercel.app/",
    githubUrl: "https://github.com/q1p1/QR_code-fainal",
  },
  {
    title: "Task",
    description: "To save tasks and write new tasks",
    imageUrl: task,
    projectUrl: "https://todo-final-u9ro.vercel.app/",
    githubUrl: "https://github.com/q1p1/todo-final",
  },
  {
    title: "Ai Chatbot",
    description:
      "An artificial intelligence bot that is considered a personal assistant. This bot utilizes advanced AI algorithms to assist users with various tasks, providing responses based on natural language understanding. It aims to enhance productivity by handling user queries efficiently.",
    imageUrl: AI,
    projectUrl: "https://ai-beige-kappa.vercel.app/",
    githubUrl: "https://github.com/q1p1/AI",
  },
  {
    title: "Car Maintenance Tracker",
    description:
      "Car Maintenance Tracker is an application that allows users to easily track and maintain their branch. The application aims to help car owners organize vehicle expansion plans, and keep a complete record of each strategy that includes the date, cost, and type of maintenance. The application also allows adding new, modifying, and deleting vehicle data when needed.",
    imageUrl: Car,
    projectUrl: "https://vehicle-maintenance-tracker.vercel.app/",
    githubUrl: "https://github.com/q1p1/vehicle-maintenance-tracker",
  },
  {
    title: "GeoPoints Tracker",
    description:
      "This app provides an interactive map interface using ArcGIS that allows users to explore weather conditions in specific locations. When you click on any point on the map, the app displays a pop-up window showing current weather data such as temperature, wind speed, humidity, barometric pressure, and visibility. Additionally, users can switch between various map styles, including Hybrid, Topographic, and Dark Gray Canvas maps. Weather data is retrieved from WeatherAPI.com.",
    imageUrl: mapss,
    projectUrl: "https://maps-3radpoz2n-meshari-s-projects.vercel.app/",
    githubUrl: "https://github.com/q1p1/maps",
  },
  {
    title: "Weather API App",
    description:
      "An interactive website that allows users to view geographical points on an interactive map and know only the locations and their current location. Points are strategically displayed on the map using the ArcGIS library, with data (such as name, location, and color) saved as JSON.",
    imageUrl: Whathar,
    projectUrl: "https://weather-api-app-phi.vercel.app/",
    githubUrl: "https://github.com/q1p1/WeatherAPIApp",
  },
  {
    title: "Building Construction Estimation Tool",
    description:
      "The Building Construction Estimation Tool is a web-based application designed to help civil engineers and construction professionals estimate required building materials based on key building parameters such as the number of floors, building area, rooms, doors, and windows. The tool features automatic calculations for bricks, cement, and iron, 3D visualization of the building, an interactive map with location-specific pop-ups, customizable parameters, and multilingual support in English and Arabic, making it an ideal solution for quick and accurate material estimation.",
    imageUrl: pildeeng,
    projectUrl: "https://building-alpha.vercel.app/",
    githubUrl: "https://github.com/q1p1/building",
  },
  {
    title: "SmartCam",
    description:
      "The web app uses AI and camera data mining techniques, drawing on the TensorFlow.js library to provide an interactive experience right in the browser. Key Features: Real-time data recognition, simple and easy-to-use UI, runs directly in the browser without downloading additional applications, model-based.",
    imageUrl: came,
    githubUrl: "https://github.com/q1p1/SmartCame/tree/1",
  },
];

function ImageModal({
  imageUrl,
  onClose,
}: {
  imageUrl: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold"
        >
          &times;
        </button>
        <img
          src={imageUrl}
          alt="Project"
          className="w-full max-w-4xl h-auto rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}

function DotLoader() {
  return (
    <div className="flex justify-center items-center  min-h-40 space-x-2">
      <div className="w-3 h-3 bg-blue-500  rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-3 h-3 bg-blue-500   rounded-full animate-bounce delay-300"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
    </div>
  );
}

function Projects() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (imageUrl: SetStateAction<string>) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <DotLoader />;
  }

  return (
    <div>
      <h2 className="text-lg text-gray-500 mt-6 font-roboto mb-12 text-center">
        Explore each project in detail and check the code on GitHub
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              onClick={() => openModal(project.imageUrl)}
              className="cursor-pointer"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 hover:opacity-25 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex space-x-4 items-center">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition duration-300"
                >
                  <img
                    src={management}
                    className="w-10 h-10 font-semibold transition-all hover:-translate-y-1"
                    alt="Project"
                  />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition duration-300"
                >
                  <img
                    src={github}
                    className="w-6 h-6 mr-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ImageModal imageUrl={modalImageUrl} onClose={closeModal} />
      )}
    </div>
  );
}

export default Projects;
