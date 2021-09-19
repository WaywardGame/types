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
import { IRGB } from "utilities/Color";
export default class SpriteGlow {
    private readonly data;
    private readonly canvas;
    private readonly context;
    private versionID?;
    constructor();
    releaseImageDataCache(): void;
    render(path: string, color: IRGB): Promise<string | undefined>;
    private renderInternal;
    private getVersion;
    private getGitVersionID;
    private clearOldCache;
}
