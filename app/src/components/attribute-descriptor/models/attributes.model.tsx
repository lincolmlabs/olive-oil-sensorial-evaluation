export const attributes = {
  positives: {
    fruity: {
      id: "fruity",
      description: "Frutado",
      descriptors: {
        green: { id: "green", description: "Verde" },
        ripe: { id: "ripe", description: "Maduro" },
      },
    },
    bitter: {
      id: "bitter",
      description: "Amargo",
    },
    pungent: {
      id: "pungent",
      description: "Picante",
    },
  },
  negatives: {
    fusty: {
      id: "fusty",
      description: "Fermentado\nBorras",
    },
    musty: {
      id: "musty",
      description: "Mofado\nUmidade\nTerroso",
    },
    winey: {
      id: "winey",
      description: "Avinhado\nAvinagrado\nÁcido",
    },
    frostbitten: {
      id: "frostbitten",
      description: "Azeitona gelada\n(madeira úmida)",
    },
    rancid: {
      id: "rancid",
      description: "Rançoso",
    },
    otherDefects: {
      id: "otherDefects",
      description: "Outros atributos\nnegativos",
      descriptors: {
        metalic: { id: "metalic", description: "Metálico" },
        hay: { id: "hay", description: "Feno / amadeirado" },
        rough: { id: "rough", description: "Basto / grosseiro" },
        grubby: { id: "grubby", description: "Gafa" },
        vegetableWater: {
          id: "vegetableWater",
          description: "Água de vegetação / arraste",
        },
        brine: { id: "brine", description: "Salmoura" },
        cucumber: { id: "cucumber", description: "Pepino" },
        greasy: { id: "greasy", description: "Lubrificante" },
        esparto: { id: "esparto", description: "Esparto" },
        burnt: { id: "burnt", description: "Queimado / cozido" },
      },
    },
  },
  textual: {
    comments: {
      id: "comments",
      description: "Comentários"
    },
    otherPerceptions: {
      id: "otherPerceptions",
      description: "Outras percepções"
    }
  }
};
