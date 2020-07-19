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
import { Source } from "entity/player/IMessageManager";
import { ThreeStateButtonState } from "newui/component/IThreeStateButton";
export declare const DEFAULT_MAX_MESSAGES = 30;
export declare const MESSAGES_MAX_PINNED = 3;
export interface IFilters {
    [key: string]: IFilter;
}
export declare type IFilter = {
    -readonly [K in keyof typeof Source]?: ThreeStateButtonState;
};
export declare enum MessageFilterDefault {
    All = 0,
    Game = 1,
    Chat = 2
}
export declare const MESSAGE_FILTERS_DEFAULT: Descriptions<MessageFilterDefault, IFilter>;
