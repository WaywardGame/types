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
import { Types } from "@wayward/game/save/serializer/ISerializer";
import type Registrar from "@wayward/utilities/Registrar";
export declare namespace SerializerConcreteTypes {
    export interface IConcerteRegistrar {
        baseClass: any;
        baseType?: Types;
        registrar: Registrar<any>;
    }
    export interface IConcreteTypeItem {
        type: Types;
        value: IConcerteRegistrar | any;
        /**
         * Set to true to ensure no new saves use this type
         */
        deprecated?: boolean;
        /**
         * Set to true if this type used to have a registrar, but no longer does
         */
        legacyRegistrar?: boolean;
    }
    interface ITypeInfoResult {
        dataType: Types;
        subDataType?: number;
    }
    export const concreteTypesTypeMap: Map<number, IConcreteTypeItem>;
    export function lookupType(value: any): ITypeInfoResult | undefined;
    export {};
}
