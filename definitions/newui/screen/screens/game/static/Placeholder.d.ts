/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Component from "newui/component/Component";
import { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import GameScreen from "newui/screen/screens/GameScreen";
export default class Placeholder extends Component {
    private readonly host;
    readonly quadrant: Quadrant;
    constructor(host: GameScreen, quadrant: Quadrant);
    onActivate(): void;
}
