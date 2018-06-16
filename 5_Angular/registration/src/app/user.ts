export class User {
    constructor(
        public id: number = null,
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public password: string = '',
        public passwordConf: string = '',
        public streetAddress: string = '',
        public address2: string = '',
        public city: string = '',
        public state: Array<string> = [],
        public lucky: boolean = true,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date(),
    ) {}
}
