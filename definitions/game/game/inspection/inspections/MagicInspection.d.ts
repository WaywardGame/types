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
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import type { MagicalPropertyIdentityHash } from "@wayward/game/game/magic/IMagicalProperty";
import { MagicalPropertyIdentity } from "@wayward/game/game/magic/IMagicalProperty";
import Translation from "@wayward/game/language/Translation";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export default class MagicInspection extends Inspection<MagicalPropertyIdentityHash> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext) => boolean;
    readonly magic: MagicalPropertyIdentity;
    constructor([, magic]: [any, MagicalPropertyIdentityHash], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    protected getTitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getSubtitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getContent(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider | undefined>;
}
