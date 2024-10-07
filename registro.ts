import { Camion } from "./camion";
import { Auto } from "./auto";
import { Moto } from "./moto";


export class RegistroAutomotor {
    private numeroRegistro: number;
    private listaAutos: Auto[];
    private listaMotos: Moto[];
    private listaCamiones: Camion[];

    constructor(numeroRegistro: number) {
        this.numeroRegistro = numeroRegistro;
        this.listaAutos = [];
        this.listaMotos = [];
        this.listaCamiones = [];
    }

    public getNumeroRegistro(): number {
        return this.numeroRegistro;
    }
    public getListaAutos(): Auto[] {
        const copiaAutos: Auto[] = this.listaAutos.map(aut => ({ ...aut }) as Auto);
        return copiaAutos;
    }
    public getListaMotos(): Moto[] {
        const copiaMotos: Moto[] = this.listaMotos.map(mot => ({ ...mot }) as Moto);
        return copiaMotos;
    }
    public getListaCamiones(): Camion[] {
        const copiaCamiones: Camion[] = this.listaCamiones.map(cam => ({ ...cam }) as Camion);
        return copiaCamiones;
    }

    public setNumeroRegistro(numeroRegistro: number): void {
        this.numeroRegistro = numeroRegistro;
    }
    public setListaAutos(listaAutos: Auto[]): void {
        this.listaAutos = listaAutos;
    }
    public setListaMotos(listaMotos: Moto[]): void {
        this.listaMotos = listaMotos;
    }
    public setListaCamiones(listaCamiones: Camion[]): void {
        this.listaCamiones = listaCamiones;
    }

    public agregarAuto(marca: string, modelo: string, anio: number, color: string): void {
        let autoNuevo: Auto = new Auto(marca, modelo, anio, color,);
        if (!this.listaAutos.some(autoNuevo =>
            autoNuevo.getMarca() == marca &&
            autoNuevo.getModelo() == modelo &&
            autoNuevo.getAnio() == anio &&
            autoNuevo.getColor() == color)) {
            this.listaAutos.push(autoNuevo);
        }
    }

    public agregarMoto(marca: string, modelo: string, anio: number, color: string): void {
        let motoNueva: Moto = new Moto(marca, modelo, anio, color);
        if (!this.listaMotos.some(motoNueva =>
            motoNueva.getMarca() == marca &&
            motoNueva.getModelo() == modelo &&
            motoNueva.getAnio() == anio &&
            motoNueva.getColor() == color)) {
            this.listaMotos.push(motoNueva);
        }
    }

    public agregarCamion(marca: string, modelo: string, anio: number, color: string): void {
        let camionNuevo: Camion = new Camion(marca, modelo, anio, color);
        if (!this.listaCamiones.some(camionNuevo =>
            camionNuevo.getMarca() == marca &&
            camionNuevo.getModelo() == modelo &&
            camionNuevo.getAnio() == anio &&
            camionNuevo.getColor() == color)) {
            this.listaCamiones.push(camionNuevo);
        }
    }

    public modificarColorAuto(auto: Auto, marca: string, modelo: string, anio: number, nuevoColor: string): void {
        const autoAModificar = this.listaAutos.find((auto) =>
            auto.marca === marca &&
            auto.modelo === modelo &&
            auto.anio === anio
        );
        auto.setCambiarColor(nuevoColor);
        if (autoAModificar) {
            this.modificarColorAuto(autoAModificar, marca, modelo, anio, nuevoColor);
        }
    }

    public eliminarMoto(moto: Moto): void {
        if (moto != undefined && this.listaMotos.includes(moto)) {
            const posMoto: number = this.listaMotos.indexOf(moto);
            this.listaMotos.slice(posMoto, 1);
        }
    }

}