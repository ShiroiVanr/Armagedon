// Función para calcular los hability modifier
export function abilityModifier(score) {
    return Math.floor((score - 10) / 2);
}
/* Acuerdate de usarla animal
import { abilityModifier } from "../rules/character-rules.mjs"; */

//Debería arreglar el problema del modificador.
export function formatModifier(modifier) {
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}