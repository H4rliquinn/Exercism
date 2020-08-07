class ReverseString {
    static reverse( item:String ):string {
        let retVal:string="";

        for (let x in item){
            retVal=item[x]+retVal;
        }

        return retVal;
    }
}

export default ReverseString
