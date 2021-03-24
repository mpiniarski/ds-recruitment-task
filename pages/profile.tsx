import ProfileInfo from "containers/profile-info"
import {useStorageState} from "react-storage-hooks";
import isBrowser from "utils/isBrowser";
import serverSideStorage from "utils/serverSideStorage";
import {sessionStorageKeys} from "consts";
import {ProfileData} from "pages/profile-form";
import {useRouter} from "next/router";


const ProfilePage = () => {
  const [profileData] = useStorageState<ProfileData>(
    isBrowser() ? sessionStorage : serverSideStorage,
    sessionStorageKeys.profileData
  );
  const router = useRouter()

  if(profileData === null ){
    isBrowser() && router.push("profile-form")
    return <></>
  }

  return <main>
    <h1>
      Your profile
    </h1>
    <ProfileInfo profileData={profileData}/>
  </main>

}

export default ProfilePage