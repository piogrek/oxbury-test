import { Farm } from "./models";
import { Database } from 'sqlite3';
const db = new Database('db.sqlite');

// get list of all farms from database
export function handleGetFarms(limit: number, offset: number): Promise<Farm[]> {
    // return new promise of type Farm[]
    return new Promise<Farm[]>((resolve, reject) => {
        db.all<Farm>(`SELECT * FROM farm LIMIT ${limit} OFFSET ${offset}`, (err, rows) => { // this is the query    
            resolve(rows);
        })
    })
}

// get farm by id
export function handleGetFarm(id: number): Promise<Farm> {
    return new Promise<Farm>((resolve, reject) => {
        db.get<Farm>(`SELECT * FROM farm WHERE id = ${id}`, (err, row) => { // this is the query    
            resolve(row);
        })
    });

}

// delete farm by id
export function handleDeleteFarm(id: number): void {
    db.run(`DELETE FROM farm WHERE id = ${id}`, (err, row) => { // this is the query    
        console.log("deleted farm")
    })
}

// assign values from the Farm model to a new FarmItem
// and save the new FarmItem
export function handleCreateFarm(name: string, num_cows: number, num_chickens: number, num_pigs: number, acres_farmed: number): Promise<Farm> {
    return new Promise<Farm>((resolve, reject) => {
        db.run(`INSERT INTO farm (name, num_cows, num_chickens, num_pigs, acres_farmed) VALUES ('${name}', ${num_cows}, ${num_chickens}, ${num_pigs}, ${acres_farmed})`, (err, row) => { // this is the query    
            resolve(row);
        })
    });
}
// create new farm in the database
export function handleUpdateFarm(id: number, name: string, num_cows: number, num_chickens: number, num_pigs: number, acres_farmed: number): Promise<Farm> {
    return new Promise<Farm>((resolve, reject) => {
        db.run(`UPDATE farm SET name = '${name}', num_cows = ${num_cows}, num_chickens = ${num_chickens}, num_pigs = ${num_pigs}, acres_farmed = ${acres_farmed} WHERE id = ${id}`, (err, row) => { // this is the query    
            resolve(row);
        })
    });
}