/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Human from "@wayward/game/game/entity/Human";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import type { MagicalPropertyIdentityHash } from "@wayward/game/game/magic/MagicalPropertyManager";
import { MagicalPropertyIdentity } from "@wayward/game/game/magic/MagicalPropertyManager";
export default class MagicInspection extends Inspection<MagicalPropertyIdentityHash> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext) => boolean;
    private readonly _human?;
    protected get human(): Human | undefined;
    readonly magic: MagicalPropertyIdentity;
    constructor([, magic]: [any, MagicalPropertyIdentityHash], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    get(context: InfoProviderContext): InfoProvider[];
}
