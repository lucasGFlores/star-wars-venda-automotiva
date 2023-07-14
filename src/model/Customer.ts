import { makeAutoObservable } from "mobx";
import {Endereco} from "./Endereco";
export class Customer {
  name: string;
  email: string;
  telefone: string;
  cpfcnpj: string;
  endereco!: Endereco;
  constructor(
    name: string = "",
    email: string = "",
    telefone: string = "",
    cpfcnpj: string = ""
  ) {
    this.name = name;
    this.email = email;
    this.telefone = telefone;
    this.cpfcnpj = cpfcnpj;
    makeAutoObservable(this);
  }
  setEndereco(endereco: Endereco) {
    this.endereco = endereco;
  }
}
