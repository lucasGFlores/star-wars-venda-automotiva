import { makeAutoObservable } from "mobx";
class Automovel {
  fabricante: string;
  nome: string;
  modelo: string;
  tipo: string;
  velocidade: string;
  preco:string;
  url:string;
  constructor(
    fabrica: string,
    nome: string,
    modelo: string,
    tipo: string,
    velocidade: string,
  preco:string,
  url:string

  ) {
    this.fabricante = fabrica;
    this.nome = nome;
    this.modelo = modelo;
    this.tipo = tipo;
    this.velocidade = velocidade;
    this.preco = preco;
    this.url = url;

    makeAutoObservable(this);
  }
}
class Store {
  automoveis: Automovel[] = [];
  filtro: string = "";
  constructor() {
    makeAutoObservable(this);
  }
  adicionarAutomovel(auto: Automovel): void {
    this.automoveis.push(auto);
  }
  buscarAutomoveis(): Automovel[] {
    return this.automoveis.filter((auto) => auto.nome.toLowerCase().includes(this.filtro));
  }

  set filtroAutomovel(filtro: string) {
    this.filtro = filtro;
  }
  removerDuplicatas(){
    this.automoveis = this.automoveis.filter((auto, index, self) =>
      index === self.findIndex((t) => (
        t.nome === auto.nome
      ))
    )
  }
  async fetherAutomovel() {
    const auto = await fetch("https://swapi.dev/api/vehicles/")
      .then((res) => res.json())
      .then((res) => res.results);
    auto.forEach((auto: any) => {
      this.adicionarAutomovel(
        new Automovel(
          auto.manufacturer,
          auto.name,
          auto.model,
          auto.vehicle_class,
          auto.max_atmosphering_speed,
          auto.cost_in_credits,
          auto.url
        )
      );
    });
    this.removerDuplicatas();
  }
  componentWillMount() {
    store.fetherAutomovel();
  }
}
const store = new Store();
export default  store;
