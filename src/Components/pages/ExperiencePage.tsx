import Header from "../Header";
import wakecap from "../../assets/download.png";
import Tuu from "../../assets/tuu.jfif"; 

interface ExperienceProps {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  tasks: string[];
  logo?: string; 
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  companyName,
  jobTitle,
  startDate,
  endDate,
  tasks,
  logo,
}) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 m-10 flex items-start hover:bg-gray-100 transition duration-300">
      <img
        src={logo || wakecap}
        className="w-16 h-16 mr-4 rounded-full"
        alt="Company logo"
      />
      <div>
        <h2 className="text-xl font-semibold text-blue-700">{companyName}</h2>
        <p className="text-gray-700 font-medium">{jobTitle}</p>
        <p className="text-gray-500 italic">
          {startDate} - {endDate}
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function ExperiencePage() {
  return (
    <div>
      <Header
        toggleProjects={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Experience</h1>
        <ExperienceCard
          companyName="WakaCap"
          jobTitle="Software Developer"
          startDate="June 2024"
          endDate="Now"
          tasks={[
            "Developing and maintaining web applications using React and TypeScript",
            "Optimizing web applications for performance and scalability",
            "Adding new features based on customer feedback",
            "Identifying and solving bugs",
          ]}
        />
        <ExperienceCard
          companyName="Ministry of Municipal rural affairs and housing"
          jobTitle="Software Developer"
          startDate="June 2023"
          endDate="August 2023"
          tasks={["web design", "database"]}
          logo={Tuu}
        />
      </div>
    </div>
  );
}

export default ExperiencePage;
