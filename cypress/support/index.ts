import "./commands"
import {ProfileData} from "../../models";
import faker from "faker"

export const createProfileData = () : ProfileData => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  about: faker.random.words(20),
  avatarUrl: "images/avatars/1.png",
  phone: faker.phone.phoneNumber("+48 ### ### ###"),
  email: faker.internet.email(),
  birthday:faker.date.past()
})