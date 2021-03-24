import {ProfileData} from "pages/profile-form";
import styles from "./profile-info.module.scss"

const ProfileInfo = ({profileData}: { profileData: ProfileData }) => {
  return <div className={styles.container}>
    <div className={styles.data}>
      <dt>First name</dt>
      <dd>{profileData.firstName}</dd>

      <dt>Last name</dt>
      <dd>{profileData.lastName}</dd>

      <dt>Birthday date</dt>
      <dd>{profileData.birthday}</dd>

      <dt>Email address</dt>
      <dd>{profileData.email}</dd>

      <dt>Phone number</dt>
      <dd>{profileData.phone}</dd>

      {profileData.about && <>
          <dt>About</dt>
          <dd>{profileData.about}</dd>
      </>}
    </div>
    <div className={styles.avatar}>
      <h3>Avatar:</h3>
      <img src={profileData.avatarUrl} alt={"Avatar"} width={1} height={1}/>
    </div>
  </div>
}

export default ProfileInfo