// ui.js
(function() {
    const csInterface = new CSInterface();
  
    // Carrega e executa o script JSX no After Effects
    function runExtendScript(script) {
      csInterface.evalScript(script);
    }
  
    // Ação para aplicar o efeito "wiggle"
    document.getElementById('wiggle-btn').addEventListener('click', function() {
      runExtendScript('applyWiggle()');
    });
  
    // Ação para aplicar o efeito "flicker"
    document.getElementById('flicker-btn').addEventListener('click', function() {
      runExtendScript('applyFlicker()');
    });
  
    // Ação para aplicar o efeito "bounce"
    document.getElementById('bounce-btn').addEventListener('click', function() {
      runExtendScript('applyBounce()');
    });
  })();
  