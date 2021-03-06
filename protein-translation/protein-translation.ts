import { compileFunction } from "vm";

type CODON = "AUG"|"UUU"|"UUC"|"UUA"|"UUG"|"UCU"|"UCC"|"UCA"|
    "UCG"|"UAU"|"UAC"|"UGU"|"UGC"|"UGG"|"UAA"|"UAG"|"UGA";

type PPT = "Methionine"|"Phenylalanine"|"Leucine"|"Serine"|"Tyrosine"|
    "Cysteine"|"Tryptophan"|"STOP";

let complements:Record<CODON,PPT>={
    "AUG":"Methionine",
    "UUU":"Phenylalanine","UUC":"Phenylalanine",
    "UUA":"Leucine","UUG":"Leucine",
    "UCU":"Serine","UCC":"Serine","UCA":"Serine","UCG":"Serine",
    "UAU":"Tyrosine","UAC":"Tyrosine",
    "UGU":"Cysteine","UGC":"Cysteine",
    "UGG":"Tryptophan",
    "UAA":"STOP","UAG":"STOP","UGA":"STOP"
}

function isCODON(a:string):a is CODON{
    // console.log(a,complements[a as CODON]);
    return (complements[a as CODON]!==undefined)
}

class ProteinTranslation {

    static proteins( rna:string ):string[] {
        if (rna.length%3!=0){throw new Error("Invalid input RNA.")}
        let retVal:string[]=[];

        for(let x=0;x<rna.length;x=x+3){
            // console.log("LOOP",x,x+3,rna.substr(x,3));
            let aa=rna.substr(x,3);
            if (isCODON(aa)){
                if (complements[aa]!="STOP"){
                    retVal.push(complements[aa]);
                } else {
                    break;
                }
            } else {
                throw new Error("Invalid input DNA.");  
            }
        }
        return retVal;
    }
}

export default ProteinTranslation
