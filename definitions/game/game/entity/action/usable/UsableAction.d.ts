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
import type UsableActionRegistrar from "game/entity/action/usable/UsableActionRegistrar";
import type { UsableActionTypePlaceholder } from "game/entity/action/usable/UsableActionType";
import { UsableActionType } from "game/entity/action/usable/UsableActionType";
import type Creature from "game/entity/creature/Creature";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
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
import type Tooltip from "ui/tooltip/Tooltip";
import type { HighlightSelector } from "ui/util/IHighlight";
import ImagePath from "ui/util/ImagePath";
export interface IUsableActionRequirement<TYPE> {
    allowNone?: true;
    validate?(player: Player, value: TYPE): boolean;
    find?(player: Player): TYPE | undefined;
    getMissingName?(): Translation;
}
export declare namespace IUsableActionRequirement {
    interface Maybe<TYPE> {
        allowNone: true;
        validate(player: Player, value: TYPE): boolean;
    }
    type Always = true;
}
export interface IUsableActionRequirements {
    item?: true | IUsableActionRequirement<Item>;
    doodad?: true | IUsableActionRequirement<Doodad>;
    creature?: true | IUsableActionRequirement<Creature>;
    npc?: true | IUsableActionRequirement<NPC>;
}
export interface IUsableActionPossibleUsing {
    item?: Item;
    itemType?: ItemType;
    doodad?: Doodad;
    creature?: Creature;
    npc?: NPC;
}
export interface IUsableActionUsing<REQUIREMENTS extends IUsableActionRequirements> {
    item: ((REQUIREMENTS["item"] extends true ? Item : never) | (undefined extends REQUIREMENTS["item"] ? undefined : never) | (REQUIREMENTS["item"] extends {
        allowNone: true;
    } ? undefined : never) | (REQUIREMENTS["item"] extends {
        validate(player: Player, value: Item): boolean;
    } ? Item : never) | (REQUIREMENTS["item"] extends {
        find(player: Player): Item;
    } ? Item : never));
    doodad: ((REQUIREMENTS["doodad"] extends true ? Doodad : never) | (undefined extends REQUIREMENTS["doodad"] ? undefined : never) | (REQUIREMENTS["doodad"] extends {
        allowNone: true;
    } ? undefined : never) | (REQUIREMENTS["doodad"] extends {
        validate(player: Player, value: Doodad): boolean;
    } ? Doodad : never) | (REQUIREMENTS["doodad"] extends {
        find(player: Player): Doodad;
    } ? Doodad : never));
    creature: ((REQUIREMENTS["creature"] extends true ? Creature : never) | (undefined extends REQUIREMENTS["creature"] ? undefined : never) | (REQUIREMENTS["creature"] extends {
        allowNone: true;
    } ? undefined : never) | (REQUIREMENTS["creature"] extends {
        validate(player: Player, value: Creature): boolean;
    } ? Creature : never) | (REQUIREMENTS["creature"] extends {
        find(player: Player): Creature;
    } ? Creature : never));
    npc: ((REQUIREMENTS["npc"] extends true ? NPC : never) | (undefined extends REQUIREMENTS["npc"] ? undefined : never) | (REQUIREMENTS["npc"] extends {
        allowNone: true;
    } ? undefined : never) | (REQUIREMENTS["npc"] extends {
        validate(player: Player, value: NPC): boolean;
    } ? NPC : never) | (REQUIREMENTS["npc"] extends {
        find(player: Player): NPC;
    } ? NPC : never));
}
export declare type UsableActionIconReference = ActionType | UsableActionType | UsableActionTypePlaceholder | (Omit<IIcon, "path"> & {
    action: ActionType | UsableActionType | UsableActionTypePlaceholder;
});
export declare type ReturnableUsableActionUsability = IActionUsable | IActionNotUsable | boolean;
export interface IUsableActionUsable<REQUIREMENTS extends IUsableActionRequirements> extends IActionUsable {
    using: IUsableActionUsing<REQUIREMENTS>;
}
export interface IUsableActionNotUsable extends IActionNotUsable {
    sendMessage(): void;
}
export declare namespace IUsableActionNotUsable {
    function create(message?: Message, ...args: any[]): IUsableActionNotUsable;
    function sendMessage(notUsable: IActionNotUsable): void;
    function equals(a: IUsableActionNotUsable, b: IUsableActionNotUsable): boolean;
}
export declare type UsableActionUsability<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> = IUsableActionUsable<REQUIREMENTS> | IUsableActionNotUsable;
export declare enum UsableActionExecutionContext {
    ContextMenu = 0,
    ActionBar = 1
}
export interface IUsableActionExecutionContext {
    context: UsableActionExecutionContext;
    getItemContainerFilterText(): string | undefined;
}
export interface IUsableActionDefinitionBase<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> {
    id?: string | number;
    slottable?: boolean;
    isApplicable?(player: Player, using: IUsableActionPossibleUsing): boolean;
    translate?: (translator: UsableActionTranslator) => UsableActionTranslator;
    icon?: UsableActionIconReference;
    iconLocationOnItem?: ItemDetailIconLocation;
    tooltip?: ActionType | ((tooltip: Tooltip) => any);
    highlight?(selectors: HighlightSelector[], using: IUsableActionPossibleUsing): any;
    bindable?: Bindable | ((using: IUsableActionUsing<REQUIREMENTS>) => Bindable | undefined);
    submenu?(registrar: UsableActionRegistrar, using: IUsableActionUsing<REQUIREMENTS>): UsableActionRegistrar | void;
    execute?(player: Player, using: IUsableActionUsing<REQUIREMENTS>, context: IUsableActionExecutionContext): any;
    isUsable?(player: Player, using: IUsableActionUsing<REQUIREMENTS>): ReturnableUsableActionUsability;
    displayLevel?: ActionDisplayLevel;
}
export interface IUsableActionDefinitionSubmenu<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> extends IUsableActionDefinitionBase<REQUIREMENTS> {
    submenu(registrar: UsableActionRegistrar, using: IUsableActionUsing<REQUIREMENTS>): UsableActionRegistrar | void;
    execute?: undefined;
    isUsable?(player: Player, using: IUsableActionUsing<REQUIREMENTS>): ReturnableUsableActionUsability;
    slottable?: undefined;
}
export interface IUsableActionDefinitionExecutable<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> extends IUsableActionDefinitionBase<REQUIREMENTS> {
    slottable?: boolean;
    submenu?: undefined;
    execute(player: Player, using: IUsableActionUsing<REQUIREMENTS>, context: IUsableActionExecutionContext): any;
    isUsable?(player: Player, using: IUsableActionUsing<REQUIREMENTS>): ReturnableUsableActionUsability;
}
export declare type IUsableActionDefinition<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> = IUsableActionDefinitionSubmenu<REQUIREMENTS> | IUsableActionDefinitionExecutable<REQUIREMENTS>;
export declare type ActionId = string | ActionType | UsableActionType;
declare class UsableAction<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements, DEFINITION extends IUsableActionDefinition<REQUIREMENTS> = IUsableActionDefinition<REQUIREMENTS>> {
    readonly requirements: REQUIREMENTS;
    readonly definition: DEFINITION;
    id: ActionId;
    constructor(requirements: REQUIREMENTS, definition: DEFINITION);
    isExecutable(): this is UsableAction<REQUIREMENTS, IUsableActionDefinitionExecutable<REQUIREMENTS>>;
    execute(player: Player, provided: IUsableActionUsing<REQUIREMENTS>, context: IUsableActionExecutionContext): boolean;
    private resolveUsing;
    isUsable(player: Player, provided: IUsableActionUsing<REQUIREMENTS>): UsableActionUsability<REQUIREMENTS>;
    isApplicable(player: Player, provided?: IUsableActionPossibleUsing): provided is IUsableActionUsing<REQUIREMENTS>;
    private isItemApplicable;
    private isDoodadApplicable;
    private isCreatureApplicable;
    private isNPCApplicable;
    private readonly findItemCannotUse;
    getFindItemCannotUse(): IUsableActionNotUsable[];
    getItem(player: Player, provided?: IUsableActionPossibleUsing): Item | false | undefined;
    private getItemByType;
    getDoodad(player: Player, provided?: IUsableActionPossibleUsing): false | Doodad | undefined;
    getCreature(player: Player, provided?: IUsableActionPossibleUsing): false | Creature | undefined;
    getNPC(player: Player, provided?: IUsableActionPossibleUsing): false | NPC | undefined;
    getIcon(): {
        path: ImagePath<PathType.Action>;
        width: number;
        height: number;
    } | undefined;
    getHighlightSelectors(using?: IUsableActionPossibleUsing): HighlightSelector[];
    private translator?;
    getTranslation(using?: IUsableActionUsing<REQUIREMENTS>, which?: ActionTranslation): TranslationImpl | undefined;
}
export declare class UsableActionTranslator {
    readonly id: ActionId;
    private nameSupplier?;
    private descriptionSupplier?;
    constructor(id: ActionId);
    name(supplier: SupplierOr<Translation, [IUsableActionPossibleUsing]>): this;
    description(supplier: SupplierOr<Translation, [IUsableActionPossibleUsing]>): this;
    get(using?: IUsableActionPossibleUsing, which?: ActionTranslation): TranslationImpl | undefined;
}
export interface IUsableActionFactory<REQUIREMENTS extends IUsableActionRequirements> {
    create: <DEFINITION extends IUsableActionDefinition<REQUIREMENTS>>(action: DEFINITION) => UsableAction<REQUIREMENTS, DEFINITION>;
}
declare namespace UsableAction {
    function requiring<REQUIREMENTS1 extends IUsableActionRequirements>(requirements: REQUIREMENTS1): IUsableActionFactory<REQUIREMENTS1>;
    function create<DEFINITION extends IUsableActionDefinition<{}>>(action: DEFINITION): UsableAction<{}, DEFINITION>;
    function translateId(id: ActionId, which?: ActionTranslation): TranslationImpl | undefined;
    function getBestSafeItemInInventory(player: Player, options?: Partial<IGetBestItemsOptions>): Item | undefined;
}
export default UsableAction;
