module.exports = {
  const: {
    node: {
      sizeFactor: 15,
      widthFactor: 8,
      ratePrecision: 1,
    },
    edge: {
      widthFactor: 10,
      ratePrecision: 1,
    },
    dot: {
      size: 6,
    },
    status: {
      INFECTED: 'i',
      RECOVERED: 'r',
      SUSCEPTIBLE: 's',
      VACCINATED: 'v',
      DEATH: 'd',
    },
  },
  population: null,
  context: null,
  network: null,
  step: null,
  nodes: null,
  edges: null,
  config: null,
}
