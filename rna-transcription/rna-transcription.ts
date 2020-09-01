import { stringify } from "querystring";

type DNA = "G"|"C"|"T"|"A";
type RNA = "C"|"G"|"A"|"U";

function isDNA(a:string):a is DNA{
    return (a=="G"||a=="C"||a=="T"||a=="A")
}


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
            if (isDNA(char)){
                retVal+=complements[char];
            } else {
                throw new Error("Invalid input DNA.");  
            }
        }
        return retVal;
    }
}

export default Transcriptor