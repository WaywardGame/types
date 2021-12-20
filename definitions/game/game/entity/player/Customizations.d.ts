/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ICharacter, IColorDescription, ICustomizations, IHairstyleDescription } from "game/entity/IHuman";
import { HairStyle } from "game/entity/IHuman";
import type { Random } from "utilities/random/Random";
export declare const hairstyleDescriptions: OptionalDescriptions<HairStyle, IHairstyleDescription>;
export declare const hairColorDescriptions: Record<number, IColorDescription | undefined>;
export declare const skinColorDescriptions: Record<number, IColorDescription | undefined>;
export declare function generateRandomCustomization(random: Random): ICustomizations;
export declare function generateRandomCharacter(random: Random): ICharacter;
export declare enum ColorType {
    Hair = "hairColor",
    Skin = "skinColor"
}
export declare function getColorDescription(type: ColorType, color: string): IColorDescription;
