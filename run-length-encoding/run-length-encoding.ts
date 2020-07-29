class RunLengthEncoding{
    public static encode(str:string):string{
        if (str.length==0){
            return str;
        }

        let newStr:string[]=str.split('');
        let retVal:string='';
        let current:string='';
        let currCount:number=0;

        for (let x=0;x<newStr.length;x++){
            if (newStr[x]==current){
                currCount+=1;
            } else if (current==''){
                current=newStr[x];
                currCount=1;
            } else {
                if (currCount>1){
                    retVal+=currCount+current;
                } else {
                    retVal+=current;
                }
                current=newStr[x];
                currCount=1;
            }
        }

        if (currCount>1){
            retVal+=currCount+current;
        } else {
            retVal+=current;
        }
        

        return retVal;
    }
    public static decode(str:string):string{
        if (str.length==0){
            return str;
        }

        let newStr:string[]=str.match(/\d*[A-Za-z]/g)||[];
        let retVal:string='';

        for (let x=0;x<newStr.length;x++){
            let mult:number=1;
            let char:string='';
            console.log("X:"+ newStr[x]);
            if (newStr[x].length>1){
                mult=parseInt(newStr[x].slice(0,parseInt(newStr[x])-1));
                char=newStr[x].slice(-1);
            } else {
                char=newStr[x];
            }
            console.log(mult+" "+char);
            retVal+=char.repeat(mult);
        }

        return retVal;        
    }
}

export default RunLengthEncoding;