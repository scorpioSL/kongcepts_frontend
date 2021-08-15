export class SharedQueryModel {
    limit?: number;
    offset?: number;
    order?: 'ASC' | 'DESC';

    constructor() {
        this.limit = 11;
        this.offset = 0;
    }

    next() {
        this.limit += 10;
        this.offset += 10;
    }

    prev() {
        this.limit -= 10;
        this.offset -= 10;
    }
}
