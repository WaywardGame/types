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
import { ReferenceType } from "game/reference/IReferenceManager";
import type { Reference } from "game/reference/ReferenceManager";
export interface IReferenceInspectionHandler {
    inspect(reference: Reference): any;
}
export declare const referenceInspectionHandlers: PartialRecord<ReferenceType, IReferenceInspectionHandler>;