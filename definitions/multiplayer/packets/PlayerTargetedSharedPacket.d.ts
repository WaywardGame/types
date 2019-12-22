/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Player from "entity/player/Player";
import SharedPacket from "multiplayer/packets/SharedPacket";
export default abstract class PlayerTargetedSharedPacket extends SharedPacket {
    pid: number;
    player: Player;
    preProcess(): void;
    protected preWriteData(): void;
    protected preReadData(): void;
}
