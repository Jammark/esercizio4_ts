import { Abbigliamento } from "./abbigliamento.js";
async function loadData():Promise<any>{
    let response = await fetch('./assets/res/Abbigliamento.json');
    if(response.ok){
    let data = await response.json();
    console.table(data);
    data.map((element:any) => new Abbigliamento(
        element.id,
        element.codprod,
        element.collezione,
        element.capo,
        element.modello,
        element.quantita,
        element.colore,
        element.prezzoivaesclusa,
        element.prezzoivainclusa,
        element.disponibile,
        element.saldo
       
    )).forEach((element:Abbigliamento) => {
        console.log(element.descrizione());
        let container = document.getElementById('container') as HTMLElement | null;
        if(container){
            container.innerHTML += element.htmlElement();
        }
    });
}else{
    console.log('Error: ');
    console.table(response);
}
}

loadData();