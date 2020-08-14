export default class Triangle {
    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind():string {
        if (this.sides.length!=3){
            throw "Invalid number of sides for a triangle";
        }
        let a,b,c:number;
        a=this.sides[0];
        b=this.sides[1];
        c=this.sides[2];
        if (a<=0||b<=0||c<=0){  
            throw "All sides must be positive numbers";
        } else if (a+b<c||b+c<a||a+c<b){
            throw "Triangle inequality violation"
        }
        
        if (a==b && b==c){
            return "equilateral";
        } else if (a==b || b==c || a==c){
            return "isosceles"
        } else if ( a!=b && b!=c && a!=c){
            return "scalene"
        } else {
            return ""
        }
    }
}