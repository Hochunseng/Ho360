//: Playground - noun: a place where people can play

import UIKit

class Firebase {
    
    func createUser (username: String, password: String, completion: (Bool, Int) -> Void) {
        
        //does something time consuming
        
        var isSuccess = true
        var userID = 123
        
        completion(isSuccess, userID)
        
    }
    
}

class MyApp {
    
    func registerButtonPressed () {
    
        let firebase = Firebase()
    
        firebase.createUser(username: "Jason", password: "123456", completion: { (isSuccess : Bool, userID : Int) in
        
        print("registration is successful: \(isSuccess)")
        print("userID is: \(userID)")
        
    })
    
    
    }
    
   
    
}

let myApp = MyApp()
myApp.registerButtonPressed()




