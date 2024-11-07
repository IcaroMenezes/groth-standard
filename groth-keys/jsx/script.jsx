// Função principal que aplica o preset de suavização
function applyPreset(preset) {
    // Verificar se há uma composição ativa
    if (app.project.activeItem == null || !(app.project.activeItem instanceof CompItem)) {
        alert("Por favor, abra uma composição para aplicar o preset.");
        return;
    }

    // Verificar se há uma camada selecionada
    var selectedLayers = app.project.activeItem.selectedLayers;
    if (selectedLayers.length === 0) {
        alert("Por favor, selecione uma camada para aplicar o preset.");
        return;
    }

    // Definir a propriedade que queremos aplicar a suavização (exemplo: Posição)
    var propertyName = "Position"; // Você pode mudar para "Scale", "Opacity", etc.

    // Loop através das camadas selecionadas
    for (var i = 0; i < selectedLayers.length; i++) {
        var layer = selectedLayers[i];
        var property = layer.property(propertyName);

        if (property == null || !property.isTimeVarying) {
            alert("A propriedade " + propertyName + " na camada " + layer.name + " não possui keyframes.");
            continue;
        }

        // Aplicar suavização nos keyframes
        applyEaseToKeyframes(property, preset.influenceIn, preset.influenceOut);
    }
}

// Função auxiliar para aplicar a suavização a todos os keyframes de uma propriedade
function applyEaseToKeyframes(property, influenceIn, influenceOut) {
    // Verificar todos os keyframes da propriedade
    var numKeys = property.numKeys;
    if (numKeys < 2) {
        alert("A propriedade precisa de pelo menos dois keyframes para aplicar suavização.");
        return;
    }

    for (var j = 1; j <= numKeys; j++) {
        var easeIn = new KeyframeEase(0, influenceIn);  // Suavização de entrada
        var easeOut = new KeyframeEase(0, influenceOut); // Suavização de saída

        // Aplicar suavização nos keyframes de entrada e saída
        property.setTemporalEaseAtKey(j, [easeIn], [easeOut]);
    }
}

// Exemplo de uso: preset padrão
// Preset básico para testes (influenceIn e influenceOut em 75% de suavização)
var defaultPreset = { "influenceIn": 75, "influenceOut": 75 };

// Teste: Aplicar o preset padrão (pode ser comentado para o uso em produção)
// applyPreset(defaultPreset);
