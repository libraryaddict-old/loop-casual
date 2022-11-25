import { Args } from "grimoire-kolmafia";

export const args = Args.create("loopcasual", "A script to complete casual runs.", {
  goal: Args.string({
    help: "Which tasks to perform.",
    options: [
      ["all", "Level up, complete all quests, and get your steel organ."],
      ["level", "Level up only."],
      ["quests", "Complete all quests only."],
      ["organ", "Get your steel organ only."],
      ["!organ", "Level up and complete all quests only."],
    ],
    default: "all",
  }),
  stomach: Args.number({
    help: "Amount of stomach to fill.",
    default: 5,
  }),
  liver: Args.number({
    help: "Amount of liver to fill.",
    default: 10,
  }),
  spleen: Args.number({
    help: "Amount of spleen to fill.",
    default: 5,
  }),
  voa: Args.number({
    help: "Value of an adventure, in meat, for determining diet.",
    setting: "valueOfAdventure",
    default: 6500,
  }),
  actions: Args.number({
    help: "Maximum number of actions to perform, if given. Can be used to execute just a few steps at a time.",
  }),
  levelto: Args.number({
    help: "Aim to level to this with free leveling resources.",
    default: 13,
  }),
  professor: Args.flag({
    help: "Use pocket professor as one of the free leveling resources. This uses up some copiers, but may help to level.",
    default: false,
  }),
  fluffers: Args.boolean({
    help: "If true, use stuffing fluffers to finish the war.",
    default: true,
  }),
});
