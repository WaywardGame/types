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
import type Player from "@wayward/game/game/entity/player/Player";
import type { IIcon } from "@wayward/game/game/inspection/InfoProvider";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import Bindable from "@wayward/game/ui/input/Bindable";
import ContainerDialog from "@wayward/game/ui/screen/screens/game/dialog/ContainerDialog";
import { MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class InventoryDialog extends ContainerDialog {
    constructor();
    getIcon(): MenuBarButtonType | IIcon | undefined;
    getBindable(): Bindable | undefined;
    getName(): TranslationImpl | undefined;
    protected resolveContainer(): Player;
}
