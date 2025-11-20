import Database from 'better-sqlite3';
// path to the file
const db = new Database('theembersun.db');
// make the article table
db.prepare(`
CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE,
    title TEXT,
    image TEXT, 
    content TEXT, 
);
`).run();
export default db;