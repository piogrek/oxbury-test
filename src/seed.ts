import { Database } from 'sqlite3';
const db = new Database('db.sqlite');
import fs from 'fs';
import { Application, Farm, Farmer, Product } from './models';

//create schema and seed data
export default function createAndSeed(): Promise<void> {
    return new Promise<void>((resolve, reject) => {

        db.on("error", function (error) {
            console.log("Getting an error : ", error);
        });
        // Read and execute the SQL query in ./sql/articles.sql
        try {
            db.exec(fs.readFileSync('./sql/schema.sql').toString());
        } catch (error) {

        }
        const data = JSON.parse(fs.readFileSync('./data.json').toString())
        data.product.forEach((product: Product) => {
            db.exec(`INSERT OR REPLACE INTO product (id, type, name) VALUES (${product.id}, '${product.type}', '${product.name}')`)
            // console.log("updating product")
        })
        data.farm.forEach((farm: Farm) => {
            db.exec(`INSERT OR REPLACE INTO farm (id, name, num_cows, num_chickens, num_pigs, acres_farmed) VALUES (${farm.id}, '${farm.name}', ${farm.num_cows}, ${farm.num_chickens}, ${farm.num_pigs}, ${farm.acres_farmed})`)
            // console.log("updating farm")
        })
        data.farmer.forEach((farmer: Farmer) => {
            db.exec(`INSERT OR REPLACE INTO farmer (id, name, age, phone_number, farm_id) VALUES (${farmer.id}, '${farmer.name}', ${farmer.age}, ${farmer.phone_number}, ${farmer.farm_id})`)
            // console.log("updating farm")
        })
        data.application.forEach((application: Application) => {
            db.exec(`INSERT OR REPLACE INTO application (id, type, amount_requested, status, product_id, farmer_id) VALUES (${application.id}, '${application.type}', ${application.amount_requested}, '${application.status}', ${application.product_id}, ${application.farmer_id})`)
            // console.log("updating application")
        })

        resolve()
    })

}