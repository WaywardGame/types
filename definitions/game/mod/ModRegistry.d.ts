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
import type { Music, SfxType } from "@wayward/game/audio/IAudio";
import type { Command, CommandCallback } from "@wayward/game/command/ICommand";
import type { BiomeType, IBiomeDescription } from "@wayward/game/game/biome/IBiome";
import type { DoodadTag, DoodadType, DoodadTypeExtra, DoodadTypeGroup, IDoodadDescription, IDoodadGroupDescription } from "@wayward/game/game/doodad/IDoodad";
import type { EntityTag } from "@wayward/game/game/entity/IEntity";
import type { EquipType } from "@wayward/game/game/entity/IHuman";
import type { SkillType } from "../game/entity/skill/ISkills";
import type { Stat } from "@wayward/game/game/entity/IStats";
import type { IStatDescription } from "@wayward/game/game/entity/StatDescriptions";
import type { ActionType, IActionDescription } from "@wayward/game/game/entity/action/IAction";
import type UsableActionRegistrar from "@wayward/game/game/entity/action/usable/UsableActionRegistrar";
import type { UsableActionGenerator } from "@wayward/game/game/entity/action/usable/UsableActionRegistrar";
import type { UsableActionType } from "@wayward/game/game/entity/action/usable/UsableActionType";
import type { UsableActionSet, usableActionSets } from "@wayward/game/game/entity/action/usable/actions/UsableActionsMain";
import type { CreatureType, ICreatureDescription, TileGroup } from "@wayward/game/game/entity/creature/ICreature";
import type { ICorpseDescription } from "@wayward/game/game/entity/creature/corpse/ICorpse";
import type { NPCType } from "@wayward/game/game/entity/npc/INPCs";
import type { INPCClass } from "@wayward/game/game/entity/npc/NPCS";
import type { Source } from "@wayward/game/game/entity/player/IMessageManager";
import type { INoteDescription } from "@wayward/game/game/entity/player/note/NoteManager";
import type { QuestType } from "@wayward/game/game/entity/player/quest/quest/IQuest";
import type { Quest } from "@wayward/game/game/entity/player/quest/quest/Quest";
import type { QuestRequirementType } from "@wayward/game/game/entity/player/quest/requirement/IRequirement";
import type { QuestRequirement } from "@wayward/game/game/entity/player/quest/requirement/Requirement";
import type { ISkillDescription } from "@wayward/game/game/entity/skill/ISkills";
import type { IStatusDescription, StatusType } from "@wayward/game/game/entity/status/IStatus";
import type { StatusClass } from "@wayward/game/game/entity/status/Status";
import type { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { InspectionClass } from "@wayward/game/game/inspection/InspectionTypeMap";
import type { IItemDescription, IItemGroupDescription, ItemTag, ItemType, ItemTypeExtra, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type { IMagicalPropertyDescription } from "@wayward/game/game/magic/MagicalPropertyDescriptions";
import type MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import type { ILoadingDescription } from "@wayward/game/game/meta/Loading";
import type { IPromptDescriptionBase, Prompt } from "@wayward/game/game/meta/prompt/IPrompt";
import type PromptDescriptionFactory from "@wayward/game/game/meta/prompt/PromptDescriptionFactory";
import type { ITerrainDescription, OverlayType, TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { ITileEventDescription, TileEventType } from "@wayward/game/game/tile/ITileEvent";
import type { ITerrainLootItem } from "@wayward/game/game/tile/TerrainResources";
import type Dictionary from "@wayward/game/language/Dictionary";
import type Language from "@wayward/game/language/Language";
import type LanguageExtension from "@wayward/game/language/LanguageExtension";
import type InterruptChoice from "@wayward/game/language/dictionary/InterruptChoice";
import type Message from "@wayward/game/language/dictionary/Message";
import type Note from "@wayward/game/language/dictionary/Note";
import type { IRegistry } from "@wayward/game/mod/BaseMod";
import type { ModRegistrationTime } from "@wayward/game/mod/BaseMod";
import type InterModRegistry from "@wayward/game/mod/InterModRegistry";
import type { InterModRegistration } from "@wayward/game/mod/InterModRegistry";
import type { ModInformation } from "@wayward/game/mod/ModInformation";
import type { IPacketClass } from "@wayward/game/multiplayer/packets/Packets";
import type { ITerrainDecorationBase, TerrainDecoration } from "@wayward/game/renderer/Decorations";
import type { IOverlayDescription } from "@wayward/game/renderer/Overlays";
import type { TileLayerType } from "@wayward/game/renderer/world/IWorldRenderer";
import type Bindable from "@wayward/game/ui/input/Bindable";
import type { Binding } from "@wayward/game/ui/input/Bindings";
import type { DialogId, IDialogDescription } from "@wayward/game/ui/screen/screens/game/Dialogs";
import type { QuadrantComponentId } from "@wayward/game/ui/screen/screens/game/IGameScreenApi";
import type Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import type QuadrantComponent from "@wayward/game/ui/screen/screens/game/component/QuadrantComponent";
import type { IMenuBarButtonDescription, MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
import type { IStatDisplayDescription } from "@wayward/game/ui/screen/screens/game/static/stats/IStatDisplayDescription";
import type { HelpArticle, IHelpArticle } from "@wayward/game/ui/screen/screens/menu/menus/help/IHelpArticle";
import type { ModOptionSectionInitializer } from "@wayward/game/ui/screen/screens/menu/menus/options/TabMods";
import type WorldZ from "@wayward/utilities/game/WorldZ";
import Objects from "@wayward/utilities/object/Objects";
export interface IModdable {
    /**
     * Do not provide or modify this value, only reference it. This is set by the modding system during the process of registration.
     */
    mod?: ModInformation;
}
export declare const SYMBOL_MOD_REGISTRATIONS: unique symbol;
export declare enum ModRegistrationType {
    Action = 0,
    Bindable = 1,
    Biome = 2,
    Bulk = 3,
    Command = 4,
    Creature = 5,
    Dialog = 6,
    Dictionary = 7,
    Doodad = 8,
    DoodadExtra = 9,
    DoodadGroup = 10,
    DoodadTag = 11,
    EntityTag = 12,
    EquipType = 13,
    GenericEnum = 14,
    HelpArticle = 15,
    InspectionType = 16,
    InterModRegistration = 17,
    InterModRegistry = 18,
    Interrupt = 19,
    InterruptChoice = 20,
    Item = 21,
    ItemExtra = 22,
    ItemGroup = 23,
    ItemTag = 24,
    Language = 25,
    LanguageExtension = 26,
    Load = 27,
    MagicalProperty = 28,
    MenuBarButton = 29,
    Message = 30,
    MessageSource = 31,
    MusicTrack = 32,
    Note = 33,
    NPC = 34,
    OptionsSection = 35,
    Overlay = 36,
    Override = 37,
    Packet = 38,
    Prompt = 39,
    QuadrantComponent = 40,
    Quest = 41,
    QuestRequirement = 42,
    Registry = 43,
    Skill = 44,
    SoundEffect = 45,
    Stat = 46,
    Status = 47,
    Terrain = 48,
    TerrainDecoration = 49,
    TileEvent = 50,
    TileGroup = 51,
    TileLayerType = 52,
    UsableActions = 53,
    UsableActionType = 54,
    UsableActionTypePlaceholder = 55,
    WorldLayer = 56
}
export interface ILanguageRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Language;
    instance: Language;
}
export interface ILanguageExtensionRegistration extends IBaseModRegistration {
    type: ModRegistrationType.LanguageExtension;
    instance: LanguageExtension;
}
export interface IInspectionTypeRegistration extends IBaseModRegistration {
    type: ModRegistrationType.InspectionType;
    name: string;
    handlerClass: InspectionClass;
}
export interface IGenericEnumRegistration extends IBaseModRegistration {
    type: ModRegistrationType.GenericEnum;
    enumObject: any;
    name: string;
}
export interface IMusicTrackRegistration extends IBaseModRegistration {
    type: ModRegistrationType.MusicTrack;
    name: string;
}
export interface ISoundEffectRegistration extends IBaseModRegistration {
    type: ModRegistrationType.SoundEffect;
    name: string;
    variations?: number;
}
export interface IPacketRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Packet;
    class: IPacketClass;
}
export interface INPCRegistration extends IBaseModRegistration {
    type: ModRegistrationType.NPC;
    name: string;
    class: INPCClass;
}
export interface IActionRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Action;
    name: string;
    description?: IActionDescription;
}
export interface IHelpArticleRegistration extends IBaseModRegistration {
    type: ModRegistrationType.HelpArticle;
    name: string;
    description: IHelpArticle;
}
export interface IMenuBarButtonRegistration extends IBaseModRegistration {
    type: ModRegistrationType.MenuBarButton;
    name: string;
    description: IMenuBarButtonDescription;
}
export interface INoteRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Note;
    name: string;
    description?: INoteDescription;
}
export interface ICommandRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Command;
    name: string;
}
export interface IInterruptChoiceRegistration extends IBaseModRegistration {
    type: ModRegistrationType.InterruptChoice;
    name: string;
}
export interface IMessageSourceRegistration extends IBaseModRegistration {
    type: ModRegistrationType.MessageSource;
    name: string;
}
export interface IMessageRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Message;
    name: string;
}
export interface IInterruptRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Interrupt;
    name: string;
}
export interface IOverlayRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Overlay;
    name: string;
    description?: IOverlayDescription;
}
export interface IBindableRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Bindable;
    name: string;
    defaultBindings: Binding[];
}
export interface IBiomeRegistration<BiomeOptionsType = unknown> extends IBaseModRegistration {
    type: ModRegistrationType.Biome;
    name: string;
    description: IBiomeDescription<BiomeOptionsType>;
}
export interface IDictionaryRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Dictionary;
    name: string;
    dictionaryEnum: any;
}
export interface IOptionsSectionRegistration extends IBaseModRegistration {
    type: ModRegistrationType.OptionsSection;
}
export interface IRegistryRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Registry;
    class: new (mod: any) => any;
}
export interface IBulkRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Bulk;
    [SYMBOL_MOD_REGISTRATIONS]: any[];
}
export interface IDialogRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Dialog;
    name: string;
    description: IDialogDescription;
    class: new (id: number) => Dialog;
}
export interface IInterModRegistryRegistration extends IBaseModRegistration {
    type: ModRegistrationType.InterModRegistry;
    name: string;
}
export interface IInterModRegistration extends IBaseModRegistration {
    type: ModRegistrationType.InterModRegistration;
    modName: string;
    registryName: string;
    value: any;
}
export interface ISkillRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Skill;
    name: string;
    description?: ISkillDescription;
}
export interface IStatRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Stat;
    name: string;
    description?: IStatDisplayDescription & IStatDescription;
}
export interface IStatusRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Status;
    name: string;
    handlerClass: StatusClass;
    description: IStatusDescription;
}
export interface IItemRegistrationDescription extends IItemDescription {
    groups?: ItemTypeGroup[];
}
export interface IItemRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Item;
    name: string;
    description?: IItemRegistrationDescription;
}
export interface IItemExtraRegistration extends IBaseModRegistration {
    type: ModRegistrationType.ItemExtra;
    name: string;
}
export interface IDoodadExtraRegistration extends IBaseModRegistration {
    type: ModRegistrationType.DoodadExtra;
    name: string;
}
export interface ICreatureRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Creature;
    name: string;
    description: ICreatureDescription;
    corpseDescription?: ICorpseDescription;
}
export interface ITerrainRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Terrain;
    name: string;
    description?: ITerrainRegistrationDescription;
}
export interface ITerrainDecorationRegistration extends IBaseModRegistration {
    name: string;
    type: ModRegistrationType.TerrainDecoration;
    description?: ITerrainDecorationBase;
}
export interface ITerrainRegistrationDescription extends ITerrainDescription {
    resources?: ITerrainLootItem[];
    defaultItem?: ItemType;
}
export interface ITileGroupRegistration extends IBaseModRegistration {
    type: ModRegistrationType.TileGroup;
    name: string;
    description: Set<TerrainType>;
}
export interface IDoodadRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Doodad;
    name: string;
    description?: IDoodadDescription;
}
export interface IDoodadGroupRegistration extends IBaseModRegistration {
    type: ModRegistrationType.DoodadGroup;
    name: string;
    description: IDoodadGroupDescription;
}
export interface ITileEventRegistration extends IBaseModRegistration {
    type: ModRegistrationType.TileEvent;
    name: string;
    description?: ITileEventDescription;
}
export interface IItemGroupRegistration extends IBaseModRegistration {
    type: ModRegistrationType.ItemGroup;
    name: string;
    description: IItemGroupDescription;
}
export interface IQuestRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Quest;
    name: string;
    description: Quest;
}
export interface IQuestRequirementRegistration extends IBaseModRegistration {
    type: ModRegistrationType.QuestRequirement;
    name: string;
    description: QuestRequirement;
}
export type PromptConstructorFunction<DESCRIPTION extends IPromptDescriptionBase<any[]>> = (type: Prompt, factory: PromptDescriptionFactory) => DESCRIPTION;
export interface IPromptRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Prompt;
    name: string;
    construct: PromptConstructorFunction<IPromptDescriptionBase<any[]>>;
}
export interface ILoadRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Load;
    name: string;
    description: ILoadingDescription<any[]>;
}
export interface IWorldLayerRegistration extends IBaseModRegistration {
    type: ModRegistrationType.WorldLayer;
    name: string;
}
export interface ITileLayerTypeRegistration extends IBaseModRegistration {
    type: ModRegistrationType.TileLayerType;
    name: string;
}
export interface IQuadrantComponentRegistration extends IBaseModRegistration {
    type: ModRegistrationType.QuadrantComponent;
    name: string;
    class: new (id: QuadrantComponentId) => QuadrantComponent;
}
export interface IUsableActionsRegistration extends IBaseModRegistration {
    type: ModRegistrationType.UsableActions;
    name: string;
    set: UsableActionSet;
    registrationHandler: (registrar: UsableActionRegistrar, ...args: any[]) => any;
}
export interface IUsableActionTypeRegistration extends IBaseModRegistration {
    type: ModRegistrationType.UsableActionType;
    name: string;
}
export interface IUsableActionTypePlaceholderRegistration extends IBaseModRegistration {
    type: ModRegistrationType.UsableActionTypePlaceholder;
    name: string;
}
export interface IMagicalPropertyRegistration extends IBaseModRegistration {
    type: ModRegistrationType.MagicalProperty;
    name: string;
    description: IMagicalPropertyDescription;
}
export interface IItemTagRegistration extends IBaseModRegistration {
    type: ModRegistrationType.ItemTag;
    name: string;
}
export interface IDoodadTagRegistration extends IBaseModRegistration {
    type: ModRegistrationType.DoodadTag;
    name: string;
}
export interface IEntityTagRegistration extends IBaseModRegistration {
    type: ModRegistrationType.EntityTag;
    name: string;
}
export interface IEquipTypeDescription extends IModdable {
    /**
     * If you need to set up an "internal" slot — such as the vanilla "EquipType.Held" which is an internal slot meaning "main hand or off hand."
     */
    disableSlot?: true;
    /**
     * Set this to true to allow the player to change which item is slotted in this slot for free. (IE, like the main hand and off hand slots.)
     */
    freeSlot?: true;
    /**
     * An item group to automatically assign to all items equippable in this equip slot.
     */
    itemGroup?: ItemTypeGroup;
}
export interface IEquipTypeRegistration extends IBaseModRegistration {
    type: ModRegistrationType.EquipType;
    name: string;
    description: IEquipTypeDescription;
}
export interface IOverrideDescription<OBJECT extends object, PROPERTY extends keyof OBJECT> {
    object: OBJECT;
    property: PROPERTY;
    value: OBJECT[PROPERTY];
}
export type OverrideDecorator<OBJECT extends object, PROPERTY extends keyof OBJECT> = (time: ModRegistrationTime, overrider: () => IOverrideDescription<OBJECT, PROPERTY>) => <K extends string | number | symbol, T extends Record<K, OBJECT>>(target: T, key: K) => void;
export interface IOverrideRegistration<OBJECT extends object, PROPERTY extends keyof OBJECT> extends IBaseModRegistration {
    type: ModRegistrationType.Override;
    time: ModRegistrationTime;
    overrider: () => IOverrideDescription<OBJECT, PROPERTY>;
}
export type ModRegistration = IActionRegistration | IBindableRegistration | IBiomeRegistration | IBulkRegistration | ICommandRegistration | ICreatureRegistration | IDialogRegistration | IDictionaryRegistration | IDoodadExtraRegistration | IDoodadGroupRegistration | IDoodadRegistration | IDoodadTagRegistration | IEntityTagRegistration | IEquipTypeRegistration | IGenericEnumRegistration | IHelpArticleRegistration | IInspectionTypeRegistration | IInterModRegistration | IInterModRegistryRegistration | IInterruptChoiceRegistration | IInterruptRegistration | IItemExtraRegistration | IItemGroupRegistration | IItemRegistration | IItemTagRegistration | ILanguageExtensionRegistration | ILanguageRegistration | ILoadRegistration | IMagicalPropertyRegistration | IMenuBarButtonRegistration | IMessageRegistration | IMessageSourceRegistration | IMusicTrackRegistration | INoteRegistration | INPCRegistration | IOptionsSectionRegistration | IOverlayRegistration | IOverrideRegistration<any, any> | IPacketRegistration | IPromptRegistration | IQuadrantComponentRegistration | IQuestRegistration | IQuestRequirementRegistration | IRegistryRegistration | ISkillRegistration | ISoundEffectRegistration | IStatRegistration | IStatusRegistration | ITerrainDecorationRegistration | ITerrainRegistration | ITileEventRegistration | ITileGroupRegistration | ITileLayerTypeRegistration | IUsableActionsRegistration | IUsableActionTypePlaceholderRegistration | IUsableActionTypeRegistration;
export declare const SYMBOL_SUPER_REGISTRY: unique symbol;
declare namespace Register {
    /**
     * Registers a class as a sub-registry. The class can contain its own `@Register` decorators, and they will be loaded by the higher-level registry.
     *
     * The decorated property will be injected with the constructed instance of the provided registry class.
     */
    function registry(cls: new (upperRegistry: any) => any): <K extends string | number | symbol, T extends Record<K, object>>(target: T, key: K) => void;
    /**
     * Registers a language.
     * @param instance The language instance.
     *
     * The decorated property will be injected with the provided language instance.
     */
    function language<L extends Language>(instance: L): <K extends string | number | symbol, T extends Record<K, L>>(target: T, key: K) => void;
    /**
     * Registers a language extension.
     * @param instance The language extension instance.
     *
     * The decorated property will be injected with the provided language extension instance.
     */
    function languageExtension<L extends LanguageExtension>(instance: L): <K extends string | number | symbol, T extends Record<K, L>>(target: T, key: K) => void;
    /**
     * Registers into an enum that we haven't added explicit modding support for.
     *
     * # Caveats!
     * - This will not work for enums associated with a descriptions/definitions record or map. **Only use it for enums that work on their own.**
     * - If we ever change the import path of the enum, **previous registrations to it will not persist**, so any registrations will be assigned new IDs.
     * - Any enums registered in this way will not work on servers.
     *
     * @param enumObject The enum object to register into.
     * @param name The name of this mod registration in the enum.
     */
    function genericEnum<E>(enumObject: E, name: string): <K extends string | number | symbol, T extends Record<K, E[keyof E]>>(target: T, key: K) => void;
    /**
     * Registers a music track.
     * @param name The name of the music track.
     * @param description The definition of the music track.
     *
     * The decorated property will be injected with the id of the registered music track.
     */
    function musicTrack(name: string): <K extends string | number | symbol, T extends Record<K, Music>>(target: T, key: K) => void;
    /**
     * Registers a sound effect.
     * @param name The name of the sound effect.
     * @param description The definition of the sound effect.
     *
     * The decorated property will be injected with the id of the registered sound effect.
     */
    function soundEffect(name: string, variations?: number): <K extends string | number | symbol, T extends Record<K, SfxType>>(target: T, key: K) => void;
    /**
     * Registers a packet.
     * @param cls The packet class.
     *
     * The decorated property will be injected with the passed packet class.
     */
    function packet<C extends IPacketClass>(cls: C): <K extends string | number | symbol, T extends Record<K, C>>(target: T, key: K) => void;
    /**
     * Registers an NPC.
     * @param cls The NPC class.
     *
     * The decorated property will be injected with the NPCType of the registered NPC.
     */
    function npc<C extends INPCClass>(name: string, cls: C): <K extends string | number | symbol, T extends Record<K, NPCType>>(target: T, key: K) => void;
    /**
     * Registers a help article.
     * @param name The name of the help article.
     * @param description The definition of the help article.
     *
     * The decorated property will be injected with the id of the registered help article.
     */
    function helpArticle(name: string, description: IHelpArticle): <K extends string | number | symbol, T extends Record<K, HelpArticle>>(target: T, key: K) => void;
    /**
     * Registers a note.
     * @param name The name of the note.
     * @param description The definition of the note.
     *
     * The decorated property will be injected with the id of the registered note.
     */
    function note(name: string, description?: INoteDescription): <K extends string | number | symbol, T extends Record<K, Note>>(target: T, key: K) => void;
    /**
     * Registers a skill.
     * @param name The name of the skill.
     * @param description The definition of the skill.
     *
     * The decorated property will be injected with the id of the registered skill.
     */
    function skill(name: string, description?: ISkillDescription): <K extends string | number | symbol, T extends Record<K, SkillType>>(target: T, key: K) => void;
    /**
     * Registers a stat.
     * @param name The name of the stat.
     * @param description The definition of the stat.
     *
     * The decorated property will be injected with the id of the registered stat.
     */
    function stat(name: string, description?: IStatDisplayDescription & IStatDescription): <K extends string | number | symbol, T extends Record<K, Stat>>(target: T, key: K) => void;
    /**
     * Registers a status effect.
     * @param name The name of the status effect.
     * @param description The definition of the status effect.
     *
     * The decorated property will be injected with the id of the registered status effect.
     */
    function status(name: string, handlerClass: StatusClass, description: IStatusDescription): <K extends string | number | symbol, T extends Record<K, StatusType>>(target: T, key: K) => void;
    /**
     * Registers an item.
     * @param name The name of the item.
     * @param description The definition of the item.
     *
     * The decorated property will be injected with the id of the registered item.
     */
    function item(name: string, description?: IItemRegistrationDescription): <K extends string | number | symbol, T extends Record<K, ItemType>>(target: T, key: K) => void;
    /**
     * Registers a biome.
     * @param name The name of the biome.
     * @param description The definition of the biome.
     *
     * The decorated property will be injected with the id of the registered biome.
     */
    function biome<BiomeOptionsType = unknown>(name: string, description: IBiomeDescription<BiomeOptionsType>): <K extends string | number | symbol, T extends Record<K, BiomeType>>(target: T, key: K) => void;
    /**
     * Registers a creature.
     * @param name The name of the creature.
     * @param description The definition of the creature.
     *
     * The decorated property will be injected with the id of the registered creature.
     */
    function creature(name: string, description: ICreatureDescription, corpseDescription?: ICorpseDescription): <K extends string | number | symbol, T extends Record<K, CreatureType>>(target: T, key: K) => void;
    /**
     * Registers a terrain.
     * @param name The name of the terrain.
     * @param description The definition of the terrain.
     *
     * The decorated property will be injected with the id of the registered terrain.
     */
    function terrain(name: string, description?: ITerrainRegistrationDescription): <K extends string | number | symbol, T extends Record<K, TerrainType>>(target: T, key: K) => void;
    /**
     * Registers a tile group.
     * @param name The name of the tile group.
     * @param description The definition of the tile group.
     *
     * The decorated property will be injected with the id of the registered tile group.
     */
    function tileGroup(name: string, description: Set<TerrainType>): <K extends string | number | symbol, T extends Record<K, TileGroup>>(target: T, key: K) => void;
    /**
     * Registers a terrain decoration.
     * @param description The definition of the terrain decoration.
     *
     * The decorated property will be injected with the id of the registered terrain.
     */
    function terrainDecoration(name: string, description: ITerrainDecorationBase): <K extends string | number | symbol, T extends Record<K, TerrainDecoration>>(target: T, key: K) => void;
    /**
     * Registers a doodad.
     * @param name The name of the doodad.
     * @param description The definition of the doodad.
     *
     * The decorated property will be injected with the id of the registered doodad.
     */
    function doodad(name: string, description?: IDoodadDescription): <K extends string | number | symbol, T extends Record<K, DoodadType>>(target: T, key: K) => void;
    /**
     * Registers a tile event.
     * @param name The name of the tile event.
     * @param description The definition of the tile event.
     *
     * The decorated property will be injected with the id of the registered tile event.
     */
    function tileEvent(name: string, description?: ITileEventDescription): <K extends string | number | symbol, T extends Record<K, TileEventType>>(target: T, key: K) => void;
    /**
     * Registers a dialog.
     * @param name The name of the dialog.
     * @param description The definition of the dialog. (Max/min/default sizes & positioning)
     * @param cls The dialog's class. It will be passed the `IGameScreenApi`, and its `DialogId` on construction.
     *
     * The decorated property will be injected with the id of the registered dialog.
     */
    function dialog(name: string, description: IDialogDescription, cls: new (id: number) => Dialog): <K extends string | number | symbol, T extends Record<K, DialogId>>(target: T, key: K) => void;
    /**
     * Registers a quadrant component.
     * @param name The name of this component.
     */
    function quadrantComponent(name: string, cls: new (id: QuadrantComponentId) => QuadrantComponent): (target: any, key: string) => void;
    /**
     * Registers a bindable.
     * @param name The name of the bindable.
     * @param defaultBindings The default bindings of the bindable.
     *
     * For example, `@Register.bindable("Cut", { key: "KeyX" }) public bindableCut: Bindable;`
     *
     * The decorated property will be injected with the id of the registered note.
     */
    function bindable(name: string, ...defaultBindings: Binding[]): <K extends string | number | symbol, T extends Record<K, Bindable>>(target: T, key: K) => void;
    /**
     * Registers a dictionary.
     * @param name The name of the dictionary.
     * @param dictionaryEnum The enum representing the dictionary; containing all its entries.
     *
     * The decorated property will be injected with the id of the registered dictionary.
     */
    function dictionary(name: string, dictionaryEnum: any): <K extends string | number | symbol, T extends Record<K, Dictionary>>(target: T, key: K) => void;
    /**
     * Registers a message.
     * @param name The name of the message.
     *
     * The decorated property will be injected with the id of the registered message.
     *
     * Note: The method does not support passing a translated English string. To translate your message, create a language
     * file that extends English.
     */
    function message(name: string): <K extends string | number | symbol, T extends Record<K, Message>>(target: T, key: K) => void;
    /**
     * Registers a prompt.
     * @param name The name of the prompt.
     *
     * The decorated property will be injected with the id of the registered prompt.
     */
    function prompt<DESCRIPTION extends IPromptDescriptionBase<any[]>>(name: string, construct: PromptConstructorFunction<DESCRIPTION>): <K extends string | number | symbol, T extends Record<K, DESCRIPTION>>(target: T, key: K) => void;
    /**
     * Registers an interrupt choice.
     * @param name The name of the interrupt choice.
     *
     * The decorated property will be injected with the id of the registered interrupt choice.
     */
    function interruptChoice(name: string): <K extends string | number | symbol, T extends Record<K, InterruptChoice>>(target: T, key: K) => void;
    /**
     * Registers a load type.
     * @param name The name of the load type.
     * @param description The definition of the load type.
     *
     * The decorated property will be injected with the id of the registered load type.
     */
    function load(name: string, description: ILoadingDescription<any[]>): <K extends string | number | symbol, T extends Record<K, Message>>(target: T, key: K) => void;
    /**
     * Registers a message source.
     * @param name The name of the message source.
     *
     * The decorated property will be injected with the id of the registered message source.
     */
    function messageSource(name: string): <K extends string | number | symbol, T extends Record<K, Source>>(target: T, key: K) => void;
    /**
     * Registers an overlay.
     * @param description The definition of the overlay.
     */
    function overlay(name: string, description?: IOverlayDescription): <K extends string | number | symbol, T extends Record<K, OverlayType>>(target: T, key: K) => void;
    /**
     * Registers an inspection type, which will appear in tile tooltips or the inspect dialog.
     * @param handlerClass The class for the handler of the inspection type.
     */
    function inspectionType(name: string, handlerClass: InspectionClass): <K extends string | number | symbol, T extends Record<K, InspectType>>(target: T, key: K) => void;
    /**
     * Registers a menu bar button.
     * @param description The definition of the menu bar button.
     */
    function menuBarButton(name: string, description: IMenuBarButtonDescription): <K extends string | number | symbol, T extends Record<K, MenuBarButtonType>>(target: T, key: K) => void;
    /**
     * Registers an item group.
     * @param description The definition of the item group.
     */
    function itemGroup(name: string, description: IItemGroupDescription): <K extends string | number | symbol, T extends Record<K, ItemTypeGroup>>(target: T, key: K) => void;
    /**
     * Registers a doodad group.
     * @param description The definition of the doodad group.
     */
    function doodadGroup(name: string, description: IDoodadGroupDescription): <K extends string | number | symbol, T extends Record<K, DoodadTypeGroup>>(target: T, key: K) => void;
    /**
     * Registers a world layer.
     */
    function worldLayer(name: string): <K extends string | number | symbol, T extends Record<K, WorldZ>>(target: T, key: K) => void;
    /**
     * Registers a world renderer layer.
     */
    function tileLayer(name: string): <K extends string | number | symbol, T extends Record<K, TileLayerType>>(target: T, key: K) => void;
    /**
     * Registers a quest.
     * @param description The definition of the quest.
     */
    function quest(name: string, description: Quest): <K extends string | number | symbol, T extends Record<K, QuestType>>(target: T, key: K) => void;
    /**
     * Registers a quest requirement.
     * @param description The definition of the quest requirement.
     */
    function questRequirement(name: string, description: QuestRequirement<any, any>): <K extends string | number | symbol, T extends Record<K, QuestRequirementType>>(target: T, key: K) => void;
    /**
     * Registers an action.
     * @param description The definition of this action.
     */
    function action(name: string, description?: IActionDescription): <K extends string | number | symbol, T extends Record<K, ActionType>>(target: T, key: K) => void;
    /**
     * Registers a magical property.
     * @param description The definition of this magical property.
     *
     * See — [Adding Magical Properties](https://github.com/WaywardGame/types/wiki/Adding-Magical-Properties)
     */
    function magicalProperty(name: string, description: IMagicalPropertyDescription): <K extends string | number | symbol, T extends Record<K, MagicalPropertyType>>(target: T, key: K) => void;
    /**
     * Registers an "extra"/displayable item type. **Not** a real item.
     */
    function itemExtra(name: string): <K extends string | number | symbol, T extends Record<K, ItemTypeExtra>>(target: T, key: K) => void;
    /**
     * Registers an "extra"/displayable doodad type. **Not** a real doodad.
     */
    function doodadExtra(name: string): <K extends string | number | symbol, T extends Record<K, DoodadTypeExtra>>(target: T, key: K) => void;
    /**
     * Registers an item tag.
     */
    function itemTag(name: string): <K extends string | number | symbol, T extends Record<K, ItemTag>>(target: T, key: K) => void;
    /**
     * Registers a doodad tag.
     */
    function doodadTag(name: string): <K extends string | number | symbol, T extends Record<K, DoodadTag>>(target: T, key: K) => void;
    /**
     * Registers an entity tag.
     */
    function entityTag(name: string): <K extends string | number | symbol, T extends Record<K, EntityTag>>(target: T, key: K) => void;
    /**
     * Registers a "usable" action generator — actions that appear in the UI, and can be slotted in the action bar.
     * @param set Where to append the usable actions
     * @param registrationHandler The handler that will register the new actions
     */
    function usableActions<SET extends UsableActionSet>(name: string, set: SET, registrationHandler: (registrar: UsableActionRegistrar, ...args: (typeof usableActionSets)[SET] extends UsableActionGenerator<infer ARGS> ? ARGS : []) => any): <K extends string | number | symbol, T extends Record<K, UsableActionGenerator>>(target: T, key: K) => void;
    /**
     * **Trying to register an action with the UI?** You may be looking for {@link usableActions `@Register.usableActions`}
     *
     * Registers a "usable" action type. This is solely used for generating an ID that can be associated with custom UsableActions.
     * A custom UsableActionType provides an ID used for translation, icons, etc.
     *
     * IE: If a UsableAction is registered with your custom UsableActionType:
     * - If your definition doesn't have a `translate` handler, the translation will be handled automatically with a translation in the
     * "usableActionType" dictionary.
     * - If your definition doesn't have a custom `icon` provided, it will automatically attempt to use the icon at
     * `<your mod directory>/static/image/ui/icons/action/mod<your mod name><this registration name>.png`.
     */
    function usableActionType(name: string): <K extends string | number | symbol, T extends Record<K, UsableActionType>>(target: T, key: K) => void;
    /**
     * **Trying to register an action with the UI?** You may be looking for {@link usableActions `@Register.usableActions`}
     *
     * Registers a "usable" action *placeholder* type. This is solely used for generating an ID that can be used in `UsableAction`s.
     * A custom UsableActionTypePlaceholder provides an ID that can be used for icons.
     *
     * IE: If a UsableAction definition's `icon` property is this placeholder ID's name, it will automatically attempt to use the icon at
     * `<your mod directory>/static/image/ui/icons/action/mod<your mod name><this registration name>.png`.
     */
    function usableActionTypePlaceholder(name: string): <K extends string | number | symbol, T extends Record<K, UsableActionType>>(target: T, key: K) => void;
    /**
     * Registers an equip slot.
     * @param description The definition of the equip slot.
     */
    function equipType(name: string, description: IEquipTypeDescription): <K extends string | number | symbol, T extends Record<K, EquipType>>(target: T, key: K) => void;
    function interModRegistry<V>(name: string): <K extends string | number | symbol, T extends Record<K, InterModRegistry<V>>>(target: T, key: K) => void;
    function interModRegistration<V>(modName: string, registryName: string, value: V): <K extends string | number | symbol, T extends Record<K, InterModRegistration<V>>>(target: T, key: K) => void;
    /**
     * Register custom values that will replace default values in a vanilla object.
     *
     * For example, say you want to change the number of planks to dismantle from a log from 2 to 4. That would look like this:
     * ```ts
     * @Register.override(() => ({
     * 	object: itemDescriptions[ItemType.Log].dismantle!,
     * 	property: "items",
     * 	value: [
     * 		{ type: ItemType.TreeBark, amount: 2 },
     * 		{ type: ItemType.WoodenPlank, amount: 4 }
     * 	],
     * }))
     * public itemDescriptionLogDismantle: IDismantleDescription;
     * ```
     */
    function override<OBJECT extends object, PROPERTY extends keyof OBJECT>(time: ModRegistrationTime.Initialize | ModRegistrationTime.Load, overrider: () => IOverrideDescription<OBJECT, PROPERTY>): <K extends string | number | symbol, T extends Record<K, OBJECT>>(target: T, key: K) => void;
    /**
     * Registers any number of registrations of a single type. Any other registration type can be used.
     *
     * Note: Not all registration types have been tested. If you run into any issues with one report a bug!
     * @param type The type of registration to register — the name of another `@Register.<type>` decorator.
     * @param entries The registration definitions — each entry is a tuple containing the parameters that would be given to the
     * registration decorator.
     *
     * @example
     * ```ts
     * const itemColors = ["red", "blue", "green"];
     * class Mod {
     * 	@Register.bulk("item", ...itemColors
     * 		.map(color => Tuple(`${color}Item`, { weight: 1 })))
     *  public readonly items: ItemType[];
     * }
     * ```
     */
    function bulk<REG_TYPE extends keyof typeof Register, REG extends AnyFunction = (typeof Register)[REG_TYPE]>(type: REG_TYPE, ...entries: Array<Parameters<NoInfer<REG>>>): <K extends string | number | symbol, T extends Record<K, Array<REG extends (...args: any) => infer F2 ? F2 extends (t: infer T, k: infer K) => any ? T[Extract<K, keyof T>] : never : never>>>(target: T, key: K) => void;
    /**
     * Registers a command.
     * @param name The name of this command (what players will type to use it, eg: `/heal`).
     *
     * This decorator should be used on a valid `CommandCallback` method.
     */
    function command(name: string): (target: any, key: string, descriptor: TypedPropertyDescriptor<CommandCallback>) => void;
    /**
     * Registers an options section.
     *
     * This decorator should be used on a valid `ModOptionSectionInitializer` method.
     */
    function optionsSection(target: any, key: string, descriptor: TypedPropertyDescriptor<ModOptionSectionInitializer>): void;
}
export default Register;
export declare const SYMBOL_REGISTRATION_ID: unique symbol;
export interface RegisteredMethod {
    [SYMBOL_REGISTRATION_ID]: number;
}
declare class RegistryRegisteredFactory<H> {
    private readonly modName?;
    private readonly path;
    constructor(modName: string | undefined, ...path: PropertyKey[]);
    registry<K extends keyof H>(key: K): RegistryRegisteredFactory<H[K]>;
    /**
     * @param key A key of the registry `H`.
     * @returns An intermediate value referencing the `T` stored in the given key in `H`.
     *
     * As much as you may wish it was, the returned value is not actually the type it claims to be. Do not use it as such.
     */
    get<K extends keyof H>(key: K): H[K];
    /**
     * @param key A key of the registry `H` that maps to an array value.
     * @param index An index in the array.
     * @returns An intermediate value referencing the `T` stored in the array in the given key in `H`.
     *
     * As much as you may wish it was, the returned value is not actually the type it claims to be. Do not use it as such.
     */
    get<K extends keyof H>(key: K, index: number): H[K] extends Array<infer T> ? T : never;
    /**
     * @param key The key of `H` which contains `T`.
     * @returns An intermediate value referencing the `T` stored in the given key in `H`
     */
    getMethod<K extends keyof H>(key: K): H[K];
}
/**
 * This function is for retrieving the IDs of other registered things, to be used within other `@Register` decorators.
 *
 * @param H A type parameter which should contain the registry's type.
 * @param name A mod's name; this disambiguates which mod we're getting a registration from.
 * This parameter is required if you're using this in a decorator of a class other than your mod class or a sub-registry of your mod class.
 *
 * For example, if you're trying to get a bindable that was registered by your mod, you would call it like this:
 * `Registry<YourModClass>().get("bindableFieldName")`
 *
 * Here's a full example (excerpt from [Starter Quest](https://github.com/WaywardGame/starterquest)):
 * ```ts
 *  class StarterQuest extends Mod {
 *  	@Register.bindable("Toggle", { key: "KeyJ" })
 * 		public readonly bindable: Bindable;
 *
 * 		@Register.menuBarButton("Starter Quest", {
 * 			bindable: Registry<StarterQuest>().get("bindable"),
 * 			tooltip: tooltip => tooltip.addText(text => text
 * 				.setText(Translation.get(this.dictionary, StarterQuestDictionary.StarterQuestTitle))),
 * 			onActivate: () => ui.toggleDialog(this.dialog)
 * 		})
 * 		public readonly menuBarButton: MenuBarButtonType;
 *  }
 * ```
 */
