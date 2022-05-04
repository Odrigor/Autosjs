class cliente 
{
    id:string;
    datosbank:string;
    dir:string;
    tel:string;
    constructor(id,datosbank,dir,tel)
    {
        this.id = id;
        this.tel = tel;
        this.datosbank = datosbank;
        this.dir = dir

    }
    AlquilerAutos(){
        return 'alquilando auto';
    }
    reservacion(tel:string, online:boolean, presencia:boolean){
        return 'alquilando auto';
    }
}