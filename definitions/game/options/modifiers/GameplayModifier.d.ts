/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Entity from "entity/Entity";
import { IHasImagePath } from "game/IObject";
import { IGameOptionsPartial } from "game/options/IGameOptions";
import { RandomInstance } from "utilities/Random";
export default abstract class GameplayModifier<ID extends number> implements IHasImagePath {
    readonly id: ID;
    readonly random: RandomInstance;
    readonly imagePath?: string;
    /**
     * Game options to be applied when this modifier is active
     */
    protected readonly options?: IGameOptionsPartial | (() => IGameOptionsPartial);
    private cachedOptions?;
    constructor(id: ID, random?: RandomInstance);
    initialize(): void;
    uninitialize(): void;
    getOptions(resolve?: boolean): IGameOptionsPartial | undefined;
    isEnabledForPlayer(_entity: Entity): boolean;
    getRandom(): import("../../../utilities/Random").Random<import("../../../utilities/Random").SeededGenerator>;
}
