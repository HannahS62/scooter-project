const User = require('../src/User')
const Scooter = require('../src/Scooter')
const ScooterApp = require('../src/ScooterApp')
const {describe, it, test, expect} = require((`@jest/globals`))


const scooterApp = new ScooterApp()
// ScooterApp tests here

// register user
describe('registerUser method tests', () => {
  test('Should return instance of User', () => {
    const response = ScooterApp.registerUser('Joe Bloggs', 'test123', 21)
    expect(response).toBeInstanceOf(User)
  })
})

describe("logs user in correctly", () => {
it("logs the user in if they are already registered", () => {
  const user = new User("Hannah", "abc123", 31)
  ScooterApp.registeredUsers = ("Hannah","abc123", 31)
  user.login("abc123")
  expect(user.loggedIn).toBe(true)
  
})
it("throws an error if username is incorrect", () => {
  const user = new User("Taylor", "123Getin", 28)
  ScooterApp.registeredUsers = ("Taylor", "123Getin", 28)
  expect( () => {
    ScooterApp.loginUser("Hannah","123Getin")
}).toThrow("Username or password is incorrect")
})

})

// log out

// rent scooter

// dock scooter
