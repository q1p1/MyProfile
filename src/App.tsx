import { useState } from "react";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import ProfileCard from "./Components/ProfileCard";
function App() {
  const [showProjects, setShowProjects] = useState(false);
  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div>
      <Header toggleProjects={toggleProjects} />
      <ProfileCard />
      {showProjects && <Projects />}
    </div>
  );
}

export default App;
