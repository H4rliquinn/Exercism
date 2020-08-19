function isLeapYear( n:number ):boolean {

    let year = {
        num: n,
        isDivisibleBy: function(int:number) {
            return this.num%int==0;
        },
        isNotDivisibleBy: function(int:number) {
            return this.num%int!=0;
        }
      }

    return year.isDivisibleBy(4) 
    && (year.isNotDivisibleBy(100) || year.isDivisibleBy(400));
}
export default isLeapYear