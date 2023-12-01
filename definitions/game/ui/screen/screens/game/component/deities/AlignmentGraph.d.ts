/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ISacrifice } from "@wayward/game/game/deity/IDeities";
import type Human from "@wayward/game/game/entity/Human";
import type Island from "@wayward/game/game/island/Island";
import Component from "@wayward/game/ui/component/Component";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
export declare enum AlignmentGraphClasses {
    Main = "inspect-deity-alignment-graph",
    Evil = "inspect-deity-alignment-graph-evil",
    Good = "inspect-deity-alignment-graph-good",
    Value = "inspect-deity-alignment-graph-value",
    ValueNumber = "inspect-deity-alignment-graph-value-number",
    ValueNumberCurrent = "inspect-deity-alignment-graph-value-number-current",
    ValueNumberProjection = "inspect-deity-alignment-graph-value-number-projection",
    ValueLevel = "inspect-deity-alignment-graph-value-level",
    Bar = "inspect-deity-alignment-graph-bar",
    BarProjection = "inspect-deity-alignment-graph-bar-projection",
    BarProjectionAdd = "inspect-deity-alignment-graph-bar-projection-add",
    Tick = "inspect-deity-alignment-graph-bar-tick",
    TickHit = "inspect-deity-alignment-graph-bar-tick-hit",
    TickHitProjected = "inspect-deity-alignment-graph-bar-tick-hit-projected",
    TickSameSide = "inspect-deity-alignment-graph-bar-tick-same-side",
    TickEighth = "inspect-deity-alignment-graph-bar-tick-eighth",
    TickFourth = "inspect-deity-alignment-graph-bar-tick-fourth",
    TickHalf = "inspect-deity-alignment-graph-bar-tick-half",
    TickWhole = "inspect-deity-alignment-graph-bar-tick-whole",
    TickTooltip = "inspect-deity-alignment-graph-bar-tick-tooltip",
    Deities = "inspect-deity-alignment-graph-deities",
    Deity = "inspect-deity-alignment-graph-deity",
    DeityEvil = "inspect-deity-alignment-graph-deity-evil",
    DeityNeutral = "inspect-deity-alignment-graph-deity-neutral",
    DeityGood = "inspect-deity-alignment-graph-deity-good"
}
export default class AlignmentGraph extends Component implements IRefreshable {
    private readonly _source?;
    get source(): Human | Island | undefined;
    private shouldShowAlignmentValue;
    readonly alignment: Component<HTMLElement>;
    readonly bar: Component<HTMLElement>;
    readonly projectionBar: Component<HTMLElement>;
    readonly deities: Component<HTMLElement>;
    private readonly ticks;
    private projection?;
    constructor(source?: Human | Island);
    project(sacrifice?: ISacrifice): this;
    refresh(): this;
    protected onAlignmentChange(): void;
}
