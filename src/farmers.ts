import { Farmer, Filter } from "./models";
import { Database } from 'sqlite3';
const db = new Database('db.sqlite');

// get list of all farmers from the database
export function handleGetFarmers(limit: number, offset: number, filter: Filter<Farmer>): Promise<Farmer[]> {
    // return new promise of type Farmer[]
    return new Promise<Farmer[]>((resolve, reject) => {
        // create query filter based on the filter object
        let where = ""
        if (filter) {
            where = ["name", "age", "phone_number", "farm_id"].filter(key => !!filter[key]).map(key => `${key} = '${filter[key]}'`).join(' AND ');
        }
        // get the farmer from the blockchain
        // return the farmer
        db.all<Farmer>(`SELECT * FROM farmer where ${where ? where : "1=1"} LIMIT ${limit} OFFSET ${offset}`, (err, rows) => { // this is the query    
            resolve(rows);
        })
    });
}

// get farmer by id
export function handleGetFarmer(id: number): Promise<Farmer> {
    return new Promise<Farmer>((resolve, reject) => {
        db.get<Farmer>(`SELECT * FROM farmer WHERE id = ${id}`, (err, row) => { // this is the query    
            resolve(row);
        })
    });

}

// delete farmer by id
export function handleDeleteFarmer(id: number): void {
    db.run(`DELETE FROM farmer WHERE id = ${id}`, (err, row) => { // this is the query    
        console.log("deleted farmer")
    })
}

// create new farmer in the database
export function handleCreateFarmer(name: string, age: number, phoneNumber: string, farmId: number): Promise<Farmer> {
    return new Promise<Farmer>((resolve, reject) => {
        db.run(`INSERT INTO farmer (name, age, phone_number, farm_id) VALUES ('${name}', ${age}, ${phoneNumber}, ${farmId})`, (err, row) => { // this is the query    
            resolve(row);
        })
    });
}
// create new farmer in the database
export function handleUpdateFarmer(id: number, name: string, age: number, phoneNumber: string, farmId: number): Promise<Farmer> {
    return new Promise<Farmer>((resolve, reject) => {
        db.run(`UPDATE farmer SET name = '${name}', age = ${age}, phone_number = ${phoneNumber}, farm_id = ${farmId} WHERE id = ${id}`, (err, row) => { // this is the query    
            resolve(row);
        })
    });
}