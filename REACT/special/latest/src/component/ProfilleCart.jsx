import { useState } from "react";

function ProfileCart() {
  const [profile, setProfile] = useState({
    name: "John",
    role: "Junior Developer",
    experience: "1 Year"
  });

  const promote = () => {
    setProfile({
      ...profile,
      role: "Senior Developer",
      experience: "3 Years"
    });
  };

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.role}</p>
      <p>{profile.experience}</p>

      <button onClick={promote}>
        Promote
      </button>
    </div>
  );
}

export default ProfileCart