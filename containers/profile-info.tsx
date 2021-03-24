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

      <dt>About</dt>
      <dd>{profileData.about}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, tristique et faucibus et, iaculis ut velit. Ut pretium purus tincidunt,
        porta massa in, sodales lacus. Sed ac feugiat purus, sit amet molestie enim. Donec eu turpis quis velit ullamcorper finibus. Pellentesque at
        velit nec magna tristique feugiat nec sit amet risus. Maecenas vel sapien ac ipsum commodo rutrum maximus et justo. Donec sapien neque,
        elementum nec molestie quis, gravida ut turpis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, tristique et faucibus et, iaculis ut velit. Ut pretium purus tincidunt,
        porta massa in, sodales lacus. Sed ac feugiat purus, sit amet molestie enim. Donec eu turpis quis velit ullamcorper finibus. Pellentesque at
        velit nec magna tristique feugiat nec sit amet risus. Maecenas vel sapien ac ipsum commodo rutrum maximus et justo. Donec sapien neque,
        elementum nec molestie quis, gravida ut turpi
      </dd>
    </div>
    <div className={styles.avatar}>
      <h3>Avatar:</h3>
      <img src={profileData.avatarUrl} alt={"Avatar"}/>
    </div>
  </div>
}

export default ProfileInfo