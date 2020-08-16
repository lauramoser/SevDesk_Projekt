
namespace Bitcoin {

    //Menü leiste 
    //Alle anderen divs werden gelöscht um nur die Kategorie anzuzeigen

    document.getElementById("dash")?.addEventListener("click", handlerLoeschen);
    document.getElementById("det")?.addEventListener("click", handlerLoeschen);
    document.getElementById("umr")?.addEventListener("click", handlerLoeschen);
    document.getElementById("dia")?.addEventListener("click", handlerLoeschen);

    //Startseite 
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

    let xmlHttp: XMLHttpRequest = new XMLHttpRequest();
    xmlHttp.open("GET", "https://blockchain.info/ticker", false );          //JSON mit einbezogen
    xmlHttp.send();

    export interface Waehrung {
        m15: number;
        last: number;
        buy: number;
        sell: number;
        symbol: Symbol;
    }
    let waehrung: Waehrung[];
    
    waehrung = <Waehrung[]>JSON.parse(xmlHttp.response);
    console.log(waehrung.USD.sell);                                     //Zugriff auf einzelne Arrays von Währungen
                                                                        //jedes Element hat ein eigenes Array
    for (let i: number = 0; i < waehrung.length; i++) {                 //waehrung.length undefined
    let ausgabe: HTMLDivElement = document.createElement("div");                   
    document.getElementById("dashboard")?.appendChild(ausgabe);                  
                                                                                           
    let text: HTMLParagraphElement = document.createElement("p");                       
    text.innerHTML = JSON.stringify(waehrung.USD); 
    ausgabe.appendChild(text);  
    }                                    
    
}

/*let myObj = JSON.parse(xmlHttp.responseText);
    console.log(myObj);
    console.log(myObj.USD);
    let myDataHTML = "";
    myDataHTML = "<table><tr><th>Währung</th><th>m15</th><th>last</th><th>buy</th><th>sell</th><th>symbole</th></tr>";
     
    for (let i: number = 0; i < myObj.length; i++) {
        let m15 = myObj[i].m15;
        let last = myObj[i].last;
        let buy = myObj[i].buy;
        let sell = myObj[i].sell;
        let symbole = myObj[i].symbole;

        myDataHTML = myDataHTML + "<table><tr><th>Währung</th><th> " + m15 + "</th><th>" + last + "</th><th>" + buy + "</th><th>" + sell + "</th><th>symbole</th></tr>";
    }
    
    myDataHTML = myDataHTML + "</table>";
    document.getElementById("dashboard").innerHTML = myDataHTML;
    
    xmlHttp.send();*/