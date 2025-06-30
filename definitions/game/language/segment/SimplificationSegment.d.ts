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
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import type { ISegment, IStringSection } from "@wayward/game/utilities/string/Interpolator";
export interface ISimplificationSection extends IStringSection {
    forceInclude: true;
    displayLevels: {
        [InfoDisplayLevel.NonVerbose]?: IStringSection[];
        [InfoDisplayLevel.NonExtra]?: IStringSection[];
        [InfoDisplayLevel.Always]?: IStringSection[];
        [InfoDisplayLevel.Extra]?: IStringSection[];
        [InfoDisplayLevel.ExtraNonVerbose]?: IStringSection[];
        [InfoDisplayLevel.Verbose]?: IStringSection[];
    };
}
export declare namespace ISimplificationSection {
    function create(section: ISimplificationSection["displayLevels"]): ISimplificationSection;
    function is<S extends IStringSection>(section: S): section is S & ISimplificationSection;
}
declare const simplificationSegment: ISegment;
export default simplificationSegment;
