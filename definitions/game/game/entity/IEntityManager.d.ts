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
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { IBound3 } from "@wayward/game/utilities/math/Bound3";
export interface IEntityManager<T extends Entity> {
    remove(entity: T): void;
    updateFov(humanBounds: IHumanBound[]): void;
}
export default IEntityManager;
export interface IHumanBound {
    human: Human;
    bound: IBound3;
}
