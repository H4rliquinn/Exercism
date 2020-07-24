class ArmstrongNumbers{
    public static isArmstrongNumber(num:number):boolean{
        let numLength:number=num.toString().length;
        if (numLength<2){
            return true;
        } else if (numLength==2){
            return false;
        }else{
            let test:number=num.toString().split('').map((v)=> {
                return Math.pow(parseInt(v), numLength)
              }).reduce((a, v)=> {
                return a + v
              }, 0)
            if (test==num){
                return true;
            } else{
                return false;
            }
        }
    } 
}

export default ArmstrongNumbers;