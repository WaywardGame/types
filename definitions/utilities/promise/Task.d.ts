export default class Task {
    private readonly interval;
    static yield(quick?: boolean): Promise<void>;
    static post<T>(callback: () => Promise<T>, priority: "user-blocking" | "user-visible" | "background"): Promise<T>;
    private lastYieldEnd;
    constructor(interval?: number);
    reset(): void;
    yield(quick?: boolean): Promise<void>;
}
