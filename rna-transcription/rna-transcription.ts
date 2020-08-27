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
            if (!complements[char]){
                throw new Error("Invalid input DNA.");
            }
            retVal+=complements[char];
        }

        return retVal;
    }
}

export default Transcriptor