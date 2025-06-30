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
import type Human from "@wayward/game/game/entity/Human";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type { InspectionClass } from "@wayward/game/game/inspection/InspectionTypeMap";
import type { EnumReferenceResolved, EnumReferenceTypes, ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type Translation from "@wayward/game/language/Translation";
import type Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type Text from "@wayward/game/ui/component/Text";
import type { InspectionTooltipHints } from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
export declare enum InspectionClasses {
    Main = "inspection",
    Type$ = "inspection-type",
    Header = "inspection-header",
    Title = "inspection-title",
    $Title = "title",
    Subtitle = "inspection-subtitle",
    $Subtitle = "subtitle",
    ColorContext = "inspection-color-context",
    $ColorContext = "color-context",
    $ColorContext_Optional = "color-context--optional",
    Icon = "inspection-icon",
    $Icon = "icon"
}
export default abstract class Inspection<O> extends InfoProvider {
    readonly type: InspectType;
    readonly value: O;
    static createEnumReferenceHandler<R extends ReferenceType, E>(referenceType: R, enumObject: Record<string, E>, predicate?: (reference: [R, E], context?: InfoProviderContext) => any): (type: InspectType, value: unknown, context?: InfoProviderContext) => boolean;
    static createAnyHandler(...handlers: Array<Exclude<InspectionClass["handles"], undefined>>): (type: InspectType, ...args: any[]) => boolean;
    static createReferenceHandler<REFTYPE extends EnumReferenceTypes>(referenceType: REFTYPE, handler?: (resolvedReference: EnumReferenceResolved<REFTYPE>, context?: InfoProviderContext) => any): (type: InspectType, value: unknown, context?: InfoProviderContext) => boolean;
    static verifyHumanity(_: any, context?: InfoProviderContext): boolean;
    static getDefaultPriority(inspectType: InspectType): number;
    private readonly _human?;
    protected get human(): Human | undefined;
    private readonly classNameTypePrefix;
    constructor(type: InspectType, value: O, context: InfoProviderContext | undefined);
    getClass(context: InfoProviderContext): string[];
    getBorder(): string | undefined;
    getPriority(): number;
    protected abstract getTitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected abstract getSubtitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getColorContext?(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected abstract getContent(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider | undefined>;
    protected getIconComponent?(context: InfoProviderContext): Component | undefined;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    /**
     * Returns a string that should differentiate this inspection from other inspections of the same type.
     */
    abstract getId(): string;
    renderHints(hints: InspectionTooltipHints): void;
    protected createIdFromVector3(vec3: IVector3): string;
    protected initChildTextComponent(text: TranslationGenerator): Text;
}
