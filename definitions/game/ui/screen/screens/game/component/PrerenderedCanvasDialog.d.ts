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
import CanvasDialog from "@wayward/game/ui/screen/screens/game/component/CanvasDialog";
export default class PrerenderedCanvasDialog extends CanvasDialog {
    protected sourceCanvas?: HTMLCanvasElement;
    protected onResize(): void;
    protected updateView(isDragging: boolean): void;
    protected draw(): void;
    protected resetView(animate: boolean): void;
}
