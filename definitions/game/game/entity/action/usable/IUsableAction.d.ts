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
import type Doodad from "game/doodad/Doodad";
import type { ActionDisplayLevel, ActionType, IActionNotUsable, IActionUsable } from "game/entity/action/IAction";
import type UsableAction from "game/entity/action/usable/UsableAction";
import type UsableActionRegistrar from "game/entity/action/usable/UsableActionRegistrar";
import type { UsableActionTranslator } from "game/entity/action/usable/UsableActionTranslator";
import type { UsableActionType, UsableActionTypePlaceholder } from "game/entity/action/usable/UsableActionType";
import type Creature from "game/entity/creature/Creature";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import type { InspectType } from "game/inspection/IInspection";
import type { IIcon } from "game/inspection/InfoProvider";
import type Inspection from "game/inspection/Inspection";
import type { Quality } from "game/IObject";
import type { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type ItemFinder from "game/item/ItemFinder";
import type { IItemFinderOptions } from "game/item/ItemFinder";
import type Message from "language/dictionary/Message";
import Translation from "language/Translation";
import type Bindable from "ui/input/Bindable";
import type { ItemDetailIconLocation } from "ui/screen/screens/game/component/ItemComponent";
import type Tooltip from "ui/tooltip/Tooltip";
import type { HighlightSelector } from "ui/util/IHighlight";
import type HashSet from "utilities/collection/set/HashSet";
export interface IUsableActionRequirement<TYPE> {
    allowNone?: true;
    validate?(player: Player, value: TYPE): boolean;
    find?(player: Player): TYPE | false | undefined;
    getMissingName?(): Translation;
}
export interface IUsableActionItemRequirement extends Omit<IUsableActionRequirement<Item>, "find"> {
    allowOnlyItemType?(player: Player, type: ItemType): boolean;
    finder?(player: Player, defaultOptions?: IItemFinderOptions, provided?: Omit<IUsableActionPossibleUsing, "item">): ItemFinder | undefined;
    requiresQuality?: true;
    requiresType?: true;
}
export declare namespace IUsableActionRequirement {
    interface Maybe<TYPE> {
        allowNone: true;
        validate(player: Player, value: TYPE): boolean;
    }
    type Always = true;
}
export interface IUsableActionRequirements {
    item?: true | IUsableActionItemRequirement;
    doodad?: true | IUsableActionRequirement<Doodad>;
    creature?: true | IUsableActionRequirement<Creature>;
    npc?: true | IUsableActionRequirement<NPC>;
}
export interface IUsableActionPossibleUsing {
    item?: Item;
    itemType?: ItemType;
    itemQuality?: Quality;
    doodad?: Doodad;
    creature?: Creature;
    npc?: NPC;
    misc?: any;
}
export interface IUsableActionUsing<REQUIREMENTS extends IUsableActionRequirements> {
    item: ((REQUIREMENTS["item"] extends true ? Item : never) | (undefined extends REQUIREMENTS["item"] ? undefined : never) | (REQUIREMENTS["item"] extends {
        allowNone: true;
    } ? Item | undefined : never) | (REQUIREMENTS["item"] extends {
        validate(player: Player, value: Item): boolean;
    } ? Item : never) | (REQUIREMENTS["item"] extends {
        finder: ItemFinder;
    } ? Item : never) | (REQUIREMENTS["item"] extends {
        allowOnlyItemType(player: Player, type: ItemType): boolean;
    } ? undefined : never));
    itemType: ((REQUIREMENTS["item"] extends true ? ItemType : never) | (undefined extends REQUIREMENTS["item"] ? undefined : never) | (REQUIREMENTS["item"] extends {
        allowOnlyItemType(player: Player, type: ItemType): boolean;
    } ? ItemType : never) | (REQUIREMENTS["item"] extends {
        validate(player: Player, value: Item): boolean;
    } ? ItemType | undefined : never) | (REQUIREMENTS["item"] extends {
        finder: ItemFinder;
    } ? ItemType : never) | (REQUIREMENTS["item"] extends {
        allowNone: true;
    } ? undefined : never));
    itemQuality: ((REQUIREMENTS["item"] extends true ? Quality : never) | (undefined extends REQUIREMENTS["item"] ? undefined : never) | (REQUIREMENTS["item"] extends {
        allowNone: true;
    } ? undefined : never) | (REQUIREMENTS["item"] extends {
        validate(player: Player, value: Item): boolean;
    } ? Quality | undefined : never) | (REQUIREMENTS["item"] extends {
        finder: ItemFinder;
    } ? Quality : never) | (REQUIREMENTS["item"] extends {
        allowOnlyItemType(player: Player, type: ItemType): boolean;
    } ? Quality : never));
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
    misc: any;
}
export type UsableActionIconReference = ActionType | UsableActionType | UsableActionTypePlaceholder | (Omit<IIcon, "path"> & {
    action: ActionType | UsableActionType | UsableActionTypePlaceholder;
}) | IIcon;
export type ReturnableUsableActionUsability = IActionUsable | IActionNotUsable | boolean;
export interface IUsableActionUsable<REQUIREMENTS extends IUsableActionRequirements> extends IActionUsable {
    using: IUsableActionUsing<REQUIREMENTS>;
    forceDisplay?: true;
}
export interface IUsableActionNotUsable extends IActionNotUsable {
    sendMessage(): void;
}
export declare namespace IUsableActionNotUsable {
    function create(message?: Message, ...args: any[]): IUsableActionNotUsable;
    function sendMessage(notUsable: IActionNotUsable): void;
    function equals(a: IUsableActionNotUsable, b: IUsableActionNotUsable): boolean;
}
export type UsableActionUsability<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> = IUsableActionUsable<REQUIREMENTS> | IUsableActionNotUsable;
export declare enum UsableActionExecutionContext {
    Generic = 0,
    ContextMenu = 1,
    ActionBar = 2
}
export interface IUsableActionExecutionContext {
    context: UsableActionExecutionContext;
    getItemContainerFilterText(): string | undefined;
}
export interface IUsableActionDefinitionBase<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> {
    id?: string | number;
    /**
     * Whether this action can be slotted in the action bar. Defaults to `true`.
     */
    slottable?: boolean;
    /**
     * Whether this action is "applicable" given this player and these "provided" objects.
     * @param player The player executing this action. This isn't always the local player!
     * @param using What the player is using — items, doodads, etc.
     */
    isApplicable?(player: Player, using: IUsableActionPossibleUsing): boolean;
    /**
     * A handler for registering translations for the action's name, description, etc.
     */
    translate?: (translator: UsableActionTranslator) => UsableActionTranslator;
    /**
     * The icon this action should have, if any.
     */
    icon?: SupplierOr<UsableActionIconReference | false, [using: IUsableActionPossibleUsing, action: UsableAction<REQUIREMENTS>, context: UsableActionDisplayContext]>;
    /**
     * Where the icon should appear, when slotted with an item. Defaults to bottom right.
     *
     * Generally, top left means "something else interacting with the slotted item" rather than "the slotted item interacting with something."
     * For example, "Harvest" shows in bottom right, because it's using this tool to harvest. Whereas "Repair With X" shows in top left,
     * because it's repairing this tool.
     */
    iconLocationOnItem?: ItemDetailIconLocation;
    /**
     * A handler for what this action will highlight when hovered with the mouse.
     * @param selectors The default selectors. The defaults can be removed, and/or additional selectors can be added.
     * @param using What this action is using. Item, doodad, etc.
     */
    highlight?(selectors: HighlightSelector[], using: IUsableActionPossibleUsing): any;
    /**
     * The bindable assigned to this action, for use in action context menus (ie, right clicking on the world or an item.)
     * Allows for a dynamically generated bindable based on what this action is using — item, doodad, etc.
     */
    bindable?: Bindable | ((using: IUsableActionUsing<REQUIREMENTS>) => Bindable | undefined);
    inspectTypes?: InspectType[];
    inspect?(type: InspectType, using: IUsableActionPossibleUsing): HashSet<Inspection<any>> | Inspection<any> | undefined;
    /**
     * A hint for the inspection system that this UA is internally using a specific action. Use tooltip filtering checks this.
     */
    useHintAction?: ActionType;
    /**
     * The contexts this action appears in.
     * - "Always" means whenever an action of this type is shown, it will be. For example, the "item actions" menu.
     * - "Direct" means whenever an action of this type is applicable to given objects, it will be. For example, a specific item's menu.
     * - "Never" means it will never be shown in menus. This results in an action which is executable but never appears in menus.
     */
    displayLevel?: ActionDisplayLevel | ((using: IUsableActionPossibleUsing) => ActionDisplayLevel | undefined);
    /**
     * Controls the display order of this action compared to other actions.
     * Generally you want to leave this as 0 (default) and just register your action in the correct place.
     * Priority can be generated dynamically based on the given objects — item, doodad, etc.
     *
     * Higher priority === appears first.
     * Lower priority === appears last.
     */
    priority?: number | ((using: IUsableActionPossibleUsing) => number | undefined);
    /**
     * Whether this action is currently usable — even if an action "makes sense" with the player and the objects they're using,
     * and the player can slot it and stuff, it might not currently be usable. For example, "harvest" having nothing to harvest.
     * @param player The player executing this action. This isn't always the local player!
     * @param using What the player is using — items, doodads, etc.
     */
    isUsable?(player: Player, using: IUsableActionUsing<REQUIREMENTS>, context: UsableActionExecutionContext | IUsableActionExecutionContext): ReturnableUsableActionUsability;
    /**
     * Marks this "action" as a submenu container instead of an executable. Is a generator for the submenu.
     * @param registrar The registrar that submenu actions should be appended to.
     * @param using What this action is using. Item, doodad, etc.
     */
    submenu?(registrar: UsableActionRegistrar, using: IUsableActionUsing<REQUIREMENTS>): UsableActionRegistrar | void;
    /**
     * Executes this action. Generally, this is where you want to execute an internal action registered with `@Register.action`,
     * as internal actions are called on all sides, rather than only clientside*.
     *
     * ***Warning:** While usable actions appear to only ever be client-side, they're *not always.*
     * The "auto-use" feature for action slots results in actions being executed *only* on the server's side.
     * **If you try to perform a client-side UI function here, such as showing a prompt, and a player puts the action in a "auto-use" action slot,
     * the host will receive the prompt instead!**
     *
     * If you'd like to execute some things on clientside, you can check if the player is the local player by checking `if (player.asLocalPlayer)`,
     * or ensure that this action is only executed clientside by setting `clientSide: true`, which disables support for the "auto-use" feature.
     * @param player The player executing this action. This isn't always the local player!
     * @param using What the player is using — items, doodads, etc.
     * @param context Context to do with this action execution — where it's executed from, etc.
     */
    execute?(player: Player, using: IUsableActionUsing<REQUIREMENTS>, context: UsableActionExecutionContext | IUsableActionExecutionContext): any;
    /**
     * Marks this usable action as only executable client-side. This disables support for "auto-use" in action slots.
     */
    clientSide?: true;
    /**
     * Marks this usable action as, when slotted in the action bar on an item, the item should be ignored and instead the type should be used.
     * Compatible with onlySlotItemQuality
     */
    onlySlotItemType?: true;
    /**
     * Marks this usable action as, when slotted in the action bar on an item, the item should be ignored and instead the quality should be used.
     * Compatible with onlySlotItemType
     */
    onlySlotItemQuality?: true;
    tooltip?(tooltip: Tooltip): any;
    forceDisplayWhenEmpty?: true;
}
export interface IUsableActionDefinitionSubmenu<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> extends IUsableActionDefinitionBase<REQUIREMENTS> {
    submenu(registrar: UsableActionRegistrar, using: IUsableActionUsing<REQUIREMENTS>): UsableActionRegistrar | void;
    execute?: undefined;
    isUsable?(player: Player, using: IUsableActionUsing<REQUIREMENTS>, context: IUsableActionExecutionContext): ReturnableUsableActionUsability;
    slottable?: undefined;
    forceDisplayWhenEmpty?: true;
}
export interface IUsableActionDefinitionExecutable<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> extends IUsableActionDefinitionBase<REQUIREMENTS> {
    slottable?: boolean;
    discoveredByDefault?: true | (() => boolean);
    submenu?: undefined;
    forceDisplayWhenEmpty?: undefined;
    execute(player: Player, using: IUsableActionUsing<REQUIREMENTS>, context: IUsableActionExecutionContext): any;
    isUsable?(player: Player, using: IUsableActionUsing<REQUIREMENTS>, context: IUsableActionExecutionContext): ReturnableUsableActionUsability;
}
export type IUsableActionDefinition<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> = IUsableActionDefinitionSubmenu<REQUIREMENTS> | IUsableActionDefinitionExecutable<REQUIREMENTS>;
export type ActionId = string | ActionType | UsableActionType;
export declare enum UsableActionDisplayContext {
    None = 0,
    Use = 1
}
