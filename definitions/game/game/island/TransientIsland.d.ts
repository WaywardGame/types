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
import type Human from "@wayward/game/game/entity/Human";
import { type ICopyHumanOptions, type IIslandLoadOptions, type IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
/**
 * An island that won't exist for long
 */
export declare class TransientIsland {
    readonly island: Island;
    static createIslandId(): IslandId;
    static create(islandId?: IslandId, islandOptions?: Partial<IIslandLoadOptions>): Promise<TransientIsland>;
    private deleted;
    private constructor();
    delete(): void;
    /**
     * Creates a human you can do stuff with
     * @param spawnPoint Spawn point. Set to undefined to use the default island spawn point
     * @param facingDirection Direction they should face when spawing
     * @param copyFromHumanOptions Human object to copy customizations, items, and vehicles from
     * @returns Human
     */
    createHuman(spawnPoint?: IVector3, facingDirection?: Direction.Cardinal, copyFromHumanOptions?: ICopyHumanOptions): Human;
}
