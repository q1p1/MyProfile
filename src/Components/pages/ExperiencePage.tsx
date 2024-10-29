import wakecap from "../../assets/download.png";
import Tuu from "../../assets/tuu.jfif";
import Header from "../Header";

const ExperiencePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header toggleProjects={() => console.log("Toggle Projects")} />
      <div className="flex max-w-6xl mx-auto py-20 px-6 space-x-8">
        <aside className="w-1/3 bg-gray-800 rounded-lg shadow-lg p-6 text-white">
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2 text-gray-100">Objective</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I am a graduate of{" "}
              <span className="font-semibold text-gray-100">
                Information Technology
              </span>
              from the{" "}
              <span className="text-blue-400">University of Tabuk</span>,
              proficient in
              <span className="font-semibold text-gray-100">
                {" "}
                website design and development
              </span>
              . I am looking forward to an opportunity that allows me to face{" "}
              <span className="font-semibold text-gray-100">
                new challenges
              </span>
              and contribute to the company’s success by harnessing my skills
              and experiences acquired during my studies.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2 text-gray-100">Skills</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
              <li>Speaks English fluently</li>
              <li>Web design</li>
              <li>Proficient in Microsoft Office</li>
              <li>Problem-solving skills</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2 text-gray-100">
              Certificates
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
              <li>Introduction to Java</li>
              <li>SQL Fundamentals</li>
              <li>Engineering Practices for Software Design</li>
              <li>Object-Oriented Programming Concepts</li>
            </ul>
          </div>
        </aside>

        <div className="w-2/3">
          <h1 className="text-4xl font-bold text-center text-white mb-12">
            Experience
          </h1>

          <div className="border border-gray-700 bg-gray-800 rounded-lg p-6 mb-6 hover:bg-gray-700 transition duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
            <img
              src={wakecap}
              className="w-16 h-16 mr-4 rounded-lg shadow-sm mb-2"
              alt="Wakecap logo"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-100">Wakecap</h2>
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

          <div className="border border-gray-700 bg-gray-800 rounded-lg p-6 mb-6 hover:bg-gray-700 transition duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
            <img
              src={Tuu}
              className="w-16 h-16 mr-4 rounded-lg shadow-sm mb-2"
              alt="Ministry logo"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-100">
                Ministry of Municipal Rural Affairs and Housing
              </h2>
              <p className="text-lg font-medium text-gray-400">
                Information Technology Intern
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
    </div>
  );
};

export default ExperiencePage;
