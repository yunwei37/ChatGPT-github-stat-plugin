interface CacheEntry<T> {
    timestamp: number;
    data: T;
}

class StatCache<T> {
    private data: Record<string, CacheEntry<T>>;
    private maxAge: number;

    constructor(maxAge = 300000) {  // Default to 5 minutes
        this.data = {};
        this.maxAge = maxAge;
    }

    get(key: string): T | null {
        const entry = this.data[key];

        if (!entry) {
            return null;
        }

        if (Date.now() - entry.timestamp > this.maxAge) {
            delete this.data[key];
            return null;
        }

        return entry.data;
    }

    set(key: string, value: T): void {
        this.data[key] = {
            timestamp: Date.now(),
            data: value,
        };
    }
}
