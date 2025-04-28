function descobrirNome() {
    const bandasPorMes = {
        Jan: "Capirotos",
        Fev: "Lendarios",
        Mar: "Soldados",
        Abr: "Faroeste",
        Mai: "Imperadores",
        Jun: "Fodões",
        Jul: "Fanfarrões",
        Ago: "Baderneiros",
        Set: "Perturbados",
        Out: "Aliens",
        Nov: "Revoltados",
        Dez: "Gigantes"
    };

    const nomesPorDia = {
        1: "Do Espaço",
        2: "Do Inferno",
        3: "Da Galáxia",
        4: "Do Fazenda",
        5: "Do Diabo",
        6: "Do Japão",
        7: "Das Trevosas",
        8: "Do Fundão",
        9: "Dos Illuminatis",
        10: "De Copacabana",
        11: "Das Trevas",
        12: "Caboclos",
        13: "Da Muralha",
        14: "Voadores",
        15: "Do Tempo",
        16: "Da Esperança E A Última Que Morre",
        17: "Da Morte",
        18: "Abençoados",
        19: "Infernais",
        20: "Maloqueiros",
        21: "Dos 7 Pecados Capitais",
        22: "Mumificados",
        23: "Amigos Do Chimbinha",
        24: "Posers",
        25: "Do Mosh Pit",
        26: "Valentões",
        27: "Da Ilha Do Demônio",
        28: "Do Segundo Sol",
        29: "Rebeldes Sem Causa",
        30: "Grotescos",
        31: "Do Cemitério Maldito"
    };

    const mesEscolhido = document.getElementById("mes").value;
    const diaEscolhido = document.getElementById("dia").value;

    const Nomedabanda = bandasPorMes[mesEscolhido];
    const NomedoDia = nomesPorDia[diaEscolhido];

    const resposta = document.getElementById("resposta");
    resposta.innerText = `🤘O Nome da Sua Banda é: ${Nomedabanda} ${NomedoDia} 🤘
    Cara! Isso é tão Rock`;


    resposta.classList.remove("opacity-0");
    resposta.classList.add("opacity-100");


    resposta.style.animation = "piscar 0.5s infinite alternate";

    setTimeout(() => {
        resposta.style.animation = "";
    }, 2000);
}
function descobrirIdade() {
    const idadeInput = document.getElementById("idadeInput");
    const resposta = document.getElementById("resposta");

    const idadeMinima = parseInt(idadeInput.value);

    if (isNaN(idadeMinima)) {
        resposta.innerText = "Idade inválida. Por favor, insira um número.";
    } else if (idadeMinima >= 18) {
        resposta.innerText = "Maior de Idade";
    } else {
        resposta.innerText = "Menor de Idade";
    }

    resposta.classList.remove("opacity-0");
    resposta.classList.add("opacity-100");

    resposta.style.animation = "piscar 0.5s infinite alternate";
    setTimeout(() => {
        resposta.style.animation = "";
    }, 2000);
}

