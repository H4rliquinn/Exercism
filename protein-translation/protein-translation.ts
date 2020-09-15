type CODON = "AUG"|"UUU"|"UUC"|"UUA"|"UUG"|"UCU"|"UCC"|"UCA"|
"UCG"|"UAU"|"UAC"|"UGU"|"UGC"|"UGG"|"UAA"|"UAG"|"UGA";

let complements:Record<CODON,string>={
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
    return (complements[a as CODON]!==undefined)
}

class ProteinTranslation {

    static proteins( rna:string ):string[] {
        if (rna.length%3!=0){throw new Error("Invalid input RNA.")}
        let retVal:string[]=[];

        for(let x=0;x<rna.length;x=x+3){
            let aa=rna.substr(x,x+3);
            if (isCODON(aa)){
                retVal.push(complements[aa]);
            } else {
                throw new Error("Invalid input DNA.");  
            }
        }
        return retVal;
    }
}

export default ProteinTranslation
