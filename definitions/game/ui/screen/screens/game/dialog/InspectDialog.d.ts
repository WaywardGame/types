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
import type { Reference } from "game/reference/ReferenceManager";
import Dialog from "ui/screen/screens/game/component/Dialog";
import type InspectionsList from "ui/screen/screens/game/component/InspectionsList";
import Vector3 from "utilities/math/Vector3";
export default class InspectDialog extends Dialog {
    private inspections?;
    private readonly dropdownDisplayLevel;
    private readonly singleInspectionWrapper;
    private readonly scrollableWrapper;
    private readonly context;
    private inspection?;
    private inspected?;
    constructor();
    protected onLoad(): Promise<void>;
    inspectReference(reference: Reference): this;
    setInspections(inspections: InspectionsList, update?: boolean): this;
    setPosition(position: Vector3): this;
    setInspection(thing: unknown): void;
    protected onClose(): void;
    protected onMoveToIsland(): void;
    private update;
    private removeOverlay;
}
