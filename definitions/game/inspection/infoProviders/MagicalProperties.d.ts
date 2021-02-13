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
import { InfoProvider } from "game/inspection/InfoProvider";
import MagicalPropertyManager from "game/MagicalPropertyManager";
import Translation from "language/Translation";
export default class MagicalPropertiesInfoProvider extends InfoProvider {
    private readonly magic;
    static getFireStageTranslation(decay?: number): Translation | undefined;
    static get(magic?: MagicalPropertyManager | {
        magic?: MagicalPropertyManager;
    }): MagicalPropertiesInfoProvider | undefined;
    constructor(magic: MagicalPropertyManager);
    getClass(): string[];
    getIcon(): {
        path: string;
        width: number;
        height: number;
    };
    initComponent(): {
        component: import("../../../newui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    hasContent(): boolean;
    get(): Translation;
}
