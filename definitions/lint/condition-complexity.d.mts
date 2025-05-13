declare namespace _default {
    export namespace meta {
        export let type: string;
        export namespace docs {
            let description: string;
            let category: string;
            let recommended: boolean;
        }
        export { messages };
        export let schema: never[];
        export let fixable: string | undefined;
    }
    export { createRuleListener as create };
}
export default _default;
export type Context = TSESLint.RuleContext<keyof typeof messages, []>;
export type Complexity = {
    value: number;
    functionValue: number;
    conditional: boolean;
};
declare namespace messages {
    let conditionTooComplexVariable: string;
    let conditionTooComplexFunction: string;
}
/**
 * @param {Context} context
 * @returns {TSESLint.RuleListener}
 */
declare function createRuleListener(context: Context): TSESLint.RuleListener;
import type { TSESLint } from '@typescript-eslint/utils';
