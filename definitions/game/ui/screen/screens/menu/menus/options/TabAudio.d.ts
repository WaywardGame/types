/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import { Tab } from "@wayward/game/ui/screen/screens/menu/component/Menu";
export default class TabAudio extends Tab implements IRefreshable {
    private readonly volumeEffects;
    private readonly volumeMusic;
    constructor();
    refresh(): this;
    private onMuteEffects;
    private onEffectVolumeChange;
    private onMuteMusic;
    private onMusicVolumeChange;
    private nextTrack;
}
