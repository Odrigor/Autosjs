class reservacion 
{
    modeloAuto:string;
    marca:string;
    matricula:string;
    color:string;
    disponibilidad:string;
    constructor(modeloAuto,marca,dir,tel,disponibilidad)
    {
        this.modeloAuto = modeloAuto;
        this.marca = marca;
        this.color = tel;
        this.matricula = dir
        this.disponibilidad = disponibilidad;
    }
    Alquiler(time:string){
        return 'alquilando auto';
    }
    entrega(time:string){
        return 'alquilando auto';
    }
}