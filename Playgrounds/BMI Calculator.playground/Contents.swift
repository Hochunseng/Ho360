import UIKit

/*
 
func bmiCalculator(personWeight : Float, personHeight : Float) -> String {
    let BMI = personWeight / pow(personHeight, 2)
    
    let shortenedBMI = String(format : "%.2f", BMI)
    
    if BMI > 25 {
        return "Your BMI is: \(shortenedBMI), you are overweight :("
    }
    else if BMI >= 18.5 && BMI <= 25 {
        return "Your BMI is: \(shortenedBMI), you are of normal weight :)"
    }
    else {
        return "Your BMI is: \(shortenedBMI), you are underweight :("
    }
}

print(bmiCalculator(personWeight : 61.235, personHeight : 1.7272))
 
*/

func bmiCalcImperialUnits(weightInPounds: Double, heightInFeet: Double, remainderInches: Double) {
    
    let weightInKg = weightInPounds * 0.45359237
    let totalInches = heightInFeet * 12 + remainderInches
    let heightInM = totalInches * 0.0254
    
    let bmi = weightInKg / pow(heightInM, 2)
    
    
}

bmiCalcImperialUnits(weightInPounds: 135, heightInFeet: 5, remainderInches: 8)