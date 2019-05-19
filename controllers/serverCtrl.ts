import { User } from "../models/user";


export class ServerCtrl {

    private listActive : User [] = []
    public result : any
    private userLoop: any

    constructor(){

    }


    public async addUser( user : User  ){

        this.result = await this.listActive.push( user  )
        return user

    }

    public  updateUser( id: string , username: string  ){

        
        for(this.userLoop of this.listActive ){

            if( this.userLoop.id === id ){
                this.userLoop.username =  username
                break
            }


            console.log('user updated', this.listActive )

        }
    }

    //Users Connecteds
    public async getList(){
        return  this.result = await this.listActive
    }

    public async getUser( id : string ){
        return this.result = await this.listActive.find( (user : any ) => user.id === id  )    
    }





}