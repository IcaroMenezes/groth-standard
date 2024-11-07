// Inicializa a interface CEP
const csInterface = new CSInterface();
// Variável global para armazenar o preset selecionado
let selectedPreset = null;

// Carregar os presets de suavização do arquivo JSON
function loadPresets() {
    fetch('../presets/presets.json')
        .then(response => response.json())
        .then(presets => {
            populatePresets(presets);
        })
        .catch(error => console.error("Erro ao carregar presets:", error));
}
// Carregar os presets de suavização do arquivo JSON
function loadPresets() {
    fetch('../presets/presets.json')
        .then(response => response.json())
        .then(presets => {
            populatePresets(presets);
        })
        .catch(error => console.error("Erro ao carregar presets:", error));
}

// Popula a lista de presets no painel HTML
function populatePresets(presets) {
    const presetList = document.getElementById('presetList');
    
    // Cria um botão para cada preset
    presets.forEach(preset => {
        const button = document.createElement('button');
        button.className = 'preset-button';
        button.innerText = preset.name;

        // Adiciona um evento para selecionar o preset
        button.onclick = () => {
            // Marca o preset como selecionado
            selectedPreset = preset;
            updateSelectedPresetDisplay(preset);
        };
        presetList.appendChild(button);
    });
}

// Atualiza a exibição do preset selecionado
function updateSelectedPresetDisplay(preset) {
    const display = document.getElementById('selectedPreset');
    display.innerText = `Preset Selecionado: ${preset.name}`;
}

// Função chamada quando o botão de aplicar é clicado
function aplly() {
    console.log(`aqui`)
    if (!selectedPreset) {
        alert('Por favor, selecione um preset primeiro.');
        return;
    }

    // Envia o preset selecionado para o After Effects
    applyPresetToAE(selectedPreset);
} ;

// Envia o preset selecionado para o After Effects e executa o script de suavização
function applyPresetToAE(preset) {
    // Converte o preset para uma string JSON que pode ser interpretada pelo ExtendScript
    const presetString = JSON.stringify(preset);

    // Executa a função ExtendScript 'applyPreset' no After Effects
    csInterface.evalScript(`applyPreset(${presetString})`, (result) => {
        if (result) {
            console.log("Resultado do After Effects:", result);
        } else {
            console.log("Preset aplicado com sucesso!");
        }
    });
}

// Inicializa o painel carregando os presets
loadPresets();
