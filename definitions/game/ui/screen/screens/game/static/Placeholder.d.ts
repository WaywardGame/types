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
import Component from "@wayward/game/ui/component/Component";
import { Quadrant } from "@wayward/game/ui/screen/screens/game/component/IQuadrantComponent";
import type GameScreen from "@wayward/game/ui/screen/screens/GameScreen";
export default class Placeholder extends Component {
    readonly quadrant: Quadrant;
    private readonly gameScreenRef;
    get gameScreen(): GameScreen;
    constructor(gameScreen: GameScreen, quadrant: Quadrant);
    onActivate(): void;
}
