// import imgmap from "../assets/MAPS.png";
import github from "../assets/github.png";
import QR from "../assets/qr.png";
import task from "../assets/TASK.png";
import AI from "../assets/image.png";

const projectsData = [
  // {
  //   title: "Workers in maps",
  //   description:
  //     "The project is based on identifying workers on the map and calculating the number shown on the screen, and there are other characteristics that you can learn about when entering the project page.",
  //   imageUrl: imgmap,
  //   githubUrl: "https://github.com/AhmedAlaaEzzt/mk-todo-list",
  // },
  {
    title: "QR Code",
    description: "Convert links and text into QR Code",
    imageUrl: QR,
    projectUrl: "https://github.com/q1p1/QR_code-fainal",
    githubUrl: "https://qr-code-fainal.vercel.app/",
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
      "An artificial intelligence bot that is considered a personal assistant",
    imageUrl: AI,
    projectUrl: "https://ai-beige-kappa.vercel.app/",
    githubUrl: "https://github.com/q1p1/AI",
  },
];

function Projects() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </a>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <img
                src={github}
                className="w-8 h-8 object-cover rounded-md mr-2"
                alt="GitHub"
              />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
