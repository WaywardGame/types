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
export interface IDOMEvent {
    append(parent: Node): any;
    remove(parent: Node): any;
    appendChild(child: string | Node): any;
    removeChild(child: Node): any;
    appendToDocument(document: Document): any;
    removeFromDocument(document: Document): any;
}
export declare class DOMEvent<EVENT extends keyof IDOMEvent> extends CustomEvent<Parameters<IDOMEvent[EVENT]>> {
    constructor(type: EVENT, ...detail: Parameters<IDOMEvent[EVENT]>);
}
export default function (): void;
