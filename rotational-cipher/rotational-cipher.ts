import { strict } from "assert";
import { stringify } from "querystring";

export default class RotationalCipher {
    public static rotate(org:string,rot:number):string{
        let retVal:string="";
        for (let x=0;x<org.length;x++){
            let currCode:number=org.charCodeAt(x);
            
            if (currCode>=65 && currCode<=90){
                currCode+=rot%26;
                if (currCode>90){
                    currCode-=26
                }
            }else if (currCode>=97 && currCode<=122){
                currCode+=rot%26;
                if (currCode>122){
                    currCode-=26
                }
                
            }
            retVal+=String.fromCharCode(currCode)
        }
        return retVal;
    }

}
