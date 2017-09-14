//Creating the getMilk() function
/*
func getMilk() {
    print("go to the shops")
    print("buy 2 cartons of milk")
    print("pay $2")
    print("come home")
}
*/

func getMilk(howManyMilkCartons : Int) {
    print("go to the shops")
    print("buy \(howManyMilkCartons) cartons of milk")
    
    let priceToPay = howManyMilkCartons * 2
    
    print("pay $\(priceToPay)")
    print("come home")
}


//Calling the getMilk() function
getMilk(howManyMilkCartons: 4)
getMilk(howManyMilkCartons: 1)
getMilk(howManyMilkCartons: 12)
