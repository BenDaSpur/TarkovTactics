const maps = [
  {
    name: "factory",
    desc:
      "A small, fast-paced CQC map inside of a multi-story industrial factory, complete with tunnels and overhead walkways.",
    duration: 20,
    players: "4-6",
    enemies: "Scavs",
    state: "Released",
    maps: ["ingame-with-callouts.png", "ingame.jpg"],
  },
  {
    name: "customs",
    desc:
      "Taking place in an industrial part of Tarkov, Customs features a self-storage lot, a river with a bridge, a two and three story dormitory, gas stations, warehouses, construction zones, and some military checkpoints.",
    duration: 35,
    players: "7-12",
    enemies: ["Scavs", "Reshala"],
    state: "Released",
    maps: ["DormsLayout.jpg", "overview.png"],
  },
  {
    name: "woods",
    desc:
      "A moderately sized section of woods with some open fields, small hills, a logging camp, and a couple of bunkers.",
    duration: 40,
    players: "8-12",
    enemies: ["Scavs", "Shturman"],
    state: "Released",
    maps: ["overview.jpg"],
  },
  {
    name: "shoreline",
    desc:
      "A large map that runs along a shoreline. A small town, a sunken village, a gas station, a pier, a guarded pill-box, a radio station, and, most notably, a large 3-story health resort are included. The health resort also has a basement in-ground pool, a gym, tennis courts, and a theatre.",
    duration: 50,
    players: "10-13",
    enemies: "Scavs",
    state: "Released",
    maps: ["overview.png"],
  },
  {
    name: "interchange",
    desc:
      "A three-story shopping complex comprising of a variety of different types of stores typical to malls, as well as 3 major anchor stores IDEA, OLI, and Goshan. It also has underground parking, roads circling the building, and a go-kart track.",
    duration: 45,
    players: "10-14",
    enemies: ["Scavs", "Killa"],
    state: "Released",
    maps: ["InterchangeDark.jpg", "overview.jpg", "stashes.jpg"],
  },
  {
    name: "the lab",
    desc:
      "Underground laboratory complex TerraGroup Labs is a secret object right under the center of Tarkov. Officially, this research center does not exist and, based on data scraps, is engaged in R&D, testing and simulation projects in chemistry, physics, biology, and high-tech areas.",
    duration: 40,
    players: "6-10",
    enemies: "Scav Raiders",
    state: "Released",
    maps: [],
  },
  {
    name: "reserve",
    desc:
      "The secret Federal State Reserve Agency base that, according to urban legends, contains enough supplies to last for years: food, medications and other resources, enough to survive an all-out nuclear war.",
    duration: 45,
    players: "9-12",
    enemies: ["Scavs", "Scav Raiders", "Gluhar"],
    state: "Released",
    maps: ["overview.jpg"],
  },
  {
    name: "hideout",
    desc:
      "Initially found as an abandoned and cluttered bomb shelter without any means of sustaining life. The player can build and improve various Hideout modules, such as the power generator, water collection system, ventilation, medical treatment facility, intelligence center, heating, bathroom and other advanced modules.",
    duration: 0,
    players: "?",
    enemies: "?",
    state: "Released",
    maps: ["items-to-keep.jpg", "DevTree.png", "bitcoin_chart.png"],
  },
];

export default maps;
