/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { GameMode } from "game/options/IGameOptions";
import Component from "ui/component/Component";
import { IRefreshable } from "ui/component/Refreshable";
import { Paragraph } from "ui/component/Text";
export default class MilestonesNotUnlockableWarning extends Component implements IRefreshable {
    private readonly gameMode;
    readonly description: Paragraph;
    private readonly buttonShowModsThatDisallowMilestoneUnlocking;
    constructor(gameMode?: () => GameMode | undefined);
    refresh(): this;
}
