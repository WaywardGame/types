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
import type { RuneChance } from "@wayward/game/game/deity/IDeities";
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type { SkillType } from "../../entity/skill/ISkills";
import type { NPCType } from "@wayward/game/game/entity/npc/INPCs";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type { CurseEventType } from "@wayward/game/game/curse/ICurse";
declare namespace Runekeeper {
    enum Domain {
        Action = 0,
        Skill = 1,
        KillCreature = 2,
        TameCreature = 3,
        KillNPC = 4,
        Event = 5,
        Craft = 6,
        Disassemble = 7,
        Dismantle = 8,
        CurseEvent = 9
    }
    type DomainName = Lowercase<keyof typeof Domain>;
    const DOMAINS: ("action" | "event" | "dismantle" | "craft" | "curseevent" | "skill" | "disassemble" | "killcreature" | "tamecreature" | "killnpc")[];
    type DomainData = `${DomainName}:${number}`;
    function domainName(domain: Domain | DomainData): DomainName;
    function isDiscovered(domain: DomainData): boolean;
    function action(type: ActionType): DomainData;
    function skill(type: SkillType): DomainData;
    function craft(type: ItemType): DomainData;
    function dismantle(type: ItemType): DomainData;
    function disassemble(type: ItemType): DomainData;
    function killCreature(type: CreatureType): DomainData;
    function tameCreature(type: CreatureType): DomainData;
    function killNPC(type: NPCType): DomainData;
    function curseEvent(type: CurseEventType): DomainData;
    enum Event {
        FireSpread = 0,
        KillAberrant = 1,
        TameAberrant = 2,
        KillPet = 3,
        KillPlayer = 4
    }
    const OTHER_EVENTS: Descriptions<Event, RuneChance>;
    function event(type: Event, runeChanceOverride?: number): [...RuneChance, DomainData];
}
export default Runekeeper;
