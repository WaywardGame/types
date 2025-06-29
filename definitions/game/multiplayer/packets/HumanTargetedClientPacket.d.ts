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
import ClientPacket from "@wayward/game/multiplayer/packets/ClientPacket";
export default abstract class HumanTargetedClientPacket extends ClientPacket {
    human: Human;
    preProcess(): void;
    protected preWriteData(): void;
    protected preReadData(): void;
}
