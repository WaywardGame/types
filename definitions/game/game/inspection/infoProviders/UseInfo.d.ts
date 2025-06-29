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
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { EntityType } from "@wayward/game/game/entity/IEntity";
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import type { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type { Quality } from "@wayward/game/game/IObject";
import type Island from "@wayward/game/game/island/Island";
import type Translation from "@wayward/game/language/Translation";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export interface IDescribed {
    entityType: EntityType;
    type: number;
    referenceId?: number;
    quality?: Quality;
    island: Island;
    description: any;
}
export type DescribedDescription<T extends IDescribed> = Exclude<T["description"], undefined>;
export interface IUseInfoBase<T extends IDescribed, A extends ActionType> {
    entityType: T["entityType"];
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
export type InfoUnion<T extends IDescribed, ACTION extends ActionType> = {
    [K in T["entityType"]]: IUseInfoBase<Extract<T, {
        entityType: K;
    }>, ACTION>;
}[T["entityType"]];
export type UseInfoPredicate<I extends IUseInfoBase<T, ACTION>, T extends IDescribed, ACTION extends ActionType> = (info: IUseInfoBase<T, ACTION>) => I | undefined;
export type UseInfoHandler<I extends IUseInfoBase<T, ACTION>, T extends IDescribed, ACTION extends ActionType> = (info: I, context: InfoProviderContext) => Array<ArrayOr<TranslationGenerator | InfoProvider> | undefined> | Translation | InfoProvider | undefined;
export type UseInfoDisplayLevelGetter<I extends IUseInfoBase<T, ACTION>, T extends IDescribed, ACTION extends ActionType> = (info: I, context: InfoProviderContext) => InfoDisplayLevel;
export type UseInfoMethod<I extends IUseInfoBase<T, ACTION>, T extends IDescribed, ACTION extends ActionType, ARGS extends any[], RETURN> = (info: I, ...args: ARGS) => RETURN;
export interface IUseInfoFactory<I extends IUseInfoBase<T, A>, T extends IDescribed, A extends ActionType, M extends Record<string, AnyFunction> = {}> {
    actions<A2 extends ActionType[]>(...actions: A2): IUseInfoFactory<IUseInfoBase<T, A | A2[number]>, T, A | A2[number]>;
    handle<I2 extends I>(predicate: UseInfoPredicate<I2, T, A>): IUseInfoFactory<I2, T, A, M>;
    method<METHOD_NAME extends string, METHOD_ARGS extends any[], METHOD_RETURN>(name: METHOD_NAME, method: UseInfoMethod<I & {
        methods: M;
    }, T, A, METHOD_ARGS, METHOD_RETURN>): IUseInfoFactory<I, T, A, M & Record<METHOD_NAME, (...args: METHOD_ARGS) => METHOD_RETURN>>;
    apply(handler: UseInfoHandler<I & {
        methods: M;
    }, T, A>): UseInfo<I, A, M, T>;
}
export type IGetUseInfo<USE_INFO extends UseInfo<any, any, any>> = USE_INFO extends UseInfo<infer I extends IUseInfoBase<any, any>, any, any> ? I : never;
export default class UseInfo<I extends IUseInfoBase<T, A>, A extends ActionType, M extends Record<string, AnyFunction>, T extends IDescribed = any> {
    readonly predicates: Array<UseInfoPredicate<I, T, A>>;
    readonly handle: UseInfoHandler<I & {
        methods: M;
    }, T, A>;
    readonly methods: {
        [KEY in keyof M]: (info: I, ...args: ArgumentsOf<M[KEY]>) => ReturnType<M[KEY]>;
    };
    static of<T extends IDescribed>(): IUseInfoFactory<IUseInfoBase<T, never>, T, never>;
    displayLevel: InfoDisplayLevel | UseInfoDisplayLevelGetter<I, T, A>;
    ownRow?: InfoDisplayLevel;
    private constructor();
    initializeInfo(info: I, context: InfoProviderContext): I & IItemUseInfo<T, A, M>;
    setDisplayLevel(level: InfoDisplayLevel | UseInfoDisplayLevelGetter<I, T, A>): this;
    setOwnRow(level?: InfoDisplayLevel): this;
    of<T2 extends T>(): UseInfo<IUseInfoBase<T2, A>, A, M, T2>;
}
