class BMI {
    constructor(height, weight){//constructor for bmi

        this.height = height;//assigns height
        this.weight = weight;//assigns weight

    }
    calculateBMI(){//calculation
   
        let answer = this.weight/(this.height**2);// formula 
        return answer;//result of the bmi calculation
    }
    
}
    let myBMI = new BMI(2, 90);//creating a bmi object using height and weight information

    let bmi = myBMI.calculateBMI(); //calling the calculate bmi method 

    console.log(bmi);//console log to output the result 