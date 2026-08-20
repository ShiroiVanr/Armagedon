import { CharacterData } from "./data-models/character.mjs";
import { ArmagedonCharacterSheet } from "./sheets/character-sheet.mjs";

Hooks.once("init", () => {
  console.log("Armagedon | Initializing system");

  CONFIG.Actor.dataModels.character = CharacterData;

  foundry.applications.apps.DocumentSheetConfig.registerSheet(
    Actor,
    "armagedon",
    ArmagedonCharacterSheet,
    {
      types: ["character"],
      makeDefault: true,
      label: "Armagedon Character Sheet"
    }
  );
});