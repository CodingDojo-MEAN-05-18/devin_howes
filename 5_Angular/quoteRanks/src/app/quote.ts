export class Quote {
    constructor(
        public id: number = null,
        public author: string = '',
        public quote: string = '',
        public score: number = null,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date(),
    ) {}
}
