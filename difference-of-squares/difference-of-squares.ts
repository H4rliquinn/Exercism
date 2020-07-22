class Squares{
    private sum=0;
    private sqares=0;
    private diff=0;

    constructor(private num:number=0){
        if (num>0){
            for (let x=1;x<=num;x++){
                console.log(x);
            }
        }
    }
    squareOfSum(){

    }
    sumOfSquares(){

    }
    difference(){

    }
}

const squares = new Squares(5);