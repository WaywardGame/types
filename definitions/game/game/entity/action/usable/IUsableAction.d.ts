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
import type { DeityReal } from "@wayward/game/game/deity/Deity";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { ActionDisplayLevel, ActionType, IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { IActionNotUsable } from "@wayward/game/game/entity/action/IAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import type UsableActionRegistrar from "@wayward/game/game/entity/action/usable/UsableActionRegistrar";
import type { UsableActionTranslator } from "@wayward/game/game/entity/action/usable/UsableActionTranslator";
import type { UsableActionType, UsableActionTypePlaceholder } from "@wayward/game/game/entity/action/usable/UsableActionType";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type Human from "@wayward/game/game/entity/Human";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Player from "@wayward/game/game/entity/player/Player";
import type { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { IIcon } from "@wayward/game/game/inspection/InfoProvider";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import type { Quality } from "@wayward/game/game/IObject";
import type { IContainer, IItemDescription, ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type ItemFinder from "@wayward/game/game/item/ItemFinder";
import type { IItemFinderOptions } from "@wayward/game/game/item/ItemFinder";
import type { FindPathRange } from "@wayward/game/game/tile/ITerrain";
import { type IFindPathRange } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type Message from "@wayward/game/language/dictionary/Message";
import { TranslationArg } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import type Bindable from "@wayward/game/ui/input/Bindable";
import type { ItemDetailIconLocation } from "@wayward/game/ui/screen/screens/game/component/item/IItemComponent";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type { HighlightSelector } from "@wayward/game/ui/util/IHighlight";
import type HashSet from "@wayward/utilities/collection/set/HashSet";
export interface IUsableActionRequirement<TYPE> {
    allowNone?: true;
    validate?(player: Player, value: TYPE): boolean;
    find?(player: Player, provided?: IUsableActionPossibleUsing): TYPE | false | undefined;
    getMissingName?(): Translation;
}
export declare namespace IUsableActionRequirement {
    interface Maybe<TYPE> {
        allowNone: true;
        validate(player: Player, value: TYPE): boolean;
    }
    type Always = true;
    function isValid<T>(result: false | T | undefined, option: true | IUsableActionRequirement<T> | undefined): boolean;
}
export interface IUsableActionItemRequirement extends Omit<IUsableActionRequirement<Item>, "find"> {
    validateType?(player: Player, value: ItemType, description?: IItemDescription): boolean;
    finder?: false | ((player: Player, defaultOptions?: IItemFinderOptions, provided?: Omit<IUsableActionPossibleUsing, "item">) => ItemFinder | undefined);
    requiresQuality?: true;
    requiresType?: true;
    cannotDamageItem?: true;
}
export declare namespace IUsableActionItemRequirement {
    function hasFinder(requirements?: IUsableActionRequirements): boolean;
    function allowsNoItem(requirements?: IUsableActionRequirements): boolean;
}
export interface IUsableActionRequirements {
    /**
     * For reference: I hate this.
     *
     * - `undefined` for no item, no type, no item finder
     * - `true` to require an item to be specified, *not found*
     * - `IUsableActionItemRequirement` for anything else
     *   - To require that the slot gets an item from a default item finder, include `validate: () => true,` (it's horrible)
     *   - To implement a custom item finder, pass it in the `finder` property
     *   - To specify that the slot can have no item stuff specified too, include `allowNone: true,`
     *     - To specify that the slot requires an item type at minimum, however, include `requiresType: true,`
     *   - To force the actions system to pass in an `itemQuality` in the action `using` even when an item is provided, include `requiresQuality: true,`
     */
    item?: true | IUsableActionItemRequirement;
    doodad?: true | IUsableActionRequirement<Doodad>;
    vehicle?: true | IUsableActionRequirement<Doodad>;
    creature?: true | IUsableActionRequirement<Creature>;
    npc?: true | IUsableActionRequirement<NPC>;
    /**
     * Replaces the calculated `IUsableActionPossibleUsing` with a new one,
     * ...or returns `false` or a `Message` if it's invalid in some way
     * ...or returns `undefined` to use the default
     */
    map?(using: NoInfer<IUsableActionUsing<this>>): NoInfer<IUsableActionUsing<this>> | Message | false | undefined;
}
export interface IUsableActionPossibleUsing {
    targetTile?: Tile;
    fromTile?: Tile;
    item?: Item;
    itemType?: ItemType;
    itemQuality?: ArrayOr<Quality>;
    container?: IContainer;
    doodad?: Doodad;
    vehicle?: Doodad;
    creature?: Creature;
    npc?: NPC;
    misc?: any;
}
export declare namespace IUsableActionPossibleUsing {
    function isLoaded(human: Human, using: IUsableActionPossibleUsing): boolean;
}
export interface IUsableActionUsing<REQUIREMENTS extends IUsableActionRequirements> {
    targetTile: Tile;
    fromTile: Tile;
    item: ((REQUIREMENTS["item"] extends true ? Item : never) | (undefined extends REQUIREMENTS["item"] ? undefined : never) | (REQUIREMENTS["item"] extends {
        cannotDamageItem: true;
    } ? Item : never) | (REQUIREMENTS["item"] extends {
        allowNone: true;
    } ? Item | undefined : never) | (REQUIREMENTS["item"] extends {
        validate(player: Player, value: Item): boolean;
    } ? Item : never) | (REQUIREMENTS["item"] extends {
        validateType(player: Player, value: ItemType, description?: IItemDescription): boolean;
    } ? Item : never) | (REQUIREMENTS["item"] extends {
        finder: ItemFinder;
    } ? Item : never) | (REQUIREMENTS["item"] extends {
        allowOnlyItemType(player: Player, type: ItemType): boolean;
    } ? undefined : never));
    itemType: ((REQUIREMENTS["item"] extends true ? ItemType : never) | (REQUIREMENTS["item"] extends {
        cannotDamageItem: true;
    } ? ItemType : never) | (undefined extends REQUIREMENTS["item"] ? undefined : never) | (REQUIREMENTS["item"] extends {
        allowOnlyItemType(player: Player, type: ItemType): boolean;
    } ? ItemType : never) | (REQUIREMENTS["item"] extends {
        requiresType: true;
    } ? ItemType : ((REQUIREMENTS["item"] extends {
        validate(player: Player, value: Item): boolean;
    } ? ItemType | undefined : never) | (REQUIREMENTS["item"] extends {
        validateType(player: Player, value: ItemType, description?: IItemDescription): boolean;
    } ? ItemType | undefined : never))) | (REQUIREMENTS["item"] extends {
        finder: ItemFinder;
    } ? ItemType : never) | (REQUIREMENTS["item"] extends {
        allowNone: true;
    } ? REQUIREMENTS["item"] extends {
        requiresType: true;
    } ? never : undefined : never));
    container?: ((REQUIREMENTS["item"] extends true ? IContainer : never) | (REQUIREMENTS["item"] extends {
        allowOnlyItemType(player: Player, type: ItemType): boolean;
    } ? IContainer : never) | (REQUIREMENTS["item"] extends {
        requiresType: true;
    } ? IContainer : ((REQUIREMENTS["item"] extends {
        validate(player: Player, value: Item): boolean;
    } ? IContainer : never) | (REQUIREMENTS["item"] extends {
        validateType(player: Player, value: ItemType, description?: IItemDescription): boolean;
    } ? IContainer : never))) | (REQUIREMENTS["item"] extends {
        finder: ItemFinder;
    } ? IContainer : never));
    itemQuality: ((REQUIREMENTS["item"] extends true ? ArrayOr<Quality> : never) | (undefined extends REQUIREMENTS["item"] ? undefined : never) | (REQUIREMENTS["item"] extends {
        allowNone: true;
    } ? undefined : never) | (REQUIREMENTS["item"] extends {
        validate(player: Player, value: Item): boolean;
    } ? ArrayOr<Quality> | undefined : never) | (REQUIREMENTS["item"] extends {
        validateType(player: Player, value: ItemType, description?: IItemDescription): boolean;
    } ? ArrayOr<Quality> | undefined : never) | (REQUIREMENTS["item"] extends {
        finder: ItemFinder;
    } ? ArrayOr<Quality> : never) | (REQUIREMENTS["item"] extends {
        allowOnlyItemType(player: Player, type: ItemType): boolean;
    } ? ArrayOr<Quality> : never));
    doodad: ((REQUIREMENTS["doodad"] extends true ? Doodad : never) | (undefined extends REQUIREMENTS["doodad"] ? undefined : never) | (REQUIREMENTS["doodad"] extends {
        allowNone: true;
    } ? undefined : never) | (REQUIREMENTS["doodad"] extends {
        validate(player: Player, value: Doodad): boolean;
    } ? Doodad : never) | (REQUIREMENTS["doodad"] extends {
        find(player: Player, provided?: IUsableActionPossibleUsing): Doodad;
    } ? Doodad : never));
    vehicle: ((REQUIREMENTS["vehicle"] extends true ? Doodad : never) | (undefined extends REQUIREMENTS["vehicle"] ? undefined : never) | (REQUIREMENTS["vehicle"] extends {
        allowNone: true;
    } ? undefined : never) | (REQUIREMENTS["vehicle"] extends {
        validate(player: Player, value: Doodad): boolean;
    } ? Doodad : never) | (REQUIREMENTS["vehicle"] extends {
        find(player: Player, provided?: IUsableActionPossibleUsing): Doodad;
    } ? Doodad : never));
    creature: ((REQUIREMENTS["creature"] extends true ? Creature : never) | (undefined extends REQUIREMENTS["creature"] ? undefined : never) | (REQUIREMENTS["creature"] extends {
        allowNone: true;
    } ? undefined : never) | (REQUIREMENTS["creature"] extends {
        validate(player: Player, value: Creature): boolean;
    } ? Creature : never) | (REQUIREMENTS["creature"] extends {
        find(player: Player, provided?: IUsableActionPossibleUsing): Creature;
    } ? Creature : never));
    npc: ((REQUIREMENTS["npc"] extends true ? NPC : never) | (undefined extends REQUIREMENTS["npc"] ? undefined : never) | (REQUIREMENTS["npc"] extends {
        allowNone: true;
    } ? undefined : never) | (REQUIREMENTS["npc"] extends {
        validate(player: Player, value: NPC): boolean;
    } ? NPC : never) | (REQUIREMENTS["npc"] extends {
        find(player: Player, provided?: IUsableActionPossibleUsing): NPC;
    } ? NPC : never));
    misc: any;
}
export declare namespace IUsableActionUsing {
    function fromTarget<USING extends IUsableActionPossibleUsing>(using: USING): USING;
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
    function create(message?: Message, ...args: TranslationArg[]): IUsableActionNotUsable;
    function sendMessage(notUsable: IActionNotUsable): void;
    function equals(a: IUsableActionNotUsable, b: IUsableActionNotUsable): boolean;
}
export type UsableActionUsability<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> = IUsableActionUsable<REQUIREMENTS> | IUsableActionNotUsable;
export declare enum UsableActionExecutionContext {
    Generic = 0,
    ContextMenu = 1,
    ActionBar = 2,
    ActionBarAutoUse = 3,
    ActionBarHoveredTile = 4
}
export interface IUsableActionExecutionContext {
    context: UsableActionExecutionContext;
    getItemContainerFilterText(): string | undefined;
}
export interface IUsableActionDefinitionBase<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> {
    id?: string | number;
    /**
     * Whether this action can be slotted in the action bar. Defaults to `true`.
     *
     * If set to an `ActionId`, the `ActionId` will be attempted to be slotted instead.
     */
    slottable?: boolean | ActionId;
    /**
     * Whether this action is "applicable" given this player and these "provided" objects.
     * @param player The player executing this action. This isn't always the local player!
     * @param using What the player is using — items, doodads, etc.
     */
    isApplicable?(player: Player, using: IUsableActionPossibleUsing): boolean;
    /**
     * A handler for registering translations for the action's name, description, etc.
     */
    translate?: (translator: UsableActionTranslator, using?: IUsableActionPossibleUsing) => UsableActionTranslator;
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
    highlight?(selectors: Array<HighlightSelector | undefined>, using: IUsableActionPossibleUsing): any;
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
     * The display level of the action when there's an error with its requirements.
     */
    requirementsErrorDisplayLevel?: ActionDisplayLevel;
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
     * Compatible with noSlotQuality
     */
    noSlotItem?: true;
    /**
     * Marks this usable action as, when slotted in the action bar on an item, the item & quality should be ignored.
     * Compatible with noSlotItem
     */
    noSlotQuality?: true;
    tooltip?(tooltip: Tooltip): any;
    forceDisplayWhenEmpty?: true;
    alignment?: SupplierOr<ArrayOr<DeityReal> | undefined, [IUsableActionPossibleUsing]>;
    /**
     * By default, actions are assumed to be interacting with the tile in front of them.
     * This recategorises the action as one that either is unrelated to the tile in front, or interacting with the tile below.
     *
     * This affects where the game chooses to path the player to in order to use the action.
     */
    interactionDistance?: InteractionDistance | ((using: IUsableActionPossibleUsing) => InteractionDistance | undefined);
    /**
     * Whether action history should remember the tile this action was used on
     */
    historyRememberLocation?: true;
    /**
     * Whether to target the tile the mouse is over by default.
     */
    targetHoveredTile?: true;
}
export declare enum InteractionDistanceType {
    SameTile = 0,
    AdjacentTile = 1,
    InfiniteRange = 2
}
export interface IInteractionDistanceRanged extends IFindPathRange {
}
export type InteractionDistance = InteractionDistanceType.SameTile | InteractionDistanceType.AdjacentTile | InteractionDistanceType.InfiniteRange | IInteractionDistanceRanged;
export declare namespace InteractionDistance {
    function convertToFindPathRange(distance: InteractionDistance): FindPathRange;
    function findPathPreferred(targetTile: Tile, distance: InteractionDistance | undefined, clientSide: boolean): Tile[] | undefined;
}
export interface IUsableActionDefinitionSubmenu<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> extends IUsableActionDefinitionBase<REQUIREMENTS> {
    submenu(registrar: UsableActionRegistrar, using: IUsableActionUsing<REQUIREMENTS>): UsableActionRegistrar | void;
    execute?: undefined;
    isUsable?(player: Player, using: IUsableActionUsing<REQUIREMENTS>, context: IUsableActionExecutionContext): ReturnableUsableActionUsability;
    slottable?: boolean | ActionId;
    forceDisplayWhenEmpty?: true;
}
export interface IUsableActionDefinitionExecutable<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements> extends IUsableActionDefinitionBase<REQUIREMENTS> {
    slottable?: boolean | ActionId;
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
