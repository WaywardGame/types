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
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export declare enum DialogId {
    Messages = 0,
    Notes = 1,
    MessagesEditFilters = 2,
    QuickSettings = 3,
    Milestones = 4,
    Skills = 5,
    Book = 6,
    Map = 7,
    Quests = 8,
    Crafting = 9,
    Inspect = 10,
    IslandsSail = 11,
    Equipment = 12,
    IslandsShipping = 13,
    Inventory = 14,
    Container = 15,
    Trade = 16,
    Altar = 17
}
export declare enum Edge {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3
}
export type DialogDescriptionEdges = [
    [
        Edge.Left | Edge.Right,
        number
    ],
    [
        Edge.Top | Edge.Bottom,
        number
    ]
];
export interface IDialogDescriptionEdgeHandling {
    try: Array<DialogDescriptionEdges | "center">;
    default: DialogDescriptionEdges | "center";
}
export interface IDialogDescription<SQUARE = boolean> extends IModdable {
    /**
     * The minimum resolution of this dialog, in pixels.
     */
    minResolution: SQUARE extends true ? number : IVector2;
    /**
     * The default size of this dialog, in percentages. For square dialogs, this is the Y axis.
     */
    size: SQUARE extends true ? number : IVector2;
    edges: DialogDescriptionEdges | "center" | IDialogDescriptionEdgeHandling;
    /**
     * Whether to save if the dialog is open. If this is false, the dialog will always be closed when a game loads. Defaults to true.
     */
    saveOpen?: boolean;
}
declare const dialogDescriptions: Descriptions<DialogId, IDialogDescription<false> | IDialogDescription<true>>;
export default dialogDescriptions;
