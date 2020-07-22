export default class Squares{
    public squareOfSum:number=0;
    public sumOfSquares:number=0;
    public difference:number=0;

    constructor(private num:number=0){
        if (num>0){
            for (let x=1;x<=num;x++){
                this.squareOfSum+=x;
                this.sumOfSquares+=x**2;
            }
            this.squareOfSum=this.squareOfSum**2;
            this.difference=this.squareOfSum-this.sumOfSquares;
        }
    }
}