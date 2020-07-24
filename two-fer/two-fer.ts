class TwoFer {
  public static twoFer(a?:string): string {
    let retVal:string;
    let name:string='you';

    if (a){
      name=a;
    }
    retVal=`One for ${name}, one for me.`;
    return retVal;
  }
}

export default TwoFer
