export class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantità, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantità = quantità;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        return this.prezzoivainclusa * this.saldo / 100;
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
    descrizione() {
        return `        ----Capo d'abbigliamento----\n
        Id: ${this.id}\n
        Codice prodotto: ${this.codprod}\n
        Collezione: ${this.collezione}\n
        Nome Capo: ${this.capo}\n
        Modello: ${this.modello}\n
        Quantità: ${this.quantità}\n
        Colore: ${this.colore}\n
        Prezzo: ${this.prezzoivaesclusa}\n
        Disponibilità: ${this.disponibile}\n
        Saldo capo: ${this.getSaldoCapo()}\n
        Prezzo d'aquisto: ${this.getAcquistoCapo()}\n
        ------------------------------`;
    }
    htmlElement() {
        return `<div class="element">
        <h1>----Capo d'abbigliamento----</h1>\n
        <h2>Id: ${this.id}</h2>\n
        <h2>Codice prodotto: ${this.codprod}</h2>\n
        <h2>Collezione: ${this.collezione}</h2>\n
        <h2>Nome Capo: ${this.capo}</h2>\n
        <h2>Modello: ${this.modello}</h2>\n
        <h2>Quantità: ${this.quantità}</h2>\n
        <h2>Colore: ${this.colore}</h2>\n
        <h2>Prezzo: ${this.prezzoivaesclusa}</h2>\n
        <h2>Disponibilità: ${this.disponibile}</h2>\n
        <h1>Saldo capo: ${this.getSaldoCapo()}</h1>\n
        <h1>Prezzo d'aquisto: ${this.getAcquistoCapo()}</h1>\n
        </div>`;
    }
}
