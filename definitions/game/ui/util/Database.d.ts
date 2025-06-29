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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
declare class Database<SCHEMA> extends EventEmitter.Host<Database.IEvents> {
    private readonly schema;
    private database?;
    getDatabase(): Promise<IDBDatabase>;
    constructor(schema: Database.Schema<SCHEMA>);
    get<KEY extends keyof SCHEMA>(store: KEY, key: string, index?: string): Promise<SCHEMA[KEY] | undefined>;
    all<KEY extends keyof SCHEMA>(store: KEY, range?: IDBKeyRange): Promise<Array<SCHEMA[KEY]>>;
    all<KEY extends keyof SCHEMA>(store: KEY, key: IDBKeyRange | string, index: string): Promise<Array<SCHEMA[KEY]>>;
    set<KEY extends keyof SCHEMA>(store: KEY, key: string, value: SCHEMA[KEY]): Promise<void>;
    delete(store: keyof SCHEMA, key: string): Promise<void>;
    keys(store: keyof SCHEMA): Promise<string[]>;
    count(store: keyof SCHEMA): Promise<number>;
    clear(store: keyof SCHEMA): Promise<void>;
    transaction<STORES extends Array<keyof SCHEMA>, T>(over: STORES, mode: IDBTransactionMode, transaction: Database.Transaction.Initialiser<SCHEMA, STORES, T>): Promise<T>;
    transaction<STORES extends Array<keyof SCHEMA>, T>(over: STORES, transaction: Database.Transaction.Initialiser<SCHEMA, STORES, T>): Promise<T>;
    stagedTransaction<STORES extends Array<keyof SCHEMA>>(over: STORES, mode?: IDBTransactionMode): Database.StagedTransaction<Pick<SCHEMA, STORES[number]>, STORES>;
    upgrade(upgrade: Database.Upgrade): Promise<void>;
    stores(): Promise<DOMStringList>;
    hasStore(...stores: Array<keyof SCHEMA>): Promise<boolean>;
    createStore(store: keyof SCHEMA, options?: IDBObjectStoreParameters, init?: (store: IDBObjectStore) => any): Promise<void>;
    dispose(): Promise<void>;
    private getVersion;
    private open;
    private close;
}
declare namespace Database {
    type Upgrade = (database: IDBDatabase, transaction: IDBTransaction) => any;
    interface Schema<SCHEMA> {
        _schema: SCHEMA;
        id: string;
        versions: Database.Upgrade[];
    }
    function schema<SCHEMA>(id: string, ...versions: Database.Upgrade[]): Schema<SCHEMA>;
    interface IEvents {
        open(): any;
        close(event: Event): any;
    }
    class Transaction<SCHEMA> extends EventEmitter.Host<Transaction.IEvents> {
        private readonly transaction;
        private complete;
        private errored;
        constructor(transaction: IDBTransaction);
        get<KEY extends keyof SCHEMA>(name: KEY, key: string, index?: string): Promise<SCHEMA[KEY] | undefined>;
        all<KEY extends keyof SCHEMA>(name: KEY, range?: IDBKeyRange): Promise<Array<SCHEMA[KEY]>>;
        all<KEY extends keyof SCHEMA>(name: KEY, key: IDBKeyRange | string, index: string): Promise<Array<SCHEMA[KEY]>>;
        set<KEY extends keyof SCHEMA>(name: KEY, key: string, value: SCHEMA[KEY]): Promise<void>;
        delete(name: keyof SCHEMA, key: string): Promise<void>;
        keys(name: keyof SCHEMA): Promise<string[]>;
        count(name: keyof SCHEMA): Promise<number>;
        clear(name: keyof SCHEMA): Promise<void>;
        private do;
        commit(): Promise<[event: Event] | undefined>;
    }
    namespace Transaction {
        type Initialiser<SCHEMA, STORES extends Array<keyof SCHEMA>, T> = (transaction: Transaction<Pick<SCHEMA, STORES[number]>>) => Promise<T>;
        interface IEvents {
            complete(event: Event): any;
            error(error: Error, event: Event): any;
        }
    }
    class StagedTransaction<SCHEMA, STORES extends Array<keyof SCHEMA>> {
        private readonly database;
        private readonly over;
        private readonly mode;
        constructor(database: Database<SCHEMA>, over: STORES, mode: IDBTransactionMode);
        private readonly pending;
        private activeTransaction?;
        private queue;
        private tryExhaustQueue;
        await(): Promise<void>;
        transaction<T>(initialiser: Transaction.Initialiser<SCHEMA, STORES, T>): Promise<T>;
        get<KEY extends keyof SCHEMA>(store: KEY, key: string, index?: string): Promise<SCHEMA[KEY] | undefined>;
        all<KEY extends keyof SCHEMA>(store: KEY): Promise<Array<SCHEMA[KEY]>>;
        all<KEY extends keyof SCHEMA>(store: KEY, range: IDBKeyRange | string, index: string): Promise<Array<SCHEMA[KEY]>>;
        set<KEY extends keyof SCHEMA>(store: KEY, key: string, value: SCHEMA[KEY]): Promise<void>;
        delete(store: keyof SCHEMA, key: string): Promise<void>;
        keys(store: keyof SCHEMA): Promise<string[]>;
        count(store: keyof SCHEMA): Promise<number>;
        clear(store: keyof SCHEMA): Promise<void>;
    }
}
export default Database;
