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
import Component from "ui/component/Component";
import { Quadrant } from "ui/screen/screens/game/component/IQuadrantComponent";
import GameScreen from "ui/screen/screens/GameScreen";
export default class Placeholder extends Component {
    private readonly host;
    readonly quadrant: Quadrant;
    constructor(host: GameScreen, quadrant: Quadrant);
    onActivate(): void;
}
