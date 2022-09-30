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
import InterruptChoice from "language/dictionary/InterruptChoice";
import Screen from "ui/screen/Screen";
import type { InterruptOptions } from "ui/util/IInterrupt";
import { InterruptType } from "ui/util/IInterrupt";
export default class InterruptScreen extends Screen {
    get interruptType(): InterruptType | undefined;
    private canBeInstant;
    constructor();
    interrupt(options: InterruptOptions): Promise<InterruptChoice | string | boolean | void>;
    hideLoadingInterrupt(): Promise<void>;
    protected onHide(): void;
}
