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
import type { Source } from "@wayward/game/game/entity/player/IMessageManager";
import type Message from "@wayward/game/language/dictionary/Message";
import ClientPacket from "@wayward/game/multiplayer/packets/ClientPacket";
export default class SendMessagePacket extends ClientPacket {
    source: Source;
    message: Message;
    args: any[];
    getDebugInfo(): string;
    process(): Promise<void>;
}
