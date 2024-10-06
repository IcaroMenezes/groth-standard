// Funções de clique para adicionar efeitos ao After Effects
document.getElementById("wiggleBtn").addEventListener("click", function() {
    applyEffect("wiggle");
});

document.getElementById("flickerBtn").addEventListener("click", function() {
    applyEffect("flicker");
});

document.getElementById("bounceBtn").addEventListener("click", function() {
    applyEffect("bounce");
});

// Função que envia o comando ExtendScript para o After Effects
function applyEffect(effectType) {
    var script = '';

    // Wiggle
    if (effectType === "wiggle") {
        script = `
            var comp = app.project.activeItem;
            if (comp && comp.selectedLayers.length > 0) {
                var layer = comp.selectedLayers[0];
                var property = layer.transform.position;
                property.expression = "wiggle(5, 20)";
            } else {
                alert("Selecione uma camada");
            }
        `;
    }

    // Flicker (altera a opacidade de forma rápida)
    if (effectType === "flicker") {
        script = `
            var comp = app.project.activeItem;
            if (comp && comp.selectedLayers.length > 0) {
                var layer = comp.selectedLayers[0];
                var property = layer.transform.opacity;
                property.expression = "wiggle(10, 100)";
            } else {
                alert("Selecione uma camada");
            }
        `;
    }

    // Bounce (efeito de elasticidade)
    if (effectType === "bounce") {
        script = `
            var comp = app.project.activeItem;
            if (comp && comp.selectedLayers.length > 0) {
                var layer = comp.selectedLayers[0];
                var property = layer.transform.position;
                property.expression = "amp = 0.05; freq = 2.0; decay = 5.0; n = 0; t = time - inPoint; if (t < 0) value else value + amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);";
            } else {
                alert("Selecione uma camada");
            }
        `;
    }

    // Executa o script no After Effects
    new CSInterface().evalScript(script);
}
