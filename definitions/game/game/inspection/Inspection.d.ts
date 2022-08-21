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
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type { InspectionClass } from "game/inspection/InspectionTypeMap";
import type { ReferenceType } from "game/reference/IReferenceManager";
import type { EnumReferenceResolved, EnumReferenceTypes } from "game/reference/ReferenceManager";
import type { TranslationGenerator } from "ui/component/IComponent";
import type Text from "ui/component/Text";
import type { IVector3 } from "utilities/math/IVector";
export default abstract class Inspection<O> extends InfoProvider {
    readonly type: InspectType;
    readonly value: O;
    static createEnumReferenceHandler<R extends ReferenceType, E, K extends string>(referenceType: R, enumObject: {
        [key in K]: E;
    }, predicate?: (reference: [R, E], context?: InfoProviderContext) => any): (type: InspectType, value: unknown, context?: InfoProviderContext) => any;
    static createAnyHandler(...handlers: Array<Exclude<InspectionClass["handles"], undefined>>): (type: InspectType, ...args: any[]) => boolean;
    static createReferenceHandler<REFTYPE extends EnumReferenceTypes>(referenceType: REFTYPE, handler?: (resolvedReference: EnumReferenceResolved<REFTYPE>, context?: InfoProviderContext) => any): (type: InspectType, value: unknown, context?: InfoProviderContext) => any;
    static verifyHumanity(_: any, context?: InfoProviderContext): boolean;
    static getDefaultPriority(inspectType: InspectType): number;
    constructor(type: InspectType, value: O);
    getClass(): string[];
    getBorder(): string | undefined;
    getPriority(): number;
    /**
     * Returns a string that should differentiate this inspection from other inspections of the same type.
     */
    abstract getId(): string;
    protected createIdFromVector3(vec3: IVector3): string;
    protected initChildTextComponent(text: TranslationGenerator): Text;
}
