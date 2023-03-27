import { Application } from "./models";
import { Database } from 'sqlite3';
const db = new Database('db.sqlite');

// get list of all Applications from database
export function handleGetApplications(limit: number, offset: number): Promise<Application[]> {
    // return new promise of type Application[]
    return new Promise<Application[]>((resolve, reject) => {
        // get the Application from the db
        // return the Application
        db.all<Application>(`SELECT * FROM  application LIMIT ${limit} OFFSET ${offset}`, (err, rows) => { // this is the query    
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
        console.log("deleted Application", err)
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