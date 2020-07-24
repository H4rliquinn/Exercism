export default class Words{
    count(phrase:string):object{
        let wordArray:string[]=phrase.trim().split(/\s+/);
        let retVal:any={};
        for (let x in wordArray){
            let currWord:string=wordArray[x].toLowerCase();
            if (retVal.hasOwnProperty(currWord)){
                retVal[currWord]+=1;
            } else {
                retVal[currWord]=1;
            }
        }
        return new Map(Object.entries(retVal))
   } 
}