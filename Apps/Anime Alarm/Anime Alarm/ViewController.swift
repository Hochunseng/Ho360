//
//  ViewController.swift
//  Anime Alarm
//
//  Created by Jason Ho on 9/6/17.
//  Copyright © 2017 Jason Ho. All rights reserved.
//

import UIKit
import UserNotifications
import AudioToolbox
import AVFoundation

class ViewController: UIViewController {
    
    var day = 0
    var hour = 0
    var minute = 0
    
    //Alarm IB Actions
    @IBAction func TurnAlarmOffPressed(_ sender: UIButton) {
        MusicHelper.sharedHelper.playBackgroundMusic(musicSwitch: false)
    }
    @IBAction func SetAlarmPressed(_ sender: UIButton) {
        scheduleLocal()
    }
    
    

    
    
    //Notification Permissions
    func initNotificationSetupCheck() {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound])
        { (success, error) in
            if success {
                print("Permission Granted")
            } else {
                print("There was a problem!")
            }
        }
    }
    
    
    //Notification Date and Time
    func scheduleLocal() {
        let center = UNUserNotificationCenter.current()
        
        let localNotification = UNMutableNotificationContent()
        localNotification.title = "title"
        localNotification.body = "body"
        localNotification.sound = UNNotificationSound.default()
        
        var dateComponents = DateComponents()
        dateComponents.day = day
        dateComponents.hour = hour
        dateComponents.minute = minute
        let trigger = UNCalendarNotificationTrigger(dateMatching: dateComponents, repeats: true)
        
        let request = UNNotificationRequest(identifier: UUID().uuidString, content: localNotification, trigger: trigger)
        center.add(request)
   
    }

    
    //Set Alarm Time and Date
    @IBAction func dateChanged(_ sender: UIDatePicker) {
        let componenets = Calendar.current.dateComponents([.day, .hour, .minute], from: sender.date)
        day = componenets.day!
        hour = componenets.hour!
        minute = componenets.minute!
        print(day)
        print(hour)
        print(minute)

        
    }
    
    

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        initNotificationSetupCheck()
        MusicHelper.sharedHelper.playBackgroundMusic(musicSwitch: true)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

