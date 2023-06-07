import { Stat } from "game/entity/IStats";
import type { SimpleInfoProvider } from "game/inspection/InfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import { StatInfo } from "game/inspection/infoProviders/stat/StatInfo";
export default class FerocityInfo extends StatInfo {
    readonly averageReputation: InfoProvider.Observer<number | undefined>;
    readonly reputation: InfoProvider.Observer<number>;
    readonly benignity: InfoProvider.Observer<number>;
    readonly malignity: InfoProvider.Observer<number>;
    readonly score: InfoProvider.Observer<number>;
    readonly civilizationScore: InfoProvider.Observer<number>;
    readonly turns: InfoProvider.Observer<number>;
    readonly ticks: InfoProvider.Observer<number>;
    getTitle(stat: Stat): SimpleInfoProvider;
    getClass(): string[];
    get(): (SimpleInfoProvider | LabelledValue)[];
}
