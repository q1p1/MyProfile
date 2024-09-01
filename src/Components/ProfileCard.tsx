import myimg from "../assets/ecdfcc2b-ee75-411b-984a-cfca1e76c6eb.jpg"
function ProfileCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8 justify-center">
      <img
        src={myimg}
        alt="Profile"
        className="w-32 h-32 rounded-md mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold text-center mb-2">
        Meshari AL-Ghabban
      </h1>
      <p className="text-center text-gray-700">Software developer </p>
    </div>
  );
}

export default ProfileCard;
