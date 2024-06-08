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
import { SkillType } from "@wayward/game/game/entity/IHuman";
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
export declare enum TitleType {
    Milestone = 0,
    Skill = 1
}
declare const _default: Action<[[ActionArgument.Undefined, import("../argument/ActionArgumentEnum").default<TitleType, "Milestone" | "Skill">], [arg1: ActionArgument.Undefined, import("../argument/ActionArgumentEnum").default<Milestone, "Abnormalizer" | "Chef" | "Exterminator" | "Crafter" | "Gardener" | "Gatherer" | "Hunter" | "Locksmith" | "ReaperOfSouls" | "Survivor" | "Pitcher" | "Trapsetter" | "TreasureHunter" | "Collector" | "Explorer" | "Grandmaster" | "Prepared" | "Doctor" | "Artificer" | "Returned" | "Navigator" | "DragonSlayer" | "Treasurer" | "Pulchritudinous" | "Friendly" | "Malevolent" | "Benevolent" | "Boundless" | "Talented" | "Weathered" | "Seasoned" | "Pacifier" | "Merchant" | "Notekeeper" | "Operator" | "Huntsman" | "Contender" | "Challenger" | "DestroyerOfMagi" | "Helmsman" | "Multitasker" | "Apocryphal" | "Diverse" | "InternalDiscoveredBoats" | "Traitor" | "MasterOfAll" | "Rouseabout" | "Murderer" | "Retailer" | "Masochist" | "Versatile" | "InternalStatDiscovery" | "Dedicated" | "Hounded" | "Serene" | "InternalRuneOrAltarDiscovery" | "Curator" | "Thaumaturgic" | "Runekeeper" | "InternalDeityDiscovery" | "InternalMerchantsDiscovery" | "InternalDeitySystemDiscovery" | "Invoker" | "InternalDeitySacrifice" | "InternalInsulationDiscovery">, import("../argument/ActionArgumentEnum").default<SkillType, "None" | "Chemistry" | "Anatomy" | "Marksmanship" | "Blacksmithing" | "Botany" | "Camping" | "Cartography" | "Claythrowing" | "Cooking" | "Fishing" | "Fletching" | "Glassblowing" | "Leatherworking" | "Lockpicking" | "Lumberjacking" | "Mining" | "Mycology" | "Parrying" | "Stonecrafting" | "Swimming" | "Tactics" | "Tailoring" | "Throwing" | "Tinkering" | "Trapping" | "Woodworking" | "Taming" | "Horticulture" | "Bartering" | "Seafaring" | "Thaumaturgy" | "DualWielding" | "Piety">]], import("../../player/Player").default, void, import("@wayward/game/game/entity/action/IAction").IActionUsable, [(TitleType | undefined)?, (Milestone | SkillType | undefined)?]>;
export default _default;
