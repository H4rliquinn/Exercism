export default class Words{
    count(phrase:string):object{
        let wordArray:string[]=phrase.split(' ');
        let retVal:any={};
        for (let x in wordArray){
            console.log("WORD:",wordArray[x]);
            if (wordArray[x] in retVal){
                retVal[wordArray[x]]+=1;
            } else {
                retVal[wordArray[x]]=1;
            }
        }
        return new Map(Object.entries(retVal))
   } 
}

// let wrd=new Words();
// wrd.count('thing one');