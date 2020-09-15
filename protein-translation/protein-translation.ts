type CODON = "AUG"|"UUU"|"UUC"|"UUA"|"UUG"|"UCU"|"UCC"|"UCA"|
"UCG"|"UAU"|"UAC"|"UGU"|"UGC"|"UGG"|"UAA"|"UAG"|"UGA";

let complements:Record<CODON,String>={
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


    static proteins( /* Parameters go here */ ) {
        // Your code here
    }
}

export default ProteinTranslation
