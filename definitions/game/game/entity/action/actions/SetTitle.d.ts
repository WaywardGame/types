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
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
export declare enum TitleType {
    Milestone = 0,
    Skill = 1
}
declare const _default: Action<[[ActionArgument.Undefined, import("../argument/ActionArgumentEnum").default<TitleType, "Milestone" | "Skill">], [arg1: ActionArgument.Undefined, import("../argument/ActionArgumentEnum").default<Milestone, "Navigator" | "Abnormalizer" | "Merchant" | "Cursed" | "Prepared" | "Chef" | "Exterminator" | "Crafter" | "Gardener" | "Gatherer" | "Hunter" | "Locksmith" | "ReaperOfSouls" | "Survivor" | "Pitcher" | "Trapsetter" | "TreasureHunter" | "Collector" | "Explorer" | "Grandmaster" | "Doctor" | "Artificer" | "Returned" | "DragonSlayer" | "Treasurer" | "Pulchritudinous" | "Friendly" | "Malevolent" | "Benevolent" | "Boundless" | "Talented" | "Weathered" | "Seasoned" | "Pacifier" | "Notekeeper" | "Operator" | "Huntsman" | "Contender" | "Challenger" | "DestroyerOfMagi" | "Helmsman" | "Multitasker" | "Apocryphal" | "Diverse" | "InternalDiscoveredBoats" | "Traitor" | "MasterOfAll" | "Rouseabout" | "Murderer" | "Retailer" | "Masochist" | "Versatile" | "InternalStatDiscovery" | "Dedicated" | "Hounded" | "Serene" | "InternalRuneOrAltarDiscovery" | "Curator" | "Thaumaturgic" | "Runekeeper" | "InternalDeityDiscovery" | "InternalMerchantsDiscovery" | "InternalCurseSystemDiscovery" | "Invoker" | "InternalDeityInvoked" | "InternalInsulationDiscovery" | "Turbulent" | "Statistician" | "Afflicted" | "Exsanguinated" | "InternalItemDiscovered" | "Cursebreaker" | "Oblivious">, import("../argument/ActionArgumentEnum").default<SkillType, "None" | "Taming" | "Mining" | "Swimming" | "Chemistry" | "Anatomy" | "Marksmanship" | "Blacksmithing" | "Botany" | "Camping" | "Cartography" | "Claythrowing" | "Cooking" | "Fishing" | "Fletching" | "Glassblowing" | "Leatherworking" | "Lockpicking" | "Lumberjacking" | "Mycology" | "Parrying" | "Stonecrafting" | "Tactics" | "Tailoring" | "Throwing" | "Tinkering" | "Trapping" | "Woodworking" | "Horticulture" | "Bartering" | "Seafaring" | "Thaumaturgy" | "DualWielding" | "Theurgy">]], ActionType.SetTitle, import("../../player/Player").default, void, import("@wayward/game/game/entity/action/IAction").IActionUsable, [(TitleType | undefined)?, (Milestone | SkillType | undefined)?]>;
export default _default;
