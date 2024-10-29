import myimg from "../assets/ecdfcc2b-ee75-411b-984a-cfca1e76c6eb.jpg";
import coding from "../assets/implementation.png";
import html from "../assets/htmlImg.png";
import css from "../assets/cssImg.png";
import js from "../assets/jsImg.png";
import react from "../assets/reactImg.png";
import ts from "../assets/tsImg.png";

function ProfileCard() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-11 rounded-full shadow-xl max-w-xs mx-auto mt-20 text-center relative transform transition duration-500 hover:rotate-1 hover:scale-105">
      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-white shadow-lg mb-4">
        <img
          src={myimg}
          alt="Profile"
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
        />
      </div>

      <h2 className="text-white text-xl font-extrabold">Meshari AL-Ghabban</h2>
      <p className="text-gray-400 text-lg font-medium">Riyadh</p>

      <div className="mt-8 text-center">
        <h3 className="text-gray-300   text-lg font-medium">Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="flex items-center bg-gray-700 text-blue-300 py-2 px-4 rounded-full text-sm shadow-lg transform transition-all hover:scale-110">
            <img src={coding} className="h-5 w-5 mr-2" /> Front End Development
          </span>
          <span className="flex items-center bg-gray-700 text-blue-300 py-2 px-4 rounded-full text-sm shadow-lg transform transition-all hover:scale-110">
            <img src={html} className="h-5 w-5 mr-2" />
            HTML
          </span>
          <span className="flex items-center bg-gray-700 text-blue-300 py-2 px-4 rounded-full text-sm shadow-lg transform transition-all hover:scale-110">
            <img src={css} className="h-5 w-5 mr-2" /> CSS
          </span>
          <span className="flex items-center bg-gray-700 text-blue-300 py-2 px-4 rounded-full text-sm shadow-lg transform transition-all hover:scale-110">
            <img src={js} className="h-5 w-5 mr-2" /> JavaScript
          </span>
          <span className="flex items-center bg-gray-700 text-blue-300 py-2 px-4 rounded-full text-sm shadow-lg transform transition-all hover:scale-110">
            <img src={ts} className="h-5 w-5 mr-2" /> TypeScript
          </span>
          <span className="flex items-center bg-gray-700 text-blue-300 py-2 px-4 rounded-full text-sm shadow-lg transform transition-all hover:scale-110">
            <img src={react} className="h-5 w-5 mr-2" /> React
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
