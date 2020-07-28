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

        return str;        
    }
}

export default RunLengthEncoding;