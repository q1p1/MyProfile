
const projectsData = [
  {
    title: "مشروع 1",
    description: "هذا هو وصف مشروع 1. يتضمن تفاصيل ومعلومات مهمة عن المشروع.",
  },
  {
    title: "مشروع 2",
    description: "هذا هو وصف مشروع 2. يوضح الهدف والتفاصيل الأخرى.",
  },
  {
    title: "مشروع 3",
    description: "هذا هو وصف مشروع 3. يشرح المفاهيم المستخدمة والتحديات.",
  },
];

function Projects() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">المشاريع</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
