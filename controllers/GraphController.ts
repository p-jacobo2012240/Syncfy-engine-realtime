import { Response, Request } from 'express'

export class GraphCtrl{

    private static _getInstance : GraphCtrl

    //Adding Singleton
    public static get getInstance(){
        return this._getInstance || ( this._getInstance = new this ) 
    }
    
    
    //Basics Methods



}