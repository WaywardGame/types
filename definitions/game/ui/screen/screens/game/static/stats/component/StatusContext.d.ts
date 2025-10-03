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
import type Status from "@wayward/game/game/entity/status/Status";
import { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
export default class StatusContext extends InfoProviderContext {
    private readonly statusRef?;
    get status(): Status | undefined;
    get display(): number | undefined;
    constructor(status: Status, display?: number);
}
declare module "@wayward/game/game/inspection/InfoProviderContext" {
    interface InfoProviderContextRegistration {
        Status: StatusContext;
    }
}
