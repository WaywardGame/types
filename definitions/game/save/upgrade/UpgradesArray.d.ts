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
export declare class UpgradesArrayCompressedPusher {
    private readonly upgradeRecord;
    push(message: string): void;
    get messages(): string[];
}
export default class UpgradesArray extends Array {
    bulk(apply: (upgrades: UpgradesArrayCompressedPusher) => any): void;
}
