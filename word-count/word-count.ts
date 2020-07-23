export default class Words{
    count(phrase:string):object{
        let wordArray:string[]=phrase.split(' ');
        let retVal:any={};
        for (let x in wordArray){
            // console.log("WORD:",wordArray[x]);
            let currWord:string=wordArray[x].toLowerCase();
            if (currWord in retVal){
                retVal[currWord]+=1;
            } else {
                retVal[currWord]=1;
            }
        }
        return new Map(Object.entries(retVal))
   } 
}