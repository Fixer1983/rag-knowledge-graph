import { GraphDB } from './graph';
const db = new GraphDB('bolt://localhost');
db.query('MATCH (n) RETURN n');
