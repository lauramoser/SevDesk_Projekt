namespace Bitcoin {

    let xmlHttp: XMLHttpRequest = new XMLHttpRequest();
    xmlHttp.open("GET", "https://blockchain.info/ticker", false );
    xmlHttp.send(null);
    console.log(JSON.parse(xmlHttp.response));

    export interface Waehrung {
        m15: number;
        last: number;
        buy: number;
        sell: number;
        symbol: Symbol;
    }
    let waehrung: Waehrung[];
    
    waehrung = <Waehrung[]>JSON.parse(xmlHttp.response);
    //let waehrungEinzeln: string = JSON.stringify(waehrung)
    console.log("waehrung: " + JSON.stringify(waehrung.RUB));
    
    for (let i: number = 0; i < waehrung.length; i++) {
        let ausgabe: string = waehrung[i];   
        let chatnach: HTMLDivElement = document.createElement("div");                       //ein div erstellt
        document.getElementById("nachrichtenID")?.appendChild(chatnach);                    //div in das Ausgabenfeld gesetzt
                                                                                            //besser damit arbeiten zu können
        let text: HTMLParagraphElement = document.createElement("p");                       //p erstellt
        text.innerHTML = ausgabe;                                                           //aus der Augabe hab ich dann ein p (Text) draus gemacht
        chatnach.appendChild(text);                                                         //dieser Text ist dann ein Kind vom div
        }
  


    //Menü leiste

    document.getElementById("dash")?.addEventListener("click", handlerLoeschen);
    document.getElementById("det")?.addEventListener("click", handlerLoeschen);
    document.getElementById("umr")?.addEventListener("click", handlerLoeschen);
    document.getElementById("dia")?.addEventListener("click", handlerLoeschen);

    document.getElementById("dashboard")?.setAttribute("style", "display : block");
    document.getElementById("umrechner")?.setAttribute("style", "display : none");
    document.getElementById("diagramm")?.setAttribute("style", "display : none");
    document.getElementById("details")?.setAttribute("style", "display : none");
  
    function handlerLoeschen(_event: Event): void {
           let target: HTMLElement = (<HTMLElement>_event.target);
           let menue: string = target.getAttribute("id")!;
        
           if (menue == "det") {
               document.getElementById("dashboard")?.setAttribute("style", "display : none");
               document.getElementById("umrechner")?.setAttribute("style", "display : none");
               document.getElementById("diagramm")?.setAttribute("style", "display : none");
               document.getElementById("details")?.setAttribute("style", "display : block");
           }
           if (menue == "dash") {
            document.getElementById("dashboard")?.setAttribute("style", "display : block");
            document.getElementById("umrechner")?.setAttribute("style", "display : none");
            document.getElementById("diagramm")?.setAttribute("style", "display : none");
            document.getElementById("details")?.setAttribute("style", "display : none");
           }
           if (menue == "umr") {
            document.getElementById("dashboard")?.setAttribute("style", "display : none");
            document.getElementById("umrechner")?.setAttribute("style", "display : block");
            document.getElementById("diagramm")?.setAttribute("style", "display : none");
            document.getElementById("details")?.setAttribute("style", "display : none");
           }
           if (menue == "dia") {
            document.getElementById("dashboard")?.setAttribute("style", "display : none");
            document.getElementById("umrechner")?.setAttribute("style", "display : none");
            document.getElementById("diagramm")?.setAttribute("style", "display : block");
            document.getElementById("details")?.setAttribute("style", "display : none");
           }

       }
}
