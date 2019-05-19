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

    //Getter Only user
    public async getUser( id : string ){
        return this.result = await this.listActive.find( (user : any ) => user.id === id  )    
    }

    //Getter Users in Room
    public async getUsersInRooM( group : string ){
        return this.result = await this.listActive.filter( (user : any) =>{
            user.group === group
        })
    }

    //Process remove user
    public rmUser( id: string ){
        
        let _temp_ = this.getUser( id)

        this.listActive = this.listActive.filter( (user : any ) =>{
            return  user.id !== id
        })

        return _temp_
    }




}