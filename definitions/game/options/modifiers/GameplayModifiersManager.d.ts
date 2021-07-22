/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import GameplayModifier from "game/options/modifiers/GameplayModifier";
export default class GameplayModifiersManager<ID extends number, MODIFIER extends GameplayModifier<ID>> {
    private readonly enumObject;
    private readonly classes;
    private _instances;
    protected get instances(): Map<ID, MODIFIER>;
    constructor(enumObject: any, classes: OptionalDescriptions<ID, Class<MODIFIER, [ID]>>);
    getImage(id: ID): string | undefined;
    getModifierInstance(id: ID): MODIFIER | undefined;
    createCollection(): GameplayModifiersCollection<ID, MODIFIER>;
}
export declare class GameplayModifiersCollection<ID extends number, MODIFIER extends GameplayModifier<ID>> {
    private readonly manager;
    protected readonly initializedModifiers: Map<ID, MODIFIER>;
    constructor(manager: GameplayModifiersManager<ID, MODIFIER>);
    initialize(...ids: ID[]): void;
    uninitialize(): void;
    options(): import("@wayward/goodstream/Stream").default<import("../IGameOptions").IGameOptionsPartial>;
    initialized(): IterableIterator<ID>;
}
