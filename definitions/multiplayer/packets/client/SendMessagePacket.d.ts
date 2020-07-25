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
import { Source } from "entity/player/IMessageManager";
import Message from "language/dictionary/Message";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class SendMessagePacket extends ClientPacket {
    source: Source;
    message: Message;
    args: any[];
    process(): Promise<void>;
}
