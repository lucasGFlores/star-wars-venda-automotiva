import { makeAutoObservable } from "mobx";

class ControlerForm {
    tela: number;
    
    constructor() {
        this.tela = 0;
        makeAutoObservable(this);
    }
    proximaTela() {
        this.tela++;
    }

    }
    const controlerForm = new ControlerForm();
export default controlerForm;