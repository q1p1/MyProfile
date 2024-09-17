import Header from "../Header";
import wakecap from "../../assets/download.png";
interface ExperienceProps {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  tasks: string[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  companyName,
  jobTitle,
  startDate,
  endDate,
  tasks,
}) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 mb-4 flex items-start">
      <img src={wakecap} className="w-16 h-16 mr-4" />
      <div>
        <h2 className="text-xl font-semibold">{companyName}</h2>
        <p className="text-gray-700">{jobTitle}</p>
        <p className="text-gray-500">
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
          jobTitle="Software developer"
          startDate="June 2024"
          endDate="Naw "
          tasks={[
            "Developing and maintaining web applications using React and TypeScript",
            "Optimizing web applications ",
            "Adding new features",
            "Solve bugs",
          ]}
        />
      </div>
    </div>
  );
}

export default ExperiencePage;
