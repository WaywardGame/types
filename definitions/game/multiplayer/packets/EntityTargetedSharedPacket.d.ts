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
import SharedPacket from "@wayward/game/multiplayer/packets/SharedPacket";
export default abstract class EntityTargetedSharedPacket extends SharedPacket {
    entity: Entity | undefined;
    preProcess(): void;
    protected preWriteData(): void;
    protected preReadData(): void;
}
