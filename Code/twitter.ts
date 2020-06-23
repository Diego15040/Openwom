import {environmentFactory} from './environmentFactory';

export class twitter extends environmentFactory{


    retweetProbability: number;
    wear: number;





    getAction(){
        console.log('action');
    }

    getLectureProbability(): any{
        console.log('lecture');
    }

    getVariation(){
        console.log('variation');
    }

    getNetwork(): any{
        console.log('network');
    }

    getRetweetProbability(){
        return this.retweetProbability;
    }

    getWear(){
        return this.wear;
    }

    setWear(){
        return this.wear;
    }






}
