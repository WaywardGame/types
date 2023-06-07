import type Human from "game/entity/Human";
import type { Stat } from "game/entity/IStats";
import { InfoProvider } from "game/inspection/InfoProvider";
export declare abstract class StatInfo extends InfoProvider {
    static getTitle(stat: Stat): import("game/inspection/InfoProvider").SimpleInfoProvider;
    private readonly _human;
    protected get human(): Human<number> | undefined;
    constructor(human: Human);
    getTitle(stat: Stat): import("game/inspection/InfoProvider").SimpleInfoProvider;
}
