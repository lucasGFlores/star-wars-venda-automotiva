import { makeAutoObservable } from "mobx";
class Automovel {
  fabrica: string;
  nomeDaMarca: string;
  modelo: string;
  tipo: string;
  velocidade: number;
  constructor(
    fabrica: string,
    nomeDaMarca: string,
    modelo: string,
    tipo: string,
    velocidade: number
  ) {
    this.fabrica = fabrica;
    this.nomeDaMarca = nomeDaMarca;
    this.modelo = modelo;
    this.tipo = tipo;
    this.velocidade = velocidade;

    makeAutoObservable(this);
  }
}
class Store {
  automoveis: Automovel[] = [];
  filtro: string = "";
  constructor() {
    makeAutoObservable(this);
  }
  adicionarAutomovel(auto : Automovel) : void {
    this.automoveis.push(auto)
  }
  buscarAutomoveis () : Automovel[] {
    return this.automoveis.filter(auto => auto.nomeDaMarca === this.filtro)
  }
  
  set filtroAutomovel(filtro: string) {
    this.filtro = filtro;
  }


}
const store = new Store();
export default store;
