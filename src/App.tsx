import React, { useState } from 'react';
import Header from "./Components/Header";  // تأكد من أن المسار صحيح
import Projects from "./Components/Projects";  // تأكد من أن المسار صحيح والاسم صحيح
import ProfileCard from "./Components/ProfileCard"  // تأكد من أن المسار صحيح

function App() {
  const [showProjects, setShowProjects] = useState(false); // إضافة حالة لتتبع عرض المشاريع

  // وظيفة لتبديل عرض المشاريع
  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div>
      {/* تمرير الوظيفة toggleProjects إلى الهيدر */}
      <Header toggleProjects={toggleProjects} />
      <ProfileCard />
      {showProjects && <Projects />} 
    </div>
  );
}

export default App;
