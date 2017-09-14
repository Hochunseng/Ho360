//
//  ViewController.swift
//  Ho360
//
//  Created by Jason Ho on 9/11/17.
//  Copyright © 2017 Jason Ho. All rights reserved.
//

import UIKit
import GoogleMaps
import CoreLocation

class ViewController: UIViewController, CLLocationManagerDelegate {
    
    let locationManager = CLLocationManager()
    var vwGMap : GMSMapView?

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        locationManager.delegate = self
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.distanceFilter = 500
        locationManager.requestWhenInUseAuthorization()
        locationManager.startUpdatingLocation()
        
        vwGMap = GMSMapView()
        let camera = GMSCameraPosition.camera(withLatitude: (locationManager.location?.coordinate.latitude)!, longitude: (locationManager.location?.coordinate.longitude)!, zoom: 17.0)
        vwGMap = GMSMapView.map(withFrame: self.view.frame, camera: camera)
        vwGMap?.camera = camera
        self.view = vwGMap
        
        
        CreateRefreshButton()
        
    
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        
        let newLocation = locations.last
        vwGMap?.camera = GMSCameraPosition.camera(withTarget: newLocation!.coordinate, zoom: 17.0)
        vwGMap?.settings.myLocationButton = true
        self.view = self.vwGMap
        
        let marker = GMSMarker()
        marker.position = CLLocationCoordinate2D(latitude: (locationManager.location?.coordinate.latitude)!, longitude: (locationManager.location?.coordinate.longitude)!)
        marker.title = "Jason"
        marker.snippet = "Ho"
        marker.map = self.vwGMap

        //self.locationManager.stopUpdatingLocation()

        }
  
    
    
    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        print(error)
    }
    
    func updateUI() {
        let camera = GMSCameraPosition.camera(withLatitude: (locationManager.location?.coordinate.latitude)!, longitude: (locationManager.location?.coordinate.longitude)!, zoom: 17.0)
        let mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
        view = mapView
        
        
        let marker = GMSMarker()
        marker.position = CLLocationCoordinate2D(latitude: (locationManager.location?.coordinate.latitude)!, longitude: (locationManager.location?.coordinate.longitude)!)
        marker.title = "Jason"
        marker.snippet = "Ho"
        marker.map = mapView
        
        print(marker.position)
    }
    
    
    func CreateRefreshButton() {
        let button = UIButton(frame: CGRect(x: 130, y: 28, width: 229, height: 59))
        button.backgroundColor = .black
        button.setTitle("Refresh Map", for: .normal)
        button.addTarget(self, action:#selector(self.buttonClicked), for: .touchUpInside)
        self.view.addSubview(button)
    }
    
    func buttonClicked(sender: UIButton!) {
        locationManager.startUpdatingLocation()
        locationManager.stopUpdatingLocation()
        //print((locationManager.location?.coordinate.latitude)!, (locationManager.location?.coordinate.longitude)!)
        print("Map Refresh Successful!")
        CreateRefreshButton()
    }
    


}

