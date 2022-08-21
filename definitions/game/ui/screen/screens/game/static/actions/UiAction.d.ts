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
import type Doodad from "game/doodad/Doodad";
import type { ActionDisplayLevel, IActionNotUsable, IActionUsable } from "game/entity/action/IAction";
import { ActionType } from "game/entity/action/IAction";
import type Creature from "game/entity/creature/Creature";
import type NPC from "game/entity/npc/NPC";
import type { IIcon } from "game/inspection/InfoProvider";
import type { ItemType } from "game/item/IItem";
import type { IGetBestItemsOptions } from "game/item/IItemManager";
import type Item from "game/item/Item";
import type Message from "language/dictionary/Message";
import { ActionTranslation } from "language/dictionary/Misc";
import TranslationImpl from "language/impl/TranslationImpl";
import Translation from "language/Translation";
import { PathType } from "resource/IResourceLoader";
import type Bindable from "ui/input/Bindable";
import type { ItemDetailIconLocation } from "ui/screen/screens/game/component/Item";
import type UiActionRegistrar from "ui/screen/screens/game/static/actions/UiActionRegistrar";
import type { UiActionTypePlaceholder } from "ui/screen/screens/game/static/actions/UiActionType";
import { UiActionType } from "ui/screen/screens/game/static/actions/UiActionType";
import type Tooltip from "ui/tooltip/Tooltip";
import type { HighlightSelector } from "ui/util/IHighlight";
import ImagePath from "ui/util/ImagePath";
export interface IUiActionRequirement<TYPE> {
    allowNone?: true;
    validate?(value: TYPE): boolean;
    find?(): TYPE | undefined;
    getMissingName?(): Translation;
}
export interface IUiActionRequirements {
    item?: true | IUiActionRequirement<Item>;
    doodad?: true | IUiActionRequirement<Doodad>;
    creature?: true | IUiActionRequirement<Creature>;
    npc?: true | IUiActionRequirement<NPC>;
}
export interface IUiActionPossibleUsing {
    item?: Item;
    itemType?: ItemType;
    doodad?: Doodad;
    creature?: Creature;
    npc?: NPC;
}
export interface IUiActionUsing<REQUIREMENTS extends IUiActionRequirements> {
    item: ((REQUIREMENTS["item"] extends true ? Item : never) | (undefined extends REQUIREMENTS["item"] ? undefined : never) | (REQUIREMENTS["item"] extends {
        none: true;
    } ? undefined : never) | (REQUIREMENTS["item"] extends {
        validate(value: Item): boolean;
    } ? Item : never) | (REQUIREMENTS["item"] extends {
        find(): Item;
    } ? Item : never));
    doodad: ((REQUIREMENTS["doodad"] extends true ? Doodad : never) | (undefined extends REQUIREMENTS["doodad"] ? undefined : never) | (REQUIREMENTS["doodad"] extends {
        none: true;
    } ? undefined : never) | (REQUIREMENTS["doodad"] extends {
        validate(value: Doodad): boolean;
    } ? Doodad : never) | (REQUIREMENTS["doodad"] extends {
        find(): Doodad;
    } ? Doodad : never));
    creature: ((REQUIREMENTS["creature"] extends true ? Creature : never) | (undefined extends REQUIREMENTS["creature"] ? undefined : never) | (REQUIREMENTS["creature"] extends {
        none: true;
    } ? undefined : never) | (REQUIREMENTS["creature"] extends {
        validate(value: Creature): boolean;
    } ? Creature : never) | (REQUIREMENTS["creature"] extends {
        find(): Creature;
    } ? Creature : never));
    npc: ((REQUIREMENTS["npc"] extends true ? NPC : never) | (undefined extends REQUIREMENTS["npc"] ? undefined : never) | (REQUIREMENTS["npc"] extends {
        none: true;
    } ? undefined : never) | (REQUIREMENTS["npc"] extends {
        validate(value: NPC): boolean;
    } ? NPC : never) | (REQUIREMENTS["npc"] extends {
        find(): NPC;
    } ? NPC : never));
}
export declare type UiActionIconReference = ActionType | UiActionType | UiActionTypePlaceholder | (Omit<IIcon, "path"> & {
    action: ActionType | UiActionType | UiActionTypePlaceholder;
});
export declare type ReturnableUiActionUsability = IActionUsable | IActionNotUsable | boolean;
export interface IUiActionUsable<REQUIREMENTS extends IUiActionRequirements> extends IActionUsable {
    using: IUiActionUsing<REQUIREMENTS>;
}
export interface IUiActionNotUsable extends IActionNotUsable {
    sendMessage(): void;
}
export declare namespace IUiActionNotUsable {
    function create(message?: Message, ...args: any[]): IUiActionNotUsable;
    function sendMessage(notUsable: IActionNotUsable): void;
    function equals(a: IUiActionNotUsable, b: IUiActionNotUsable): boolean;
}
export declare type UiActionUsability<REQUIREMENTS extends IUiActionRequirements = IUiActionRequirements> = IUiActionUsable<REQUIREMENTS> | IUiActionNotUsable;
export declare enum UiActionExecutionContext {
    ContextMenu = 0,
    ActionBar = 1
}
export interface IUiActionExecutionContext {
    context: UiActionExecutionContext;
    getItemContainerFilterText(): string | undefined;
}
export interface IUiActionDefinitionBase<REQUIREMENTS extends IUiActionRequirements = IUiActionRequirements> {
    id?: string | number;
    slottable?: boolean;
    isApplicable?(using: IUiActionPossibleUsing): boolean;
    translate?: (translator: UiActionTranslator) => UiActionTranslator;
    icon?: UiActionIconReference;
    iconLocationOnItem?: ItemDetailIconLocation;
    tooltip?: ActionType | ((tooltip: Tooltip) => any);
    highlight?(selectors: HighlightSelector[], using: IUiActionPossibleUsing): any;
    bindable?: Bindable | ((using: IUiActionUsing<REQUIREMENTS>) => Bindable | undefined);
    submenu?(registrar: UiActionRegistrar, using: IUiActionUsing<REQUIREMENTS>): UiActionRegistrar | void;
    execute?(using: IUiActionUsing<REQUIREMENTS>, context: IUiActionExecutionContext): any;
    isUsable?(using: IUiActionUsing<REQUIREMENTS>): ReturnableUiActionUsability;
    displayLevel?: ActionDisplayLevel;
}
export interface IUiActionDefinitionSubmenu<REQUIREMENTS extends IUiActionRequirements = IUiActionRequirements> extends IUiActionDefinitionBase<REQUIREMENTS> {
    submenu(registrar: UiActionRegistrar, using: IUiActionUsing<REQUIREMENTS>): UiActionRegistrar | void;
    execute?: undefined;
    isUsable?(using: IUiActionUsing<REQUIREMENTS>): ReturnableUiActionUsability;
    slottable?: undefined;
}
export interface IUiActionDefinitionExecutable<REQUIREMENTS extends IUiActionRequirements = IUiActionRequirements> extends IUiActionDefinitionBase<REQUIREMENTS> {
    slottable?: boolean;
    submenu?: undefined;
    execute(using: IUiActionUsing<REQUIREMENTS>, context: IUiActionExecutionContext): any;
    isUsable?(using: IUiActionUsing<REQUIREMENTS>): ReturnableUiActionUsability;
}
export declare type IUiActionDefinition<REQUIREMENTS extends IUiActionRequirements = IUiActionRequirements> = IUiActionDefinitionSubmenu<REQUIREMENTS> | IUiActionDefinitionExecutable<REQUIREMENTS>;
export declare type ActionId = string | ActionType | UiActionType;
declare class UiAction<REQUIREMENTS extends IUiActionRequirements = IUiActionRequirements, DEFINITION extends IUiActionDefinition<REQUIREMENTS> = IUiActionDefinition<REQUIREMENTS>> {
    readonly requirements: REQUIREMENTS;
    readonly definition: DEFINITION;
    id: ActionId;
    constructor(requirements: REQUIREMENTS, definition: DEFINITION);
    isExecutable(): this is UiAction<REQUIREMENTS, IUiActionDefinitionExecutable<REQUIREMENTS>>;
    execute(provided: IUiActionUsing<REQUIREMENTS>, context: IUiActionExecutionContext): boolean;
    private resolveUsing;
    isUsable(provided: IUiActionUsing<REQUIREMENTS>): UiActionUsability<REQUIREMENTS>;
    isApplicable(provided?: IUiActionPossibleUsing): provided is IUiActionUsing<REQUIREMENTS>;
    private isItemApplicable;
    private isDoodadApplicable;
    private isCreatureApplicable;
    private isNPCApplicable;
    private readonly findItemCannotUse;
    getFindItemCannotUse(): IUiActionNotUsable[];
    getItem(provided?: IUiActionPossibleUsing): Item | false | undefined;
    private getItemByType;
    getDoodad(provided?: IUiActionPossibleUsing): false | Doodad | undefined;
    getCreature(provided?: IUiActionPossibleUsing): false | Creature | undefined;
    getNPC(provided?: IUiActionPossibleUsing): false | NPC | undefined;
    getIcon(): {
        path: ImagePath<PathType.Action>;
        width: number;
        height: number;
    } | undefined;
    getHighlightSelectors(using?: IUiActionPossibleUsing): HighlightSelector[];
    private translator?;
    getTranslation(using?: IUiActionUsing<REQUIREMENTS>, which?: ActionTranslation): TranslationImpl | undefined;
}
export declare class UiActionTranslator {
    readonly id: ActionId;
    private nameSupplier?;
    private descriptionSupplier?;
    constructor(id: ActionId);
    name(supplier: SupplierOr<Translation, [IUiActionPossibleUsing]>): this;
    description(supplier: SupplierOr<Translation, [IUiActionPossibleUsing]>): this;
    get(using?: IUiActionPossibleUsing, which?: ActionTranslation): TranslationImpl | undefined;
}
export interface IUiActionFactory<REQUIREMENTS extends IUiActionRequirements> {
    create: <DEFINITION extends IUiActionDefinition<REQUIREMENTS>>(action: DEFINITION) => UiAction<REQUIREMENTS, DEFINITION>;
}
declare namespace UiAction {
    function requiring<REQUIREMENTS1 extends IUiActionRequirements>(requirements: REQUIREMENTS1): IUiActionFactory<REQUIREMENTS1>;
    function create<DEFINITION extends IUiActionDefinition<{}>>(action: DEFINITION): UiAction<{}, DEFINITION>;
    function translateId(id: ActionId, which?: ActionTranslation): TranslationImpl | undefined;
    function getBestSafeItemInInventory(options?: Partial<IGetBestItemsOptions>): Item | undefined;
}
export default UiAction;
