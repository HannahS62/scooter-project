const User = require('../src/User')
const {describe, it, test, expect} = require((`@jest/globals`))

describe("Test User login() method", () => {

  it("logs the user in if the password is correct", () => {
    const user = new User("Hannah", "Getin234", 31)
    user.login("Getin234")
    expect(user.password).toBe("Getin234")
  })
  it("throws error if password is incorrect", () => {
    const user = new User("Stefan", "Getin234", 32)
    expect( () => {
      user.login("Getin235")
    }).toThrow("incorrect password")  
  })
})


describe("Test User logout() method", () => {

  it("logs user out", () => {
    const user = new User("Evie", "ca7", "11")
    user.logout()
    expect(user.loggedIn).toBe(false)
  })
})
