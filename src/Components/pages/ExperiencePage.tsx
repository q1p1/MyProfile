import Header from "../Header";
import wakecap from "../../assets/download.png";
import Tuu from "../../assets/tuu.jfif";

const ExperiencePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header toggleProjects={() => console.log("Toggle Projects")} />
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-white mb-12 mt-9">
          Experience
        </h1>

        <div className="border border-gray-700 bg-gray-800 rounded-lg p-6 m-6 hover:bg-gray-700 transition duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
          <img
            src={wakecap}
            className="w-16 h-16 mr-4 rounded-lg shadow-sm mb-4"
            alt="Company logo"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-100">WakaCap</h2>
            <p className="text-lg font-medium text-gray-400">
              Software Developer
            </p>
            <p className="text-sm text-gray-500 italic">June 2024 - Now</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
              <li>
                Developing and maintaining web applications using React and
                TypeScript
              </li>
              <li>
                Optimizing web applications for performance and scalability
              </li>
              <li>Adding new features based on customer feedback</li>
              <li>Identifying and solving bugs</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-700 bg-gray-800 rounded-lg p-6 m-6 hover:bg-gray-700 transition duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
          <img
            src={Tuu}
            className="w-16 h-16 mr-4 rounded-lg shadow-sm mb-4"
            alt="Company logo"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-100">
              Ministry of Municipal rural affairs and housing
            </h2>
            <p className="text-lg font-medium text-gray-400">
              Software Developer
            </p>
            <p className="text-sm text-gray-500 italic">
              June 2023 - August 2023
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
              <li>Web design</li>
              <li>Database management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
