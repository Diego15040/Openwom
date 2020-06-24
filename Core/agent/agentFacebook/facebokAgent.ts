class facebookAgent extends agent{

    //lectura puede ser un numero determinado mayor que 1 menos la probabilidad de lectura
    //retweet puede ser un numero determinado mayor que 1 menos una influencia 
    participation: number;
    
    

   constructor(participation: number, influence: number){
       participation=participation;
       super(influence);
   }


}

class facebook1 extends facebookAgent{
    characteristicasone: string
    constructor(characteristicone: string, participation: number, influence: number){
        characteristicone=characteristicone;
        super(participation, influence);
        
    }
    
}

class facebook2 extends facebookAgent{
    charasteric: string
    constructor(characteristic: string, participation, followers: number){
        characteristic=characteristic;
        super(participation, followers);
    }
}

class facebook3 extends facebookAgent{
        constructor(participation, followers: number){
            super(participation, followers);
        }
    

}
