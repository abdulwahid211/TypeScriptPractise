export const App = () =>{
    return <h1> Typescrpt testing </h1>;
}


class Car {
   //field 
  private engine:string; 
 
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  

   //function 
   disp():void { 
      console.log("Engine is  :   "+this.engine) 
   } 
}