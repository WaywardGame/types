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
import type { IIslandTemplate } from "game/IGame";
import type { Automation } from "game/island/automation/Automation";
import Component from "ui/component/Component";
export default class TransientIslandComponent extends Component {
    private readonly template;
    private readonly automation?;
    private canvas?;
    private renderer?;
    private transientIsland?;
    private transientHuman?;
    private readonly zoomLevel;
    constructor(template: IIslandTemplate, automation?: Automation | undefined);
    protected onAppend(): void;
    protected onDispose(): void;
    initialize(template: IIslandTemplate): Promise<void>;
    private createViewport;
    private resize;
    private rerender;
}
