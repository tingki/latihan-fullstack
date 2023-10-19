import postgres from "postgres";
const sql = postgres('postgres://postgres:1@localhost:5432/latihal-fullstack');
export default sql;