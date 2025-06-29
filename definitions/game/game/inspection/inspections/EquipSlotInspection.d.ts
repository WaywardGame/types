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
import { EquipType } from "@wayward/game/game/entity/IHuman";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import type { EnumReferenceResolved } from "@wayward/game/game/reference/IReferenceManager";
import { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import Translation from "@wayward/game/language/Translation";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export default class EquipSlotInspection extends Inspection<EquipType | undefined> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext) => boolean;
    constructor(value?: EquipType | EnumReferenceResolved<ReferenceType.EquipSlot>, context?: InfoProviderContext);
    getId(): string;
    protected getTitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getSubtitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    private getEquipSlot;
    protected getContent(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider | undefined>;
}
