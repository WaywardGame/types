/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IReadableAlignment } from "@wayward/game/game/deity/IDeities";
import type Human from "@wayward/game/game/entity/Human";
import type Island from "@wayward/game/game/island/Island";
interface AlignmentDetails {
    good: number;
    evil: number;
    pendingEvil: number;
    pendingGood: number;
    pendingNeutral: number;
    lastApplied: number;
    lastEvil: number;
    lastGood: number;
    cursed: number;
}
export default class AlignmentManager {
    private readonly alignment;
    reset(): void;
    get(human: Human): Alignment;
    private initializeInternalDetails;
    protected onTickEnd(island: Island): void;
}
export declare class Alignment implements IReadableAlignment {
    private readonly alignment;
    static calculateNightlyEvilAlignment(human?: Human): number;
    private static calculateRampFraction;
    private readonly humanRef;
    private get human();
    constructor(human: Human, alignment: AlignmentDetails);
    get value(): number;
    /**
     * The current "good" of the player. A positive integer from 0 to maximum value.
     * @deprecated Are you sure you want to use this instead of `value` raw?
     */
    get good(): number;
    /**
     * Set the "good" of the player. A positive integer from 0 to maximum value. The value will be rounded and clamped.
     */
    setGood(value: number): this;
    /**
     * Add to the "good" of the player. The value will be rounded. Excess "good" is taken away from "@wayward/game/evil".
     */
    addGood(value: number): this;
    /**
     * Reduce the "good" of the player. The value will be rounded and clamped.
     */
    reduceGood(value: number, capCheck?: boolean): this;
    get goodCap(): number;
    /**
     * The current "evil" of the player. A positive integer from 0 to maximum value.
     * @deprecated Are you sure you want to use this instead of `value` raw?
     */
    get evil(): number;
    /**
     * Set the "evil" of the player. A positive integer from 0 to maximum value. The value will be rounded and clamped.
     */
    setEvil(value: number): this;
    /**
     * Add to the "evil" of the player. The value will be rounded. Excess "evil" is taken away from "@wayward/game/good".
     */
    addEvil(value: number): this;
    /**
     * Reduce the "evil" of the player. The value will be rounded and clamped.
     */
    reduceEvil(value: number, capCheck?: boolean): this;
    get evilCap(): number;
    get fraction(): number;
    get deity(): number;
    get cursed(): number;
    get invoked(): boolean;
    setInvoked(): void;
    applyNightly(): void;
    /**
     * - Clamp evil/good within proper ranges
     * - Write notes & add milestones
     * - Emit events if alignment has changed
     */
    private check;
    private sendMessage;
    private reset;
    private resetLastApplied;
}
export {};
