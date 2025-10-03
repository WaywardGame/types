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
import type EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import type { IStatusDescription, IStatusDisplayable } from "@wayward/game/game/entity/status/IStatus";
import { StatusThreatLevel } from "@wayward/game/game/entity/status/IStatus";
import { StatusType } from "@wayward/game/game/entity/status/IStatus";
import IStatusContext from "@wayward/game/game/entity/status/IStatusContext";
import type Status from "@wayward/game/game/entity/status/Status";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import Translation from "@wayward/game/language/Translation";
import type Component from "@wayward/game/ui/component/Component";
export declare enum StatusInspectionClasses {
    Main = "inspection-type-status",
    Effect = "inspection-type-status-effect",
    NextThresholdHint = "inspection-type-status-next-threshold-hint",
    ColorContext = "inspection-type-status-color-context",
    _Instanced = "inspection-type-status--instanced",
    Title = "inspection-type-status-title",
    Effects = "inspection-type-status-effects",
    LevelDescription = "inspection-type-status-level-description",
    Cures = "inspection-type-status-cures"
}
export default class StatusInspection extends Inspection<StatusType> {
    static getAdjective(type: StatusType, status?: Status, threatGroup?: StatusThreatLevel, display?: number): Translation;
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext) => boolean;
    get statusContext(): IStatusContext;
    get status(): Status | undefined;
    get displayIndex(): number | undefined;
    get displayDefinition(): IStatusDisplayable | undefined;
    get entity(): EntityWithStats | undefined;
    get definition(): IStatusDescription | undefined;
    constructor([, type]: [ReferenceType, StatusType], context?: InfoProviderContext);
    getId(): string;
    private getHighestThreatGroup;
    private getThreatGroups;
    private getThreatGroupMessageType;
    getBorder(): string | undefined;
    getClass(context: InfoProviderContext): string[];
    protected getTitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    private getLevelsTitle;
    protected getSubtitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getIconComponent(context: InfoProviderContext): Component | undefined;
    protected getColorContext(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getContent(context: InfoProviderContext): ArrayOr<Translation | InfoProvider | undefined>;
    private getAllPossibleLevels;
    private getLevel;
    private getDescription;
    private getEffect;
    private getNextThresholdHint;
    private getCures;
}
