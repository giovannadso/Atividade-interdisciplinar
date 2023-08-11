let organelas = {
    Animal: [
        { nome: 'Mitocôndria', funcao: 'Responsáveis pela produção de energia através da respiração celular', imagem: 'Mitocondria.webp' },
        { nome: 'Ribossomos', funcao: 'Sintetizam proteínas a partir do RNA mensageiro', imagem: 'ribossomo.webp'},
        { nome: 'Lisossomos', funcao: 'Contêm enzimas digestivas para a quebra de substâncias e desintegração de material celular', imagem: 'Lisossomos.webp' },
        { nome: 'Núcleo', funcao: 'Controla as atividades celulares e contém o material genético (DNA)', imagem: 'nucleo.webp' },
        { nome: 'Complexo de Golgi', funcao: 'Modifica, empacota e distribui proteínas e lipídios para transporte dentro ou fora da célula', imagem: 'Complexo de Golgi.webp' },
        { nome: 'Retículo Endoplasmático Rugoso (RER)', funcao: 'Sintetiza proteínas e possui ribossomos em sua superfície', imagem: 'RER.webp' },
        { nome: 'Retículo Endoplasmático Liso (REL)', funcao: 'Sintetiza lipídios e participa do metabolismo de carboidratos', imagem: 'REL.jpg' },
        { nome: 'Centríolos', funcao: 'Participam da divisão celular e formam o citoesqueleto', imagem: 'Centriolos.jpg' },
        { nome: 'Membrana Plasmática', funcao: 'Controla a entrada e saída de substâncias da célula, mantendo sua integridade', imagem: 'Membrana Plasmatica.webp' },
        { nome: 'Citoesqueleto', funcao: 'Rede de filamentos que confere forma e sustentação à célula, além de auxiliar em movimentos celulares', imagem: 'Citoesqueleto.webp' },
        { nome: 'Vacúolos', funcao: 'Armazenam substâncias como água, nutrientes e produtos de resíduos', imagem: 'Vacuolos.jpg' },
        { nome: 'Membrana Nuclear', funcao: 'Separa o núcleo do citoplasma e controla o fluxo de materiais entre eles', imagem: 'Membrana Nuclear.webp' }
    ],

    Vegetal: [
        { nome: 'Cloroplastos', funcao: 'Realizam a fotossíntese, convertendo energia solar em energia química (glicose)', imagem: 'Cloroplastos.jpg' },
        { nome: 'Vacúolo', funcao: 'Armazena água, nutrientes, pigmentos e resíduos, mantendo a turgidez e armazenamento da célula', imagem: 'Vacuolo.jpg' },
        { nome: 'Membrana Nuclear', funcao: 'Separa o núcleo do citoplasma e controla o fluxo de materiais entre eles', imagem: 'Membrana Nuclear.webp' },
        { nome: 'Mitocôndrias', funcao: 'Responsáveis pela produção de energia através da respiração celular', imagem: 'Mitocondria.webp' },
        { nome: 'Complexo de Golgi', funcao: 'Modifica, empacota e distribui proteínas e lipídios para transporte dentro ou fora da célula', imagem: 'Complexo de Golgi.webp' },
        { nome: 'Lisossomos', funcao: ' Contêm enzimas digestivas para a quebra de substâncias e desintegração de material celular', imagem: 'Lisossomos.webp' },
        { nome: 'Retículo Endoplasmático Rugoso (RER)', funcao: 'Sintetiza proteínas e possui ribossomos em sua superfície', imagem: 'RER.webp' },
        { nome: 'Retículo Endoplasmático Liso (REL)', funcao: 'Sintetiza lipídios e participa do metabolismo de carboidratos', imagem: 'REL.jpg' },
        { nome: 'Ribossomos', funcao: 'Sintetizam proteínas a partir do RNA mensageiro', imagem: 'ribossomo.webp' },
        { nome: 'Parede Celular', funcao: 'Fornece suporte e proteção à célula vegetal, além de regular a entrada de água', imagem: 'Parede Celular.webp' },
        { nome: 'Membrana Plasmática', funcao: 'Controla a entrada e saída de substâncias da célula, mantendo sua integridade', imagem: 'Membrana Plasmatica.webp' },
        { nome: 'Citoesqueleto', funcao: 'Rede de filamentos que confere forma e sustentação à célula, além de auxiliar em movimentos celulares', imagem: 'Citoesqueleto.webp' }
    ],

    Fungi: [
        { nome: 'Hifas', funcao: 'Estruturas filamentosas que formam o corpo dos fungos e auxiliam na absorção de nutrientes', imagem: 'Hifas.webp' },
        { nome: 'Esporos', funcao: 'Estruturas de reprodução que permitem a disseminação dos fungos', imagem: 'Esporos.webp' },
        { nome: 'Parede Celular', funcao: 'Fornecem suporte e proteção à célula fúngica', imagem: 'Parede Celular.webp' },
        { nome: 'Núcleo', funcao: 'Controla as atividades celulares e contém o material genético (DNA)', imagem: 'nucleo.webp' },
        { nome: 'Mitocôndrias', funcao: 'Responsáveis pela produção de energia através da respiração celular', imagem: 'Mitocondria.webp' },
        { nome: 'Complexo de Golgi', funcao: 'Modifica, empacota e distribui proteínas e lipídios para transporte dentro ou fora da célula', imagem: 'Complexo de Golgi.webp' },
        { nome: 'Vacúolos', funcao: 'Armazenam substâncias como água, nutrientes e produtos de resíduos', imagem: 'Vacuolo.jpg' },
        { nome: 'Retículo Endoplasmático Rugoso (RER)', funcao: 'Sintetiza proteínas e possui ribossomos em sua superfície', imagem: 'RER.webp' },
        { nome: 'Retículo Endoplasmático Liso (REL)', funcao: 'Sintetiza lipídios e participa do metabolismo de carboidratos', imagem: 'REL.jpg' },
        { nome: 'Ribossomos', funcao: 'Sintetizam proteínas a partir do RNA mensageiro', imagem: 'ribossomo.webp' },
        { nome: 'Membrana Plasmática', funcao: ' Controla a entrada e saída de substâncias da célula, mantendo sua integridade', imagem: 'Membrana Plasmatica.webp' },
        { nome: 'Citoesqueleto', funcao: 'Rede de filamentos que confere forma e sustentação à célula, além de auxiliar em movimentos celulares', imagem: 'Citoesqueleto.webp' },
        { nome: 'Membrana Nuclear', funcao: 'Separa o núcleo do citoplasma e controla o fluxo de materiais entre eles', imagem: 'Membrana Nuclear.webp' },
    ]
};

function iniciarEstudo() {
    let celula = prompt('Qual tipo de célula você quer estudar? (Animal, Vegetal ou Fungi)');
    
    if (celula) {
        let organelasCelula = organelas[celula];
        if (organelasCelula) {
            let organela = prompt(`Escolha uma organela para saber a função:\n${organelasCelula.map(o => o.nome).join(', ')}`);
            if (organela) {
                let infoOrganela = organelasCelula.find(o => o.nome === organela);
                if (infoOrganela) {
                    exibirResultado(infoOrganela);
                } else {
                    alert('Organela não encontrada.');
                }
            }
        } else {
            alert('Tipo de célula não encontrado.');
        }
    }
}

function exibirResultado(organela) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h2>${organela.nome}</h2>
        <p><strong>Função:</strong> ${organela.funcao}</p>
        <img src="${organela.imagem}" alt="${organela.nome}" width="500">
    `;
    resultado.style.display = 'block';
}

let imagem = document.createElement("img");
imagem.src = "caminho/para/sua/imagem.jpg";


let imagemContainer = document.getElementById("imagem-container");

imagemContainer.appendChild(imagem);


