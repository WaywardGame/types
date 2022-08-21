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
import { EquipType } from "game/entity/IHuman";
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import { ReferenceType } from "game/reference/IReferenceManager";
import type { EnumReferenceResolved } from "game/reference/ReferenceManager";
import type { TranslationGenerator } from "ui/component/IComponent";
export default class EquipSlotInspection extends Inspection<EquipType | undefined> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => any;
    constructor(value?: EquipType | EnumReferenceResolved<ReferenceType.EquipSlot>);
    getId(): string;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
}
