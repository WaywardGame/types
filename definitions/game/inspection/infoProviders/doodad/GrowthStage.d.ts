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
import Doodad from "doodad/Doodad";
import { InfoProvider } from "game/inspection/InfoProvider";
import Translation from "language/Translation";
export default class GrowthStageInfoProvider extends InfoProvider {
    private readonly doodad;
    static get(doodad: Doodad): false | GrowthStageInfoProvider | undefined;
    private stage;
    private constructor();
    getClass(): string[];
    onTickEnd(): void;
    initComponent(): {
        component: import("../../../../newui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    hasContent(): boolean;
    get(): Translation;
}
