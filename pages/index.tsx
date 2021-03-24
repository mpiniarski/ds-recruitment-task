import styles from './index.module.scss'
import ProfileForm from "containers/profileForm";

export type ProfileData = {
  readonly firstName : string
  readonly lastName : string
  readonly email : string
  readonly phone : string
  readonly birthday : Date
  readonly about : string
  readonly avatarUrl : string
}

const IndexPage = () => (
    <main>
      <h1>
        Profile form
      </h1>
      <ProfileForm/>
    </main>

)

export default IndexPage