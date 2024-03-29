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
export interface ISortableEvent {
    item?: JQuery;
    placeholder?: JQuery;
    helper?: JQuery;
    initialContainer: JQuery;
    targetContainer?: JQuery;
    all?: true;
    quality?: true;
}
export interface ISortableOptions {
    connectWith?: string;
    appendTo?: JQuery;
    zIndex?: number;
    distance?: number;
    cursorAt?: {
        top: number;
        left: number;
    };
    onlyReceive?: boolean;
    onStart(sortableEvent: ISortableEvent): void;
    onOver(sortableEvent: ISortableEvent): void;
    onChange(sortableEvent: ISortableEvent): void;
    onOut(sortableEvent: ISortableEvent): void;
    onReceive(sortableEvent: ISortableEvent): void;
    onStop(sortableeEvent: ISortableEvent): void;
}
export interface ISortableItem {
    element: JQuery;
    parent: JQuery;
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface ISortable {
    helper?: JQuery;
    start(event: JQueryEventObject): void;
    stop(): void;
    cancel(): void;
    refreshItems(): void;
    runAction(action: string, ...data: any[]): (JQuery | boolean | undefined);
}
