import {ProfileData} from "pages/profile-form";

const Profile = ({profileData}: { profileData: ProfileData }) => {
  return <>
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
    <dd>{profileData.about}</dd>

  </>
}

export default Profile