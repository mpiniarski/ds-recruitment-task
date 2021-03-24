import {useStorageState} from "react-storage-hooks";
import isBrowser from "utils/isBrowser";
import serverSideStorage from "utils/serverSideStorage";
import {sessionStorageKeys} from "consts";
import {ProfileData} from "pages/profile-form";
import {useRouter} from "next/router";

const IndexPage = () => {
  const [profileData] = useStorageState<ProfileData>(
    isBrowser() ? sessionStorage : serverSideStorage,
    sessionStorageKeys.profileData
  );
  const router = useRouter()

  if(isBrowser()) {
    if (profileData === null) {
      router.replace("profile-form")
    } else {
      router.replace("profile")
    }
  }

  return <></>

}

export default IndexPage