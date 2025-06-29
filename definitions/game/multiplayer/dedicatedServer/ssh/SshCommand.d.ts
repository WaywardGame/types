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
import type { ISshCommand, SshCommandCallback, SshCommandType } from "@wayward/game/multiplayer/dedicatedServer/ssh/ISshCommand";
import { SshCommandCategory, SshCommandRequirement } from "@wayward/game/multiplayer/dedicatedServer/ssh/ISshCommand";
/**
 * An SSH Command
 */
export default class SshCommand<T extends SshCommandType> implements ISshCommand {
    readonly type: T;
    category: SshCommandCategory;
    helpText: string;
    requirements: SshCommandRequirement;
    callback: SshCommandCallback;
    constructor(type: T);
    setCategory(category: SshCommandCategory): this;
    setHelpText(helpText: string): this;
    setRequirements(requirements: SshCommandRequirement): this;
    addCallback(callback: SshCommandCallback): this;
}
