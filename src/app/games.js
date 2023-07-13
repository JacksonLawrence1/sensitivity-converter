export const games = [
  {
    id: "csgo",
    name: "Counter-Strike: Global Offensive",
    convert: {
      csgo: (sens) => sens,
      valorant: (sens) => sens / 3.18,
      osu: (sens) => sens / 2.50947,
      r6: (sens) => sens * 3.83972336439,
      overwatch: (sens) => sens / 3.33333333333,
      b4b: (sens) => sens / 9.43,
      aimlab: (sens) => sens * 2.273,
    },
  },
  {
    id: "valorant",
    name: "Valorant",
    convert: {
      csgo: (sens) => sens * 3.18,
    },
  },
  {
    id: "osu",
    name: "osu!",
    convert: {
      csgo: (sens) => sens * 2.50947,
    },
  },
  {
    id: "r6",
    name: "Tom Clancy's Rainbow Six: Siege",
    convert: {
      csgo: (sens) => sens / 3.83972336439,
    },
  },
  {
    id: "overwatch",
    name: "Overwatch",
    convert: {
      csgo: (sens) => sens * 3.33333333333,
    },
  },
  {
    id: "b4b",
    name: "Back 4 Blood",
    convert: {
      csgo: (sens) => sens * 9.43,
    },
  },
  {
    id: "aimlab",
    name: "Aim Lab",
    convert: {
      csgo: (sens) => sens / 2.273,
    },
  },
];
