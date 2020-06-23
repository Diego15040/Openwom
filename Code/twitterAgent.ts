class twitterAgent extends agent{
    participation: number;
    
    
    

   constructor(participation: number,followers: number){
       participation=participation;
       super(followers);
   }


}


class hub extends facebookAgent{
    characteristicasone: string
    constructor(characteristicone: string, participation: number, followers: number){
        characteristicone=characteristicone;
        super(participation,followers);
        
    }
    
}

class opinionleader extends facebookAgent{
    charasteric: string
    constructor(characteristic: string, participation, followers: number){
         characteristic=characteristic;
        super(participation, followers);
    }
}

class averageUser extends twitterAgent{
        constructor(participation, followers: number){
            super(participation, followers);
        }
    

}