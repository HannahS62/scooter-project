// require the User and Scooter classes - see where they can be used in ScooterApp.js
const Scooter = require(`./Scooter`)
const User = require(`./User`)

class ScooterApp {

      static stations = {
        Waterloo: [],
        Kingscross: [],
        Paddington: [],
      }
      static registeredUsers = {}

    
    static registerUser(username, password, age) {
      if(Object.hasOwn(this.registeredUsers, username)) {
        throw new Error("already registered")
      } if(age < 18) {
        throw new Error("too young to register")
      }
      const user = new User(username,password,age)
      this.registeredUsers[username] = user
      console.log(`${username} has been registered`)
      return user
    }

    loginUser(username, password) {
      const user = this.registeredUsers[username]
        if(!username || password !== user.password) {
          throw new Error("Username or password is incorrect")
        }
        user.login(password)
        console.log(`${user} has been logged in`)
    }

    logoutUser(username) {
      const user = this.registeredUsers[username]
      if(!user ){}
    }

    createScooter(station) {}

    docScooter(scooter, station) {}

    rentScooter(scooter, user) {}

    print() {
      return this.registeredUsers
      return this.stations
    }

  }


module.exports = ScooterApp
