export declare abstract class TimeSpan {
    static create(span: 'day' | 'week' | 'month' | 'year'): TimeSpan;
    protected firstNear: number;
    far: number;
    near: number;
    type: string;
    abstract prev(): void;
    abstract next(): void;
    abstract get title(): string;
    abstract get labels(): string[];
    protected abstract getDayArray(): Date[];
    get canNext(): boolean;
    get canPrev(): boolean;
    getDayValues(dayValues: {
        t: string;
        v: number;
    }[]): number[];
}
