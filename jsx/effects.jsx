// effects.jsx

// Função para aplicar o efeito Wiggle
function applyWiggle() {
    var comp = app.project.activeItem;  // Obtém a composição ativa
    if (comp && comp instanceof CompItem) {
      var layer = comp.selectedLayers[0]; // Obtém a camada selecionada
      if (layer) {
        var property = layer.property("Position"); // Aplica na posição
        if (property) {
          property.expression = 'wiggle(5, 30)'; // 5 é a frequência, 30 a amplitude
          alert("Efeito Wiggle aplicado!");
        }
      }
    }
  }
  
  // Função para aplicar o efeito Flicker
  function applyFlicker() {
    var comp = app.project.activeItem;
    if (comp && comp instanceof CompItem) {
      var layer = comp.selectedLayers[0];
      if (layer) {
        var property = layer.property("Opacity"); // Aplica na opacidade
        if (property) {
          property.expression = 'wiggle(10, 50)'; // 10 é a frequência, 50 é a variação de opacidade
          alert("Efeito Flicker aplicado!");
        }
      }
    }
  }
  
  // Função para aplicar o efeito Bounce
  function applyBounce() {
    var comp = app.project.activeItem;
    if (comp && comp instanceof CompItem) {
      var layer = comp.selectedLayers[0];
      if (layer) {
        var property = layer.property("Position");
        if (property) {
          property.expression =
            'n = 0;\n' +
            'if (numKeys > 0){\n' +
            '  n = nearestKey(time).index;\n' +
            '  if (key(n).time > time){n--;} \n' +
            '}\n' +
            'if (n == 0){\n' +
            '  t = 0;\n' +
            '}else{\n' +
            '  t = time - key(n).time;\n' +
            '}\n' +
            'if (n > 0){\n' +
            '  v = velocityAtTime(key(n).time - thisComp.frameDuration);\n' +
            '  amp = .05;\n' +
            '  freq = 2.0;\n' +
            '  decay = 5.0;\n' +
            '  value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);\n' +
            '}else{value;}';
          alert("Efeito Bounce aplicado!");
        }
      }
    }
  }
  