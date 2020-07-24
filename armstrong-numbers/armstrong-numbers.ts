class ArmstrongNumbers{
    isArmstrongNumber(num:number):boolean{
        if (num.toString().length==1){
            return true;
        } else{
            return false;
        }
    } 
}

export default ArmstrongNumbers;