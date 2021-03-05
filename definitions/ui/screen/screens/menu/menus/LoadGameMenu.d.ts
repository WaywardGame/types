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
import { IBindHandlerApi } from "ui/input/Bind";
import Menu from "ui/screen/screens/menu/component/Menu";
export default class LoadGameMenu extends Menu {
    isMultiplayer: boolean;
    private readonly slots;
    private slotsWrapper;
    private sort;
    private sortDirection;
    private slotsRemainingHeading;
    private newGameButton;
    private importButton;
    private milestonesNotUnlockableWarning;
    private readonly selectedRow;
    constructor();
    protected onSelect(api: IBindHandlerApi): boolean;
    protected onSteamworksHide(): Promise<void>;
    protected goBackFrom(): void;
    protected onBeforeShow(): Promise<void>;
    private refresh;
    private onImport;
    private updateNewGameButton;
    private addSlot;
    private deleteSlot;
    private sortSlots;
    private updateSelectedSlots;
    private deleteSelectedSlots;
}
