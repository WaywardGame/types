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
interface IDictionarySchema {
    type: "object";
    properties: Record<string, any>;
}
export default function generateSchema(): {
    title: string;
    description: string;
    type: string;
    properties: {
        extends: {
            description: string;
            type: string;
        };
        name: {
            description: string;
            type: string;
        };
        alternateFontStyle: {
            description: string;
            enum: boolean[];
        };
        dictionaries: {
            description: string;
            type: string;
            properties: Record<string, IDictionarySchema>;
        };
        pluralizationRules: {
            description: string;
            type: string;
            properties: {
                pluralRules: {
                    description: string;
                    type: string;
                    additionalProperties: {
                        type: string;
                    };
                };
                singularRules: {
                    description: string;
                    type: string;
                    additionalProperties: {
                        type: string;
                    };
                };
                uncountables: {
                    description: string;
                    type: string;
                    minItems: number;
                    items: {
                        type: string;
                    };
                };
                irregularRules: {
                    description: string;
                    type: string;
                    minItems: number;
                    items: {
                        type: string;
                        items: {
                            type: string;
                        }[];
                    };
                };
                articleRules: {
                    description: string;
                    type: string;
                    minItems: number;
                    items: {
                        type: string;
                        items: ({
                            anyOf: ({
                                type: string;
                                properties?: undefined;
                                required?: undefined;
                            } | {
                                type: string;
                                properties: {
                                    min: {
                                        type: string;
                                    };
                                    max: {
                                        type: string;
                                    };
                                };
                                required: string[];
                            })[];
                            type?: undefined;
                        } | {
                            type: string;
                            anyOf?: undefined;
                        })[];
                    };
                };
            };
            additionalProperties: boolean;
        };
    };
    dependencies: {
        alternateFontStyle: string[];
    };
    additionalProperties: boolean;
    allOf: ({
        anyOf: {
            required: string[];
        }[];
        oneOf?: undefined;
    } | {
        oneOf: {
            required: string[];
        }[];
        anyOf?: undefined;
    })[];
};
export {};
