import { Application, Filter } from "./models";
import { Database } from 'sqlite3';
const db = new Database('db.sqlite');

// get list of all Applications from database
export function handleGetApplications(limit: number, offset: number, filter: Filter<Application>): Promise<Application[]> {
    // return new promise of type Application[]
    return new Promise<Application[]>((resolve, reject) => {
        // create query filter based on the filter object
        let where = ""
        if (filter) {
            where = ["type","amount_requested","status","product_id","farmer_id"].filter(key => !!filter[key]).map(key => `${key} = '${filter[key]}'`).join(' AND ');
        }
        // get the Application from the db
        // return the Application
        db.all<Application>(`SELECT * FROM  application where ${where ? where : "1=1"} LIMIT ${limit} OFFSET ${offset}`, (err, rows) => { // this is the query    
            resolve(rows);
        })
    })
}

// get Application by id
export function handleGetApplication(id: number): Promise<Application> {
    return new Promise<Application>((resolve, reject) => {
        db.get<Application>(`SELECT * FROM application WHERE id = ${id}`, (err, row) => { // this is the query    
            resolve(row);
        })
    });

}

// delete Application by id
export function handleDeleteApplication(id: number): void {
    const dbr = db.run(`DELETE FROM Application WHERE id = ${id}`, (err) => { // this is the query    
        console.log("deleted Application")
    })
}

// assign values from the Application model to a new ApplicationItem
// and save the new ApplicationItem
export function handleCreateApplication(type: string, amount_requested: number, status: string, product_id: number, farmer_id: number): Promise<Application> {
    return new Promise<Application>((resolve, reject) => {

    });
}
// create new Application in the database
export function handleUpdateApplication(id: number, type: string, amount_requested: number, status: string, product_id: number, farmer_id: number): Promise<Application> {
    return new Promise<Application>((resolve, reject) => {

    });
}