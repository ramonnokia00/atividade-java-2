function descobrirNome() {
    let diaEscolhido = document.getElementById("dia").value;
    let mesEscolhido = document.getElementById("mes").value;
    

    let Nomedabanda = "";
    let NomedoDia = "";

    switch (mesEscolhido) {
        case "Jan":
            Nomedabanda = "Capirotos";
            break;
        case "Fev":
            Nomedabanda = "Lendarios";
            break;
        case "Mar":
            Nomedabanda = "Soldados";
            break;
        case "Abr":
            Nomedabanda = "Faroeste";
            break;
        case "Mai":
            Nomedabanda = "Imperadores";
            break;
        case "Jun":
            Nomedabanda = "Fodões";
            break;
        case "Jul":
            Nomedabanda = "Fanfarrões";
            break;
        case "Ago":
            Nomedabanda = "Baderneiros";
            break;
        case "Set":
            Nomedabanda = "Pertubados";
            break;
        case "Out":
            Nomedabanda = "Aliens";
            break;
        case "Nov":
            Nomedabanda = "Revoltados";
            break;
        case "Dez":
            Nomedabanda = "Gigantes";
            break;
    }
    switch (diaEscolhido) {
        case "1":
            NomedoDia = "Do Espaço";
            break;

        case "2":
            NomedoDia = "Do Inferno";
            break;

        case "3":
            NomedoDia = "Da Galáxia";
            break;

        case "4":
            NomedoDia = "Do Fazenda";
            break;

        case "5":
            NomedoDia = "Do Diabo";
            break;

        case "6":
            NomedoDia = "Do Japão";
            break;

        case "7":
            NomedoDia = "Das Trevosas";
            break;

        case "8":
            NomedoDia = "Do Fundão";
            break;

        case "9":
            NomedoDia = "Dos Inluminatis";
            break;

        case "10":
            NomedoDia = "De Copacabana";
            break;

        case "11":
            NomedoDia = "Das Trevas";
            break;

        case "12":
            NomedoDia = "Caboclos";
            break;

        case "13":
            NomedoDia = "Da Muralha";
            break;

        case "14":
            NomedoDia = "Voadores";
            break;

        case "15":
            NomedoDia = "Do Tempo ";
            break;

        case "16":
            NomedoDia = "Da Esperança E A Ultima Que Morre";
            break;

        case "17":
            NomedoDia = "Da Morte";
            break;

        case "18":
            NomedoDia = "Abençoados";
            break;

        case "19":
            NomedoDia = "Infernais";
            break;

        case "20":
            NomedoDia = "Maloqueiros";
            break;

        case "21":
            NomedoDia = "DOs 7 Pecados Capitais";
            break;

        case "22":
            NomedoDia = "Mumificados";
            break;

        case "23":
            NomedoDia = "Amigos Do Chimbinha";
            break;

        case "24":
            NomedoDia = "Posers";
            break;

        case "25":
            NomedoDia = "Do Mosh Pit";
            break;

        case "26":
            NomedoDia = "Valentões";
            break;

        case "27":
            NomedoDia = "Da Ilha Do Demonio";
            break;

        case "28":
            NomedoDia = "Do Segundo Sol";
            break;

        case "29":
            NomedoDia = "Rebeldes Sem Causa";
            break;

        case "30":
            NomedoDia = "Grotescos";
            break;

        case "31":
            NomedoDia = "Do Cemiterio Maldito";
            break;


    }
    document.getElementById("resposta").innerText =`🤘O Nome Da Sua banda é ${Nomedabanda} ${NomedoDia} :p
    Isso é Tão Rock Mano🤘`
    ;

    resposta.classList.remove("opacity-0");
    resposta.classList.add("opacity-100");

    
    resposta.style.animation = "piscar 0.5s infinite alternate";

    setTimeout(() => {
        resposta.style.animation = "";
    }, 2000);
}
