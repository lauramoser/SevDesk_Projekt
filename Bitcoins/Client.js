"use strict";
var Bitcoin;
(function (Bitcoin) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://blockchain.info/ticker", false);
    xmlHttp.send(null);
    console.log(JSON.parse(xmlHttp.response));
    let waehrung;
    waehrung = JSON.parse(xmlHttp.response);
    //let waehrungEinzeln: string = JSON.stringify(waehrung)
    console.log("waehrung: " + JSON.stringify(waehrung.RUB));
    for (let i = 0; i < waehrung.length; i++) {
        let ausgabe = waehrung[i];
        let chatnach = document.createElement("div"); //ein div erstellt
        document.getElementById("nachrichtenID")?.appendChild(chatnach); //div in das Ausgabenfeld gesetzt
        //besser damit arbeiten zu können
        let text = document.createElement("p"); //p erstellt
        text.innerHTML = ausgabe; //aus der Augabe hab ich dann ein p (Text) draus gemacht
        chatnach.appendChild(text); //dieser Text ist dann ein Kind vom div
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
    function handlerLoeschen(_event) {
        let target = _event.target;
        let menue = target.getAttribute("id");
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
})(Bitcoin || (Bitcoin = {}));
//# sourceMappingURL=Client.js.map