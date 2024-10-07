import { vehiculo } from "./vehiculo";

export class Moto extends vehiculo{
    marca : string;
    modelo : string;
    anio : number;
    color : string;
    constructor(marca:string, modelo:string, anio:number, color:string) {
        super(marca,modelo);
        this.anio = anio;
        this.color=color;

    }

    public getMarca (): string{
        return this.marca
    }

    public getModelo (): string{
        return this.modelo
    }

    public getAnio (): number{
        return this.anio
    }

    public getColor (): string{
        return this.color
    }

    
    public setMarca (marca : string) : void {
        this.marca = marca;
    }

    public setModelo (modelo : string) : void {
        this.modelo = modelo;
    }
    
    public setAnio (anio : number) : void {
        this.anio = anio;
    }

    public setColor (color : string) : void {
        this.color = color;
    }
    
    

}