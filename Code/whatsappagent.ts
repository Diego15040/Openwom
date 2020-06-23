class whatsappAgent extends agent{
    noc: boolean
    

   constructor(noc: boolean){
       noc=noc;
       super();
   }


}

class whatsapp1 extends whatsappAgent{
    whatsapp: string
    constructor(whatsapp: string, noc: boolean){
        whatsapp=whatsapp;
        super(noc);
        
    }
    
}

