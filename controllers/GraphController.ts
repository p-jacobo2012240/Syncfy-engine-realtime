import { Response, Request } from 'express'

export class GraphCtrl{

    private static instance : GraphCtrl

    public static get getInstance(){
        if( this.instance == null ){
            this.instance = new this
        }
        return this.instance
    }
    
    
    //Basics Methods
    //builddd



}