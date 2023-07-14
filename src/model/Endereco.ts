import { makeAutoObservable } from "mobx";

export class Endereco {
   cep?: string;
   rua: string;
   numero: string;
   complemento: string;
   bairro: string;
   cidade: string;
   estado: string;

  constructor(
    rua: string = "",
    numero: string = "",
    bairro: string = "",
    cidade: string = "",
    estado: string = "",
    cep: string = "",
    complemento: string = "",
  ) {

    this.complemento = complemento;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
    makeAutoObservable(this);
    
  }
  async enderecoPeloCep(cep: string) : Promise<any> {
    const cleancep = cep.split("-").join("");
  return  fetch(
      `https://viacep.com.br/ws/${cleancep[0] + cleancep[1]}/json/`
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
 
}
