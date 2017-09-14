//
//  SelfDrivingCar.swift
//  Classes and Objects
//
//  Created by Jason Ho on 8/30/17.
//  Copyright © 2017 Jason Ho. All rights reserved.
//

import Foundation

class SelfDrivingCar : Car {
    
    var destination : String?
    
    override func drive() {
        super.drive()
        
        if let userSetDestination = destination {
        
        print("driving towards " + userSetDestination)
            
        }
        
    }
    
}
