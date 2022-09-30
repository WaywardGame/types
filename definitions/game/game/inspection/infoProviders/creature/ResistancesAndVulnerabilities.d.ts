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
import type Creature from "game/entity/creature/Creature";
import type { IInspector } from "game/inspection/IInfoProvider";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Translation from "language/Translation";
import type { TranslationGenerator } from "ui/component/IComponent";
export default class ResistancesAndVulnerabilitiesInfoProvider extends InfoProvider {
    private readonly creature;
    static getTranslation(creature: Creature, inspector: IInspector | undefined, revealer?: Translation, creatureName?: import("../../../../language/impl/TranslationImpl").default): import("../../../../language/impl/TranslationImpl").default | undefined;
    constructor(creature: Creature);
    getClass(): string[];
    getDefaultDisplayLevel(): InfoDisplayLevel;
    hasContent(): boolean;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
}
