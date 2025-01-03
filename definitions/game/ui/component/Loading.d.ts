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
import { LoadType } from "@wayward/game/game/meta/Loading";
import Component from "@wayward/game/ui/component/Component";
export declare enum LoadingClasses {
    Main = "loading",
    Style = "loading-style",
    Block = "loading-block"
}
export default class LoadingAnimation extends Component {
    constructor();
    setType(type?: LoadType): this;
}
