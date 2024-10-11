import { ProfileContextProvider, useProfileContext } from "./profile-context";
import { ProfileEditor } from "./ProfileEditor";

export default function App() {
  return (
    <ProfileContextProvider>
      <ProfileEditor />
      <ProfileDisplay />
    </ProfileContextProvider>
  );
}

function ProfileDisplay() {
  const { profile } = useProfileContext();

  return (
    <div>
      <div>Name: {profile.name}</div>
      <div>Email: {profile.email}</div>
      <div>Bio: {profile.bio}</div>
    </div>
  );
}
