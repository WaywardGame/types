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
import type { ICustomizations } from "@wayward/game/game/entity/IHuman";
import Component from "@wayward/game/ui/component/Component";
import type { IRGB } from "@wayward/utilities/Color";
export declare class SVG extends Component {
    private readonly filters;
    constructor();
    createFilter(id: string): this;
    setFilterColor(id: string, color: IRGB): void;
}
export interface CharacterPreviewFilters {
    skin: string;
    hair: string;
}
export type CharacterPreviewRotation = 0 | 1 | 2 | 3;
export default class CharacterPreview extends Component {
    private readonly elementPreviewBody;
    private readonly elementPreviewShirt;
    private readonly elementPreviewPants;
    private readonly elementPreviewHairShadow;
    private readonly elementPreviewHair;
    private readonly elementPreviewHairAccessory;
    private readonly customization;
    private readonly filters;
    private readonly svg;
    private _loaded;
    get loaded(): boolean;
    constructor(customization: ICustomizations, filters?: CharacterPreviewFilters);
    getFilters(): CharacterPreviewFilters;
    update(): this;
    rotate(direction: CharacterPreviewRotation): void;
    private updateCharacterPreviewFilter;
    private addPreviewLayer;
}
