import { stringify } from "querystring";

type DNA = "G"|"C"|"T"|"A";
type RNA = "C"|"G"|"A"|"U";

class Transcriptor {
    toRna( dna:string ):string {
        let retVal:string="";
        let complements:Record<DNA,RNA>={
            'G':'C',
            'C':'G',
            'T':'A',
            'A':'U'
        }

        for(let char of dna){
            if (!complements[char as DNA]){
                throw new Error("Invalid input DNA.");
            }
            retVal+=complements[char as DNA];
        }

        return retVal;
    }
}

export default Transcriptor