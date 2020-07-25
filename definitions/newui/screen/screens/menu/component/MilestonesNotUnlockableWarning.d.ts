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
import { GameMode } from "game/options/IGameOptions";
import Component from "newui/component/Component";
import { IRefreshable } from "newui/component/Refreshable";
import { Paragraph } from "newui/component/Text";
export default class MilestonesNotUnlockableWarning extends Component implements IRefreshable {
    private readonly gameMode;
    readonly description: Paragraph;
    private readonly buttonShowModsThatDisallowMilestoneUnlocking;
    constructor(gameMode?: () => GameMode | undefined);
    refresh(): this;
}
