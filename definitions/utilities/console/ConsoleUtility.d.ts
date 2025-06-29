/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export type ConsoleCreateMagic = <HOST extends WeakKey>(value: HOST, getter?: (value?: HOST) => any) => void;
export interface ConsoleMagic extends Record<string, any> {
    magic: Record<string, ConsoleCreateMagic>;
}
/**
 * A proxy for `window` when it's available. Assigning to this does nothing when it's not.
 * Used to add utilities availble in the console
 */
declare const _default: ConsoleMagic;
export default _default;
