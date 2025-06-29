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
import { Website } from "@wayward/game/ui/screen/screens/menu/menus/main/component/IWebsite";
export declare enum Responsibility {
    Programming = 0,
    Design = 1,
    Web = 2,
    Art = 3,
    PR = 4,
    UX = 5,
    Music = 6
}
export interface IPerson {
    firstName: string;
    lastName?: string;
    nickname?: string;
    fileName?: string;
}
export type TeamMemberLink = [Website, string];
export interface ITeamMember extends IPerson {
    responsibilities: Responsibility[];
    isCurrentMember?: true;
    links?: TeamMemberLink[];
}
export declare namespace About {
    function getLibraries(): Record<string, string>;
    function getSpecialThanks(): IPerson[];
    function getTeamMembers(): ITeamMember[];
}
