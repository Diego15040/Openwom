class twitterAgent extends agent{

    participation: number;
    seed: boolean;
    readProbability: number;
    shareProbability: number;
    retweetProbability: number;
    wear: number;
    //message
    //state received-no received ; retweeted-no retweteed?

    
    
        

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
    characteristic: string
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