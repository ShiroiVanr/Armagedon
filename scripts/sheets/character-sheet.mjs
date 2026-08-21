const { ActorSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

import {
    abilityModifier,
    formatModifier
} from "../rules/character-rules.mjs";

export class ArmagedonCharacterSheet
  extends HandlebarsApplicationMixin(ActorSheetV2) {

  static DEFAULT_OPTIONS = {
    tag: "form",

    classes: ["armagedon", "actor", "character"],

    position: {
      width: 700,
      height: 750
    },

    form: {
      closeOnSubmit: false,
      submitOnChange: true
    }
  };

  static PARTS = {
    main: {
      template: "systems/armagedon/templates/actor/character-sheet.hbs"
    }
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);

    context.actor = this.actor;
    context.system = this.actor.system;

    context.modifiers = {
    str: abilityModifier(context.system.abilities.str),
    dex: abilityModifier(context.system.abilities.dex),
    con: abilityModifier(context.system.abilities.con),
    int: abilityModifier(context.system.abilities.int),
    wis: abilityModifier(context.system.abilities.wis),
    cha: abilityModifier(context.system.abilities.cha)
  };

  context.formattedModifiers = {
    str: formatModifier(context.modifiers.str),
    dex: formatModifier(context.modifiers.dex),
    con: formatModifier(context.modifiers.con),
    int: formatModifier(context.modifiers.int),
    wis: formatModifier(context.modifiers.wis),
    cha: formatModifier(context.modifiers.cha)
  };

    console.log("Armagedon | Modifiers:", context.modifiers);
    console.log("Armagedon | Formatted modifiers:", context.formattedModifiers);

    return context;
  }
}