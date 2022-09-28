export default class todo {
    id!: string;
    description: string;
    status: boolean;
    
    constructor() {
        this.description = '',
        this.status = false
    }

    static generateMockTodo(): todo {
        return {
            id: 'new',
            description: "",
            status: false
        }
    }
}