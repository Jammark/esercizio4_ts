var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Abbigliamento } from "./abbigliamento.js";
function loadData() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('./assets/res/Abbigliamento.json');
        if (response.ok) {
            let data = yield response.json();
            console.table(data);
            data.map((element) => new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo)).forEach((element) => {
                console.log(element.descrizione());
                let container = document.getElementById('container');
                if (container) {
                    container.innerHTML += element.htmlElement();
                }
            });
        }
        else {
            console.log('Error: ');
            console.table(response);
        }
    });
}
loadData();
