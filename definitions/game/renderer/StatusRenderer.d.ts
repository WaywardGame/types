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
import type { ISpriteInfo } from "@wayward/game/renderer/ISpriteInfo";
import { PriorityMap } from "@wayward/utilities/collection/map/PriorityMap";
import type { IRGB } from "@wayward/utilities/Color";
export type IRenderFunction = (sprite: number | ISpriteInfo) => void;
export type IRenderLayerImplementation = (render: IRenderFunction) => any;
export type SpriteLineOrRenderLayerImpl = number | IRenderLayerImplementation;
export declare enum StatusRenderLayer {
    Body = 1,
    Hair = 2,
    Clothes = 4
}
export declare enum RenderPriority {
    Lowest = -1000,
    Low = -100,
    Normal = 0,
    High = 100,
    Highest = 1000
}
export default class StatusRenderer {
    readonly priority: number;
    protected layers: Map<StatusRenderLayer, PriorityMap<SpriteLineOrRenderLayerImpl[]>>;
    protected tints: IRGB[];
    constructor(priority?: RenderPriority);
    /**
     * Return a list of tints that the body will render with. These are all merged with each other and
     * any other tints from status effects currently on the body. Every tint has an even % except for the
     * base body tint, which is 70%.
     */
    getTints(): IRGB[];
    /**
     * Adds new tints.
     */
    addTint(...tints: IRGB[]): this;
    /**
     * Returns whether there are any registered render layers.
     */
    hasLayer(): boolean;
    /**
     * Adds a new render layer.
     * @param renderLayer The render layer this should render on (body, clothes, or hair).
     * @param spriteLine The line of the default sprite this status effect should render from.
     * @param priority The priority of this layer relative to other layers in the same render layer.
     */
    addLayer(renderLayer: StatusRenderLayer, spriteLine: number, priority?: number): this;
    /**
     * Adds a new render layer.
     * @param renderLayer The render layer this should render on (body, clothes, or hair).
     * @param renderFunction A function that takes a function to be used for rendering any sprites over the player.
     * @param priority The priority of this layer relative to other layers in the same render layer.
     */
    addLayer(renderLayer: StatusRenderLayer, renderFunction: IRenderLayerImplementation, priority?: number): this;
    /**
     * Renders any images for the given render layer, using the given render function.
     */
    render(renderLayer: StatusRenderLayer, render: IRenderFunction): void;
    /**
     * Return `false` to cancel rendering of the given layer.
     */
    shouldRenderBaseLayer?(renderLayer: StatusRenderLayer): boolean;
    protected renderLayer(layer: number | IRenderLayerImplementation, render: IRenderFunction): void;
}
