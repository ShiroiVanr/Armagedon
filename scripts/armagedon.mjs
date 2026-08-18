import { CharacterData } from "./data-models/character.mjs";

Hooks.once("init", () => {
  console.log("Armagedon | Initializing system");

  CONFIG.Actor.dataModels.character = CharacterData;
});
