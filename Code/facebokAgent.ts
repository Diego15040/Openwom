class facebookAgent extends agent{
    participation: number;
    followers: number;
    

   constructor(participation: number,followers: number){
       participation=participation;
       followers=followers;
       super();
   }


}

class facebook1 extends facebookAgent{
    characteristicasone: string
    constructor(characteristicone: string, participation: number, followers: number){
        characteristicone=characteristicone;
        super(participation,followers);
        
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
