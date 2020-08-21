import { strict } from "assert";
import { stringify } from "querystring";

export default class RotationalCipher {
    public static rotate(org:string,rot:number):string{
        let retVal:string="";
        for (let x=0;x<org.length;x++){    
            retVal+=String.fromCharCode(org.charCodeAt(x)+rot%26);
        }
        return retVal;
    }

}
