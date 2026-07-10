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
    }
    export { createRuleListener as create };
}
export default _default;
export type Context = ESLintUtils<keyof typeof messages, []>;
declare namespace messages {
    let useUsing: string;
    let useAwaitUsing: string;
    let holdWithUsing: string;
    let holdWithAwaitUsing: string;
}
/**
 * @param {Context} context
 * @returns {TSESLint.RuleListener}
 */
declare function createRuleListener(context: Context): ESLintUtils;
