import { stringify } from "querystring";

type DNA = "G"|"C"|"T"|"A";
type RNA = "C"|"G"|"A"|"U";

let complements:Record<DNA,RNA>={
    'G':'C',
    'C':'G',
    'T':'A',
    'A':'U'
}

function isDNA(a:string):a is DNA{
    return (complements[a as DNA]!==undefined)
}


class Transcriptor {
    toRna( dna:string ):string {
        let retVal:string="";

        // for (let x of Object.keys(complements)){
        //     let regX=new RegExp(x,"g");
        //     console.log(x,regX);
        //     dna=dna.replace(regX,complements[x as DNA])
        // }

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