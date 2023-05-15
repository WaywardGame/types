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
import { GameMode } from "game/options/IGameOptions";
import Button from "ui/component/Button";
import WarningRow from "ui/component/WarningRow";
export default class MilestonesNotUnlockableWarning extends WarningRow {
    private readonly gameMode;
    readonly buttonShowModsThatDisallowMilestoneUnlocking: Button;
    constructor(gameMode?: () => GameMode | undefined);
    refresh(): this;
}
