import myimg from "../assets/ecdfcc2b-ee75-411b-984a-cfca1e76c6eb.jpg";

function ProfileCard() {
  return (
    <div className="bg-gray-900 p-6  rounded-xl shadow-lg max-w-sm mx-auto mt-12 text-center relative transform translate-y-9">
      {/* الصورة الشخصية */}
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-md mb-4">
        <img
          src={myimg}
          alt="Profile"
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* اسم المستخدم والموقع */}
      <h2 className="text-white text-2xl font-bold">Meshari AL-Ghabban</h2>
      <p className="text-blue-400 text-sm">Riyadh</p>

      {/* المهارات */}
      <div className="mt-6 text-left">
        <h3 className="text-white text-sm font-semibold">SKILLS</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-xs hover:bg-blue-600 hover:text-white transition duration-300">
            Front End Development
          </span>
          <span className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-xs hover:bg-blue-600 hover:text-white transition duration-300">
            HTML
          </span>
          <span className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-xs hover:bg-blue-600 hover:text-white transition duration-300">
            CSS
          </span>
          <span className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-xs hover:bg-blue-600 hover:text-white transition duration-300">
            JavaScript
          </span>
          <span className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-xs hover:bg-blue-600 hover:text-white transition duration-300">
            typeScript
          </span>
          <span className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-xs hover:bg-blue-600 hover:text-white transition duration-300">
            React
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
