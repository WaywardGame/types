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
type Decorator = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * **Note:** Do not intentionally throw errors through this decorated function. It does not close the region if an error is thrown.
 */
export default function SyncRegion(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
/**
 * **Note:** Do not intentionally throw errors through this decorated function. It does not close the region if an error is thrown.
 *
 * **Warning:** Do not combine this with other decorators.
 */
export default function SyncRegion<T>(detailProvider: (target: T) => string): Decorator;
export {};
