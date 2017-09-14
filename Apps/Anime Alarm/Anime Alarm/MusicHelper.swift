//
//  MusicHelper.swift
//  Anime Alarm
//
//  Created by Jason Ho on 9/6/17.
//  Copyright © 2017 Jason Ho. All rights reserved.
//

import UIKit
import AVFoundation

class MusicHelper {
    static let sharedHelper = MusicHelper()
    var audioPlayer: AVAudioPlayer?
    
    func playBackgroundMusic(musicSwitch : Bool) {
        let aSound = NSURL(fileURLWithPath: Bundle.main.path(forResource: "Test", ofType: "mp3")!)
        do {
            if musicSwitch == true {
            audioPlayer = try AVAudioPlayer(contentsOf:aSound as URL)
            audioPlayer!.numberOfLoops = -1
            audioPlayer!.prepareToPlay()
            audioPlayer!.play()
            }
            else {
                audioPlayer?.stop()
            }
        } catch {
            print("Cannot play the file")
            }
        
        }
     
    }

