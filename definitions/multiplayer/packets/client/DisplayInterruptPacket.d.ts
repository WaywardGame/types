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
import Interrupt from "language/dictionary/Interrupt";
import InterruptChoice from "language/dictionary/InterruptChoice";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class DisplayInterruptPacket extends ClientPacket {
    interrupt: Interrupt;
    args: any[];
    choices: InterruptChoice[] | undefined;
    process(): Promise<void>;
}
