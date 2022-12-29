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
import type { Prompt } from "game/meta/prompt/IPrompt";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class DisplayInterruptPacket extends ClientPacket {
    prompt: Prompt;
    args: any[];
    extraData: any;
    getDebugInfo(): string;
    process(): Promise<void>;
}
