import styles from './profile-info.module.scss';
import {ProfileData} from "models";

const ProfileInfo = ({ profileData }: { profileData: ProfileData }) => (
  <section className={styles.container} data-test={"ProfileInfo"}>
    <div className={styles.data}>
      <dt>First name</dt>
      <dd>{profileData.firstName}</dd>

      <dt>Last name</dt>
      <dd>{profileData.lastName}</dd>

      <dt>Birthday date</dt>
      <dd>{profileData.birthday.toLocaleDateString("pl-PL")}</dd>

      <dt>Email address</dt>
      <dd>{profileData.email}</dd>

      <dt>Phone number</dt>
      <dd>{profileData.phone}</dd>

      {profileData.about && (
      <>
        <dt>About</dt>
        <dd>{profileData.about}</dd>
      </>
      )}
    </div>
    <div className={styles.avatar}>
      <h3>Avatar:</h3>
      <img
        src={profileData.avatarUrl}
        alt="Avatar"
        width={1}
        height={1}
        data-test={"avatarImage"}
      />
    </div>
  </section>
);

export default ProfileInfo;
