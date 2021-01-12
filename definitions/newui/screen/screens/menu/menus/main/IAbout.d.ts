/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Website } from "newui/screen/screens/menu/menus/main/component/IWebsite";
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
export declare type TeamMemberLink = [Website, string];
export interface ITeamMember extends IPerson {
    responsibilities: Responsibility[];
    isCurrentMember?: true;
    links?: TeamMemberLink[];
}
export declare module About {
    function getLibraries(): {
        [x: string]: string;
    };
    function getSpecialThanks(): IPerson[];
    function getTeamMembers(): ITeamMember[];
}
