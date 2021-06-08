interface TaskInterface {
    add(task: string, data: TaskInput): void
    list(): number
    get(task: string): Object | any
    remove(task: string): void
}
interface TaskInput {
    date: Date,
    stages: any
}

interface TaskOutput {
    index: number;
    id: string;
    data: any | null;
}