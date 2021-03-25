import {createProfileData} from "support";

describe("Profile tests", () => {

  beforeEach(()=>{
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
  })

  it("Should redirect from index to profile-form when there is no profile data", () => {
    cy.visit("/")
    cy.location({timeout: 10000}).should(location => expect(location.pathname).eq(`/profile-form`))
  })

  it("Should redirect from profile to profile-form when there is no profile data", () => {
    cy.visit("/profile")
    cy.location({timeout: 10000}).should(location => expect(location.pathname).eq(`/profile-form`))
  })

  it("Should fill in the form and display proper data in the profile page", () => {
    let profileData = createProfileData();
    cy.visit("/profile-form")

    cy.getBySel("Input-firstName").type(profileData.firstName)
    cy.getBySel("Input-lastName").type(profileData.lastName)
    cy.getBySel("Input-email").type(profileData.email)
    cy.getBySel("Input-phone").type(profileData.phone)
    cy.getBySel("Container-birthday").within(() => {
      cy.get("input[type=text]").type(
        profileData.birthday.toLocaleDateString("pl-PL"),
        {force: true}
      )
      cy.get("div[data-focused=true]").click()
    })
    profileData.about && cy.getBySel("Input-about").type(profileData.about)
    cy.getBySel("Button-avatarUrl").click()

    cy.getBySel("ImagePicker").within(() => {
      cy.getBySel("images").find(`img[src="${profileData.avatarUrl}"]`).click()
      cy.getBySel("Button-submit").click()
    }).then(()=>{
      cy.getBySel("ImagePicker").should('not.exist')
      cy.getBySel("avatarImage").should('have.attr', "src").should('equal', profileData.avatarUrl)
    })

    cy.getBySel("Button-submit").click()
    cy.location().should(location => expect(location.pathname).eq(`/profile`))

    cy.contains(profileData.firstName)
    cy.contains(profileData.lastName)
    cy.contains(profileData.birthday.toLocaleDateString("pl-PL"))
    cy.contains(profileData.email)
    cy.contains(profileData.phone)
    profileData.about && cy.contains(profileData.about)
    cy.getBySel("avatarImage").should('have.attr', "src").should('equal', profileData.avatarUrl)

    // Could be put in separate test in which API response is mocked to contain a profile
    //  (or in current implementation: session storage is filled with profile data)
    cy.visit("/")
    cy.location().should(location => expect(location.pathname).eq(`/profile`))
  })
})