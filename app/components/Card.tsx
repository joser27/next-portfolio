import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-2xl mx-auto bg-base-200 shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-6">
        <img
          src="./profilepic.jpg"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full object-cover mr-6"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">Jose Rodriguez</h2>
          <p className="text-base-content">
            Hi, my name is Jose Rodriguez. I am a student at the University of
            Washington Tacoma. I enjoy creating new and unique projects. I am
            passionate about learning new things when it comes to improving my
            projects and my overall self.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
