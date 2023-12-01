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
import type { ISaveImportSuccess } from "@wayward/game/save/ISaveManager";
import SaveDropHandler from "@wayward/game/ui/SaveDropHandler";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
export default class LoadGameMenu extends Menu {
    isMultiplayer: boolean;
    private readonly slots;
    private slotsWrapper;
    private sort;
    private sortDirection;
    private newGameButton;
    private milestonesNotUnlockableWarning;
    private readonly selectedRow;
    constructor();
    protected onSelect(api: IBindHandlerApi): boolean;
    protected onSteamworksHide(): Promise<void>;
    protected goBackFrom(): void;
    protected preShow(): Promise<void>;
    private refresh;
    protected onSaveImport(handler: SaveDropHandler, result: ISaveImportSuccess): void;
    protected onSaveImportComplete(): Promise<void>;
    private onImport;
    private addSlot;
    private deleteSlot;
    private sortSlots;
    private updateSelectedSlots;
    private deleteSelectedSlots;
}
