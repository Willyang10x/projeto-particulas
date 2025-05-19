const configParticulas = {
  particulas: {
    numero: { valor: 60, densidade: { habilitar: true, area_valor: 800 } },
    cor: { valor: "#00bcd4" },
    formato: { tipo: "circle" }, 
    opacidade: { valor: 0.5 },
    tamanho: { valor: 3, aleatorio: true },
    linhas_ligadas: {
      habilitar: true,
      distancia: 150,
      cor: "#00bcd4",
      opacidade: 0.4,
      largura: 1
    },
    movimento: { habilitar: true, velocidade: 3 }
  },
  interatividade: {
    detectar_em: "canvas",
    eventos: {
      ao_passar_mouse: { habilitar: true, modo: "repulse" }, 
      ao_clicar: { habilitar: false },
      redimensionar: true
    },
    modos: { repulsao: { distancia: 100 } }
  },
  detectar_retina: true
};


function converterConfig(configPt) {
  return {
    particles: {
      number: { value: configPt.particulas.numero.valor, density: { enable: configPt.particulas.numero.densidade.habilitar, value_area: configPt.particulas.numero.densidade.area_valor } },
      color: { value: configPt.particulas.cor.valor },
      shape: { type: configPt.particulas.formato.tipo },
      opacity: { value: configPt.particulas.opacidade.valor },
      size: { value: configPt.particulas.tamanho.valor, random: configPt.particulas.tamanho.aleatorio },
      line_linked: {
        enable: configPt.particulas.linhas_ligadas.habilitar,
        distance: configPt.particulas.linhas_ligadas.distancia,
        color: configPt.particulas.linhas_ligadas.cor,
        opacity: configPt.particulas.linhas_ligadas.opacidade,
        width: configPt.particulas.linhas_ligadas.largura
      },
      move: { enable: configPt.particulas.movimento.habilitar, speed: configPt.particulas.movimento.velocidade }
    },
    interactivity: {
      detect_on: configPt.interatividade.detectar_em,
      events: {
        onhover: { enable: configPt.interatividade.eventos.ao_passar_mouse.habilitar, mode: configPt.interatividade.eventos.ao_passar_mouse.modo },
        onclick: { enable: configPt.interatividade.eventos.ao_clicar.habilitar },
        resize: configPt.interatividade.eventos.redimensionar
      },
      modes: { repulse: { distance: configPt.interatividade.modos.repulsao.distancia } }
    },
    retina_detect: configPt.detectar_retina
  };
}


particlesJS('particles-js', converterConfig(configParticulas));
