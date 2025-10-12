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
import type { IDismantleComponent, ItemType } from "@wayward/game/game/item/IItem";
import InGameScreen from "@wayward/game/ui/old/screens/InGameScreen";
export default class OldUi {
    screenInGame: InGameScreen | undefined;
    private readonly elementDocument;
    private readonly elementWindow;
    private readonly elementBody;
    private bodyWidth;
    private bodyHeight;
    constructor();
    initialize(): void;
    initializeGameState(): void;
    getBody(): JQuery;
    getWidth(): number;
    getHeight(): number;
    setCheckboxValue(element: JQuery, id: string, checked: boolean): void;
    playClickSound(): void;
    hideInGameScreen(): void;
    onWindowResize(): void;
    isInGameScreenShown(): boolean;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent, force?: boolean): void;
    shouldRefreshMods(): boolean;
    setVersionExtra(msg: string): void;
    openDialogs(): void;
    logErrorEvent(eventOrError: unknown, skipLog?: true): void;
    private loggingRejection;
    private logPromiseRejectionEvent;
    refreshUiTranslations(): void;
    private refreshUiTranslation;
}
