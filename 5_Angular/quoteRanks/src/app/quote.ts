export class Quote {
    constructor(
        public id: number = null,
        public author: string = '',
        public content: string = '',
        public score: number = 0,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date(),
    ) {}
}
