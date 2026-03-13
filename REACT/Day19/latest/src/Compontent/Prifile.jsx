import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Priya",
    role: "Developer",
    experience: 2
  });

  const promote = () => {
    setProfile({
      ...profile,
      role: "Senior Developer",
      experience: profile.experience + 1
    });
  };

  return (
    <div>
      <h2>Name: {profile.name}</h2>
      <h2>Role: {profile.role}</h2>
      <h2>Experience: {profile.experience}</h2>

      <button onClick={promote}>Promote</button>
    </div>
  );
}

export default Profile;