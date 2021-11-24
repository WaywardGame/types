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
import { Stat } from "game/entity/IStats";
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
export default class StatInspection extends Inspection<Stat> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => any;
    private readonly human?;
    constructor([, stat]: [any, Stat], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    get(context: InfoProviderContext): (import("../../../language/impl/TranslationImpl").default | InfoProvider)[];
    private getInfo;
}
