function ProfileCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8 justify-center">
      <img
        src="your-profile-pic-url.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold text-center mb-2">Your Name</h1>
      <p className="text-center text-gray-700">
        Your job title or a brief description.
      </p>
    </div>
  );
}

export default ProfileCard;
