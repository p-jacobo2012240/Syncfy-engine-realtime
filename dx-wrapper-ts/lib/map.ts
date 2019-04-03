

export default class Maps{

    //son variables independientes sin ser array

    private coords: any[] = [ { lat: 14.111 , lng: -90.1212}] 

    constructor(){}

    getCoords(){

        return this.coords
    }

    addPosition( obj : any ){

        this.coords.push( obj )

        return this.coords
    }

}