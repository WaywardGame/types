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
import { IModdable } from "mod/ModRegistry";
import { IVector2 } from "utilities/math/IVector";
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
    Inspect = 10
}
export declare enum Edge {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3
}
export declare type IEdges = [
    [
        Edge.Left | Edge.Right,
        number
    ],
    [
        Edge.Top | Edge.Bottom,
        number
    ]
];
export interface IDialogDescription<SQUARE = boolean> extends IModdable {
    minSize: SQUARE extends true ? number : IVector2;
    size: SQUARE extends true ? number : IVector2;
    maxSize: SQUARE extends true ? number : IVector2;
    edges: IEdges | "center";
    /**
     * Whether to save if the dialog is open. If this is false, the dialog will always be closed when a game loads. Defaults to true.
     */
    saveOpen?: boolean;
}
declare const dialogDescriptions: Descriptions<DialogId, IDialogDescription<false> | IDialogDescription<true>>;
export default dialogDescriptions;
