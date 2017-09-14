//
//  Car.swift
//  Classes and Objects
//
//  Created by Jason Ho on 8/30/17.
//  Copyright © 2017 Jason Ho. All rights reserved.
//

import Foundation

enum CarType {
    case Sedan
    case Coupe
    case Hatchback
}

class Car {
    
    var colour = "Black"
    var numberOfSeats : Int = 5
    var typeofCar : CarType = .Coupe

    init() {
        
    }
    
    convenience init (customerChosenColour : String) {
        self.init()
        colour = customerChosenColour
    }
    
    func drive() {
        print("car is moving")
    }
    
}
