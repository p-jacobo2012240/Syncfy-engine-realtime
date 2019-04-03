

export default class Maps{

    //son variables independientes sin ser array

    private lat = 14.111; 
    private lng = -90.222

    private coords: any[] = [ {}] 

    constructor(){}

    getCoords(){

        return [ { lat: this.lat, lng: this.lng } ]
    }

    addPosition( lat: any, lng : any ){

        if( lat && lng ){

            this.lat  = lat
            this.lng = lng

            return [ { lat: this.lat, lng: this.lng } ]
        }
        
    }

}