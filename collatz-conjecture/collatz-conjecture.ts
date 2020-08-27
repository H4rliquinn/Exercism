class CollatzConjecture {
    static steps( num:number ):number {
        let curVal:number=num;
        let count:number=0;

        if (curVal<2){
            return count;
        }
        
        while (curVal!=1){
            if (curVal%2==0){
                curVal/=2;
            } else {
                curVal=(curVal*3)+1;
            }
            count++;
        }

        return count;
    }
}

export default CollatzConjecture