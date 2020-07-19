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
import Creature from "entity/creature/Creature";
import { Context, IInspector, InfoDisplayLevel, InfoProvider } from "game/inspection/InfoProvider";
import Translation from "language/Translation";
export default class ResistancesAndVulnerabilitiesInfoProvider extends InfoProvider {
    private readonly creature;
    static getTranslation(creature: Creature, inspector: IInspector, revealer?: Translation, creatureName?: Translation): Translation | undefined;
    constructor(creature: Creature);
    getClass(): string[];
    getDisplayLevel(): InfoDisplayLevel;
    initComponent(): import("../../../../newui/component/Component").default;
    hasContent(): boolean;
    get(context: Context): Translation;
}
