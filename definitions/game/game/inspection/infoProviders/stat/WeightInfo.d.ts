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
import { Stat } from "@wayward/game/game/entity/IStats";
import { WeightStatus } from "@wayward/game/game/entity/player/IPlayer";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import { StatInfo } from "@wayward/game/game/inspection/infoProviders/stat/StatInfo";
import Translation from "@wayward/game/language/Translation";
export default class WeightInfo extends StatInfo {
    readonly status: InfoProvider.Observer<WeightStatus | undefined>;
    getTitle(stat: Stat): InfoProvider | Translation;
    getDescription(stat: Stat): InfoProvider | Translation | undefined;
    getClass(): string[];
    get(): LabelledValue[];
}
