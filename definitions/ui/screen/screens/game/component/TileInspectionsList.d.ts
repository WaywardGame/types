/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import TilePositionInspection from "game/inspection/handlers/TilePositionInspection";
import UiTranslation from "language/dictionary/UiTranslation";
import InspectionsList from "ui/screen/screens/game/component/InspectionsList";
import Vector3 from "utilities/math/Vector3";
export default class TileInspectionsList extends InspectionsList<TilePositionInspection> {
    private position?;
    getPosition(): Vector3 | undefined;
    setPosition(position: Vector3): this;
    isValid(): boolean;
    protected getInvalidTranslation(): UiTranslation;
    protected initializeInspections(): TilePositionInspection;
    protected onTick(): void;
}
