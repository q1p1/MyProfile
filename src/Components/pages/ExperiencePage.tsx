// ExperiencePage.tsx
import Header from "../Header"; // تأكد من مسار الاستيراد

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
        <p>Here is where you can describe your professional experience.</p>
        {/* يمكنك إضافة المزيد من التفاصيل هنا حول الخبرة */}
      </div>
    </div>
  );
}

export default ExperiencePage;
