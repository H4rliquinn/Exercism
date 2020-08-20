function makeYearObj(num:number){
 return {
    num: num,
    isDivisibleBy: function(int:number) {
        return this.num%int==0;
    }
  }
}

function isLeapYear( n:number ):boolean {

    let year = makeYearObj(n);

    return year.isDivisibleBy(4) 
    && (!year.isDivisibleBy(100) || year.isDivisibleBy(400));
}
export default isLeapYear