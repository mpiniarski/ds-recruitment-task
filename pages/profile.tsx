import { useStorageState } from 'react-storage-hooks';
import isBrowser from 'utils/isBrowser';
import serverSideStorage from 'utils/serverSideStorage';
import { sessionStorageKeys } from 'consts';
import { useRouter } from 'next/router';
import { ProfileData } from 'models';
import ProfileInfo from "components/profile-info";

const ProfilePage = () => {
  let [profileData] = useStorageState<ProfileData>(
    isBrowser() ? sessionStorage : serverSideStorage,
    sessionStorageKeys.profileData,
  );
  const router = useRouter();

  if (profileData === null) {
    isBrowser() && router.push('profile-form');
    return <></>;
  }

  //Fix for Date deserialization missing in react-storage-hooks. Should be handled on communication with session storage.
  profileData = {...profileData, birthday: new Date(profileData.birthday)}

  return (
    <main>
      <h1>
        Your profile
      </h1>
      <ProfileInfo profileData={profileData} />
    </main>
  );
};

export default ProfilePage;
