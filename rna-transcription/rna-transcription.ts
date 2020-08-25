import { stringify } from "querystring";

class Transcriptor {
    toRna( dna:string ):string {
        let retVal:string="";
        let complements:Record<string,string>={
            'G':'C',
            'C':'G',
            'T':'A',
            'A':'U'
        }

        for(let char of dna){
            retVal+=complements[char];
        }

        return retVal;
    }
}

export default Transcriptor