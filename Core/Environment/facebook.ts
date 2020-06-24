import {environmentFactory} from './environmentFactory';

class facebook extends environmentFactory{

    createRule(){
        console.log('createRule');
    }

    createAction(){
        console.log('createAction');
    }


    getAction(): any{
        console.log('action');
    }

    getLectureProbability(): any{
        console.log('lecture');
    }

    getVariation(): any{
        console.log('variation');
    }

    getNetwork(): any{
        console.log('network');
    }


}