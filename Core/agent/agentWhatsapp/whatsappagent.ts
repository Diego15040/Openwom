class whatsappAgent extends agent{
    noc: boolean
    

   constructor(noc: boolean, influence: number){
       noc=noc;
       super(influence);
   }


}

class whatsapp1 extends whatsappAgent{
    whatsapp: string
    constructor(whatsapp: string, noc: boolean, influence: number){
        whatsapp=whatsapp;
        super(noc, influence);
        
    }
    
}

