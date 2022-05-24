export interface Task {
    title: string;
    done: boolean;
    category?: Category;
}
export type Category = "linux" | 'react' | 'study' | 'gym' | 'general';
