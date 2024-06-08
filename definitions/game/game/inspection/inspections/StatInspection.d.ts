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
import { Stat } from "@wayward/game/game/entity/IStats";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import { StatInfo } from "@wayward/game/game/inspection/infoProviders/stat/StatInfo";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export default class StatInspection extends Inspection<Stat> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext) => boolean;
    private readonly _human?;
    protected get human(): Human | undefined;
    constructor([, stat]: [any, Stat], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    hasContent(context: InfoProviderContext): boolean;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getInfo;
}
export declare const STAT_INFO_PROVIDER_MAP: PartialRecord<Stat, Class<StatInfo, ConstructorParameters<typeof StatInfo>>>;
