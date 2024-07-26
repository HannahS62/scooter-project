const Scooter = require('../src/Scooter')
const User = require('../src/User')
const {describe, it, test, expect} = require((`@jest/globals`))

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

// Method tests
describe('scooter methods', () => {
    it("rents if charge is above 20 and doesnt need repair", () => {
      const user = new User("Tracy", "happyDog", 60)
      const scooter = new Scooter("Liverpool")
      scooter.rent("Tracy")
      expect(scooter.station).toBeNull
      expect(scooter.user).toBe("Tracy")
    })
    it("throws error if charge is less than 20", ()=> {
      const user = new User("Tracy", "happyDog", 60)
      const scooter = new Scooter("Liverpool")
      scooter.charge = 19
      scooter.isBroken = false
      expect( () => {
        scooter.rent("Tracy")
      }).toThrow("scooter needs to charge or scooter needs repair")
    })
    it("throws error if scooter needs repair", ()=> {
      const user = new User("Tracy", "happyDog", 60)
      const scooter = new Scooter("Liverpool")
      scooter.charge = 21
      scooter.isBroken = true
      expect( () => {
        scooter.rent("Tracy")
      }).toThrow("scooter needs to charge or scooter needs repair")
    })   
    })

describe("dock() method updates station and user correctly", ()=> {
      it("updates station when scooter docks", () => {
        const user = new User("Shell", "Santorini", "21")
        const scooter = new Scooter("Shrewsbury")
        scooter.dock("Shrewsbury")
        expect(scooter.station).toBe("Shrewsbury")
      })
      it("updates user when scooter docks", () => {
        const user = new User("Shell", "Santorini", "21")
        const scooter = new Scooter("Shrewsbury")
        scooter.dock("Shrewsbury")
        expect(scooter.user).toBeNull
      })      
    })



  
 
  // dock method

  // requestRepair method

  // charge method