export declare function Registry<H>(id?: string): RegistryRegisteredFactory<H>;
export declare namespace Registry {
    /**
     * Returns the ID of a registered action or command callback which was decorated with its respective `@Register` decorator.
     * @param method An action or command callback method
     */
    function functionId<M extends AnyFunction>(method: M): Command;
    interface IRegistrationsObject {
        _isRegistrationsObject: boolean;
        _registrationsDirty: boolean;
        _registries: IRegistry | Set<IRegistry>;
    }
    namespace IRegistrationsObject {
        function is(value: unknown): value is IRegistrationsObject;
    }
    function makeRegistrationsMap<MAP extends Map<K, V>, K, V>(map: MAP, registries: IRegistry | Set<IRegistry>): MAP & IRegistrationsObject;
    function makeRegistrationsSet<SET extends Set<T>, T>(set: SET, registries: IRegistry | Set<IRegistry>): SET & IRegistrationsObject;
    /**
     * Used internally for `Registry<H, T>.get(key)`
     */
    class Registered implements Objects.ICloneable {
        readonly mod?: string | ModInformation;
        readonly type: RegistryRegisteredIntermediateType;
        readonly path: PropertyKey[];
        constructor(modName: string | ModInformation | undefined, type: RegistryRegisteredIntermediateType, ...path: PropertyKey[]);
        mask<T>(): T;
        /**
         * An getter for a registration ID in the given `IRegistry`.
         *
         * @param registry The registry to get a registration ID from.
         * @param property The property containing the registration ID.
         * (Contains a field/method, decorated with a ` @Register.thing` decorator)
         * @param type Whether the field is for a method or a property.
         * (Examples include actions/commands for methods & bindables/creatures for properties)
         *
         * - If the type is a property, and the field has a value, it's returned immediately.
         * - If the type is a method, and an ID is returned by `Registry.id(registry[property])`, the ID will be returned.
         */
        getRegistrationId<T = any>(registry: IRegistry): T | undefined;
        getFirstRegistrationId<T = any>(registries: IRegistry | Set<IRegistry>): T | undefined;
        initializeProperty<O extends object, K extends keyof O>(object: O, key: K, registries: IRegistry | Set<IRegistry>): void;
        [Objects.SYMBOL_CLONE](clone: <T>(value: T) => T): this;
    }
}
export interface IBaseModRegistration {
    type: ModRegistrationType;
    key: string;
    registrationId: number;
}
export declare enum RegistryRegisteredIntermediateType {
    Property = 0,
    Callback = 1
}
