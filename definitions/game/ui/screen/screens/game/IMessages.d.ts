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
import type { Source } from "@wayward/game/game/entity/player/IMessageManager";
import { ThreeStateButtonState } from "@wayward/game/ui/component/IThreeStateButton";
export declare const DEFAULT_MAX_MESSAGES = 15;
export declare const MESSAGES_MAX_PINNED = 3;
export type IFilters = PartialRecord<string, IFilter>;
export type IFilter = {
    -readonly [K in keyof typeof Source]?: ThreeStateButtonState;
};
export declare enum MessageFilterDefault {
    All = 0,
    Game = 1,
    Chat = 2
}
export declare const MESSAGE_FILTERS_DEFAULT: Descriptions<MessageFilterDefault, IFilter>;
