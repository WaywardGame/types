/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { MessageType } from "entity/player/MessageManager";
import Translation from "language/Translation";
import Component from "newui/component/Component";
export declare enum InspectType {
    Self = 0,
    Player = 1,
    NPC = 2,
    Creature = 3,
    Doodad = 4,
    TileEvents = 5,
    Items = 6,
    Corpses = 7,
    TileEventsMinor = 8,
    Tile = 9
}
export declare enum BasicInspectionPriority {
    Self = 0,
    Player = 1000,
    NPC = 2000,
    Creature = 3000,
    Doodad = 4000,
    TileEvents = 5000,
    Items = 6000,
    Corpses = 7000,
    TileEventsMinor = 8000,
    Tile = 9000
}
export declare enum InspectionContext {
    Tooltip = 0,
    Message = 1
}
export interface IInspectionSection {
    /**
     * The border color of an inspection section.
     */
    border?: string;
    content: Iterable<Translation | IInspection | undefined>;
}
export interface IInspectionSectionSimple extends IInspectionSection {
    content: Iterable<IInspection>;
}
export declare type InspectionResult = Iterable<IInspectionSection | IInspectionSection["content"] | undefined> | undefined;
export interface IInspection {
    text?: Translation;
    /**
     * If this inspection is in a message context, this changes the message type the inspection is sent with.
     */
    messageType?: MessageType;
    /**
     * This inspection is a title. If we're in a tooltip context, this inspection will be a larger font size and use title case.
     */
    title?: boolean;
    /**
     * This inspection is the name of a thing — if we're in a message context, this inspection will be passed to "You see {0}".
     */
    name?: true;
    /**
     * This is "extra information" that won't be shown by default, if we're in a tooltip context.
     * A bindable must be held to see this information.
     */
    extra?: true;
    /**
     * A custom component in the inspection.
     */
    custom?(component: Component): any;
}
