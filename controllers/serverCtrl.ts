import { User } from "../models/user";


export class ServerCtrl {

    private listActive : User [] = []
    public result : any
    private userLoop: any
    private exp : any;

    constructor(){}

    public async addUser( user : User  ){
   
        this.result = await this.listActive.push( user  )
        console.log(` 
            this all users connected 
                ${ JSON.stringify( this.listActive) }
            ` )
        return user

    }

    public  updateUser( idx: string , usern: string  ){

        for(this.userLoop of this.listActive ){
           
            if( this.userLoop.id == idx ){
                this.userLoop.username =  usern
                break
            }
        }
        console.log('===========================')
        console.log('user updated', this.listActive )
    }

    //Users Connecteds
    public  getList(){
        return this.listActive.filter( user => user.username != 'non-username'  )
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