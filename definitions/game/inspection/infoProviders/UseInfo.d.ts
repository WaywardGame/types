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
import { ActionType } from "game/entity/action/IAction";
import { CreationId } from "game/IGame";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import { Quality } from "game/IObject";
import Translation from "language/Translation";
import { TranslationGenerator } from "ui/component/IComponent";
export interface IDescribed {
    objectType: CreationId;
    type: number;
    quality?: Quality;
    description(): any;
}
export declare type DescribedDescription<T extends IDescribed> = Exclude<ReturnType<T["description"]>, undefined>;
export interface IUseInfoBase<T extends IDescribed, A extends ActionType> {
    objectType: T["objectType"];
    value?: T;
    type: T["type"];
    description: DescribedDescription<T>;
    quality: Quality;
    action: A;
    union: InfoUnion<T, A>;
    details: Set<symbol>;
}
export interface IItemUseInfo<T extends IDescribed, A extends ActionType, M extends Record<string, AnyFunction>> extends IUseInfoBase<T, A> {
    context: InfoProviderContext;
    methods: M;
}
export declare type InfoUnion<T extends IDescribed, ACTION extends ActionType> = {
    [K in T["objectType"]]: IUseInfoBase<Extract<T, {
        objectType: K;
    }>, ACTION>;
}[T["objectType"]];
export declare type UseInfoPredicate<I extends IUseInfoBase<T, ACTION>, T extends IDescribed, ACTION extends ActionType> = (info: IUseInfoBase<T, ACTION>) => I | undefined;
export declare type UseInfoHandler<I extends IUseInfoBase<T, ACTION>, T extends IDescribed, ACTION extends ActionType> = (info: I, context: InfoProviderContext) => Array<ArrayOr<TranslationGenerator | InfoProvider> | undefined> | Translation | InfoProvider | undefined;
export declare type UseInfoMethod<I extends IUseInfoBase<T, ACTION>, T extends IDescribed, ACTION extends ActionType, ARGS extends any[], RETURN> = (info: I, ...args: ARGS) => RETURN;
export interface IUseInfoFactory<I extends IUseInfoBase<T, A>, T extends IDescribed, A extends ActionType, M extends Record<string, AnyFunction> = {}> {
    actions<A2 extends ActionType[]>(...actions: A2): IUseInfoFactory<IUseInfoBase<T, A | A2[number]>, T, A | A2[number]>;
    handle<I2 extends I>(predicate: UseInfoPredicate<I2, T, A>): IUseInfoFactory<I2, T, A, M>;
    method<METHOD_NAME extends string, METHOD_ARGS extends any[], METHOD_RETURN>(name: METHOD_NAME, method: UseInfoMethod<I & {
        methods: M;
    }, T, A, METHOD_ARGS, METHOD_RETURN>): IUseInfoFactory<I, T, A, M & {
        [key in METHOD_NAME]: (...args: METHOD_ARGS) => METHOD_RETURN;
    }>;
    apply(handler: UseInfoHandler<I & {
        methods: M;
    }, T, A>): UseInfo<I, A, M, T>;
}
export default class UseInfo<I extends IUseInfoBase<T, A>, A extends ActionType, M extends Record<string, AnyFunction>, T extends IDescribed = any> {
    readonly predicates: Array<UseInfoPredicate<I, T, A>>;
    readonly handle: UseInfoHandler<I & {
        methods: M;
    }, T, A>;
    readonly methods: M;
    static of<T extends IDescribed>(): IUseInfoFactory<IUseInfoBase<T, never>, T, never>;
    displayLevel: InfoDisplayLevel;
    ownRow?: true;
    private constructor();
    initializeInfo(info: I, context: InfoProviderContext): I & IItemUseInfo<T, A, M>;
    setDisplayLevel(level: InfoDisplayLevel): this;
    setOwnRow(): this;
    of<T2 extends T>(): UseInfo<IUseInfoBase<T2, A>, A, M, T2>;
}
