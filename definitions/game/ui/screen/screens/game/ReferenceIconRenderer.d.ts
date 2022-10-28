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
import type { ResolveReference } from "game/reference/IReferenceManager";
import { ReferenceType } from "game/reference/IReferenceManager";
import Component from "ui/component/Component";
export interface IReferenceIconDefinition<TYPE extends ReferenceType> {
    render(text: Component, referenced?: ResolveReference<TYPE>): any;
}
export declare const referenceIconDefinitions: PartialRecord<ReferenceType, IReferenceIconDefinition<ReferenceType>>;
export declare function registerReferenceIcon<TYPE extends ReferenceType>(type: TYPE, definition: IReferenceIconDefinition<TYPE>): void;
export declare enum ReferenceIconClasses {
    Main = "reference-icon"
}
