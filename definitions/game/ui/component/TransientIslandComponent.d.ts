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
import type { Automation } from "@wayward/game/game/island/automation/Automation";
import Component from "@wayward/game/ui/component/Component";
import type { INewIslandOverrides } from "@wayward/game/game/island/IIsland";
export default class TransientIslandComponent extends Component {
    private readonly newIslandOverrides;
    private readonly automation?;
    private canvas?;
    private renderer?;
    private transientIsland?;
    private transientHuman?;
    private readonly zoomLevel;
    constructor(newIslandOverrides: INewIslandOverrides, automation?: Automation | undefined);
    protected onAppend(): void;
    protected onDispose(): void;
    initialize(newIslandOverrides: INewIslandOverrides): Promise<void>;
    private createViewport;
    private resize;
    private rerender;
}
