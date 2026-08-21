const { SchemaField, NumberField } = foundry.data.fields;

export class CharacterData extends foundry.abstract.TypeDataModel {

  static defineSchema() {
    return {
      abilities: new SchemaField({
        str: new NumberField({
          required: true,
          nullable: false,
          integer: true,
          initial: 10
        }),

        dex: new NumberField({
          required: true,
          nullable: false,
          integer: true,
          initial: 10
        }),

        con: new NumberField({
          required: true,
          nullable: false,
          integer: true,
          initial: 10
        }),

        int: new NumberField({
          required: true,
          nullable: false,
          integer: true,
          initial: 10
        }),

        wis: new NumberField({
          required: true,
          nullable: false,
          integer: true,
          initial: 10
        }),

        cha: new NumberField({
          required: true,
          nullable: false,
          integer: true,
          initial: 10
        })
      }),

      hp: new SchemaField({
        value: new NumberField({
          required: true,
          nullable: false,
          integer: true,
          initial: 10,
          min: 0
        }),

        max: new NumberField({
          required: true,
          nullable: false,
          integer: true,
          initial: 10,
          min: 0
        })
      }),

      ac: new NumberField({
        required: true,
        nullable: false,
        integer: true,
        initial: 10
      }),

      proficiency: new NumberField({
        required: true,
        nullable: false,
        integer: true,
        initial: 2
      }),

      level: new NumberField({
        required: true,
        nullable: false,
        interger: true,
        initial: 1,
        min: 1,
      })
    };
  }
}