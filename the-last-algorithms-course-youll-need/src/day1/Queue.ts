// 2 O(1)

type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const tail = this.tail;
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail = node;
        this.tail.next = node;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length = Math.max(0, this.length - 1);

        const head = this.head;
        this.head = this.head.next;

        // Free memory
        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
