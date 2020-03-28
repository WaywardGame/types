/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { InfoProvider } from "game/inspection2/InfoProvider";
import Translation from "language/Translation";
export default class FireInfoProvider extends InfoProvider {
    private readonly decayProvider;
    static getFireMessage(decay?: number): import("../../../language/dictionary/Message").default;
    private fireMessage;
    constructor(decayProvider: () => number);
    get(): never[] | Translation;
    getClass(): string[];
    onTickEnd(): void;
    initComponent(): import("../../../newui/component/Component").default;
    private getFireMessage;
}
