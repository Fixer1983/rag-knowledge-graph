export class GraphDB {
    constructor(private uri: string) {}
    async query(cypher: string) {
        console.log(`Executing: ${cypher}`);
        return [];
    }
}
