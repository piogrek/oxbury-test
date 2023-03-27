import { Product } from "./models";
import { Database } from 'sqlite3';
const db = new Database('db.sqlite');

// get list of all Products from database
export function handleGetProducts(limit: number, offset: number): Promise<Product[]> {
    // return new promise of type Product[]
    return new Promise<Product[]>((resolve, reject) => {
        // get the product from the db
        // return the Product
        db.all<Product>(`SELECT * FROM product LIMIT ${limit} OFFSET ${offset}`, (err, rows) => { // this is the query    
            resolve(rows);
        })
    })
}

// get Product by id
export function handleGetProduct(id: number): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
        db.get<Product>(`SELECT * FROM product WHERE id = ${id}`, (err, row) => { // this is the query    
            resolve(row);
        })
    });

}

// delete Product by id
export function handleDeleteProduct(id: number): void {
    db.run(`DELETE FROM product WHERE id = ${id}`, (err, row) => { // this is the query    
        console.log("deleted product")
    })
}

// assign values from the Product model to a new ProductItem
// and save the new ProductItem
export function handleCreateProduct(name: string, type: string): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {

    });
}
// create new Product in the database
export function handleUpdateProduct(id: number, name: string, type: string): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {

    });
}