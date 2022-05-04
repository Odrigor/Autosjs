class agencia 
{
    nombre:string;
    tel:string;
    bank:string;
    constructor(nombre,tel,bank)
    {
        this.nombre = nombre;
        this.tel = tel;
        this.bank = bank;

    }
    AlquilerAutos(){
        return 'alquilando auto';
    }
}