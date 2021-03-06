export default {
  animation: {
    scale: 0.5,
    infect: {
      restTime: 0.1,
      dotMovimentTime: 0.6,
      expandTime: 0.6,
      expandDelay: 0.5,
      expandScale: 1.5,
      retractTime: 0.4,
      shakeRadius: 25,
    },
    recover: {
      restTime: 0.1,
      expandTime: 0.4,
      expandScale: 1.3,
      retractTime: 2,
    },
    vaccinate: {
      restTime: 0.1,
      expandTime: 0.5,
      expandScale: 1.8,
      retractTime: 2,
    },
    death: {
      restTime: 0.1,
      retractScale: 0.6,
      retractTime: 2.5,
      edgeRetractTime: 1,
      edgeRetractSize: 0,
      edgeRetractDelay: 1,
      birthExpandTime: 0.4,
      birthExpandDelay: 2,
      birthExpandScale: 1.3,
      birthRetractTime: 2,
    },
  },
  simulation: {
    mode: 'visual',
    step: 200,
    infectBy: 'special',
    k: 0.5,
    inoculation: {
      active: true,
      by: 'random',
      rate: 1,
      limit: {
        quant: 10,
        percent: true,
      },
    },
    i: {
      mayInfect: true,
      mayRecover: true,
      mayGetSusceptible: false,
      mayDie: true,
      mayBeVaccinated: false,
      base: {
        infect: 1,
        recover: 0.8,
        susceptible: 1,
        death: 0.4,
      },
    },
    r: {
      mayInfect: false,
      mayBeInfected: false,
      mayGetSusceptible: false,
      mayDie: false,
      mayBeVaccinated: false,
      base: {
        infect: 0.15,
        resist: 0.9,
        susceptible: 0.1,
        death: 0.05,
      },
    },
    s: {
      mayInfect: false,
      mayBeInfected: true,
      mayRecover: false,
      mayDie: false,
      mayBeVaccinated: true,
      base: {
        infect: 0,
        resist: 0,
        recover: 0,
        death: 0,
      },
    },
    v: {
      mayInfect: false,
      mayBeInfected: false,
      mayRecover: false,
      mayGetSusceptible: false,
      mayDie: false,
      base: {
        infect: 0,
        resist: 0.995,
        recover: 0,
        susceptible: 0.01,
        death: 0,
      },
    },
    d: {
      birthWhenDie: false,
      base: {
        infect: 0,
        resist: 1,
        recover: 0,
        death: 0,
      },
    },
  },
  generator: {
    method: 'fullRandom',
    factory: {
      fullRandom: {
        group: {
          quant: 3,
          connections: {
            min: 1,
            max: 3,
          },
          startingValuesByGroup: {
            enabled: true,
            quant: 1,
          },
        },
        node: {
          min: 30,
          max: 50,
          groups: [
            {
              ref: 'i',
              percent: false,
              quant: 3,
            },
            {
              ref: 'v',
              percent: false,
              quant: 0,
            },
          ],
          rate: {
            infect: {
              min: 0.5,
              max: 1,
            },
            resist: {
              min: 0,
              max: 0.5,
            },
            recover: {
              min: 0.01,
              max: 0.05,
            },
            susceptible: {
              min: 0.01,
              max: 0.05,
            },
            death: {
              min: 0.01,
              max: 0.05,
            },
          },
        },
        edge: {
          min: 50,
          max: 75,
          density: 4,
          rate: {
            infect: {
              min: 0.5,
              max: 1,
            },
          },
        },
      },
      uniformFormat: {
        level: 6,
        node: {
          groups: [
            {
              ref: 'i',
              percent: false,
              quant: 3,
            },
            {
              ref: 'v',
              percent: false,
              quant: 0,
            },
          ],
          rate: {
            infect: 0.5,
            resist: 0,
            recover: 0.05,
            susceptible: 0.05,
            death: 0.05,
          },
        },
        edge: {
          rate: {
            infect: 0.05,
          },
        },
      },
    },
  },
  analytics: {
    step: 'days',
    length: {
      value: 2,
      unit: 'years',
    },
    inoculationDelay: {
      enabled: false,
      value: 2,
      unit: 'months',
    },
    variables: {
      relative: {
        enabled: false,
        precision: 2,
      },
      display: ['infected', 'recovered', 'susceptible', 'vaccinated', 'death'],
    },
  },
  vis: {
    nodes: {
      borderWidth: 0,
      borderWidthSelected: 0,
      shape: 'dot',
      size: 15,
    },
    edges: {
      color: '#666666',
      width: 3,
      smooth: false,
    },
    layout: {
      improvedLayout: false,
    },
    interaction: {
      hover: true,
      selectConnectedEdges: false,
    },
    physics: {
      barnesHut: {
        gravitationalConstant: -80000,
        springConstant: 0.001,
        springLength: 200,
      },
      minVelocity: 0.05,
      forceAtlas2Based: {
        centralGravity: 0.007,
      },
      repulsion: {
        centralGravity: 0.25,
        springLength: 0,
        damping: 0.5,
      },
      solver: 'forceAtlas2Based',
    },
    groups: {
      i: {
        color: '#D46A6A',
      },
      r: {
        color: '#ECC13E',
      },
      s: {
        color: '#b0bec5',
      },
      v: {
        color: '#85BC5E',
      },
      d: {
        color: '#666666',
      },
    },
  },
}
