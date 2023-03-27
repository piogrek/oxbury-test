import express, { Request, Response } from 'express';

import { handleCreateFarmer, handleDeleteFarmer, handleGetFarmer, handleGetFarmers, handleUpdateFarmer } from './farmers'
import { handleCreateFarm, handleDeleteFarm, handleGetFarm, handleGetFarms, handleUpdateFarm } from './farms';
import { handleCreateApplication, handleDeleteApplication, handleGetApplication, handleGetApplications, handleUpdateApplication } from './applications';
import { handleCreateProduct, handleDeleteProduct, handleGetProduct, handleGetProducts, handleUpdateProduct } from './products';
import { Application, Farm, Farmer, Filter, Product } from './models';

export default function setupRoutes(app: express.Express) {

    // GET route to return all farmers
    app.get('/farmers', async (req: Request, res: Response) => {
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 30
        const page = req.query.page ? parseInt(req.query.page as string) : 0
        const filter: Filter<Farmer> = req.query.filter ? (req.query.filter as Filter<Farmer>) : null

        const data = await handleGetFarmers(limit, page, filter)
        res.status(200).json(data);
    });

    // GET route to return all farmers
    app.get('/farmers/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const data = await handleGetFarmer(id)
        res.status(200).json(data);
    });

    // put route to update farmer
    app.put('/farmers/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const { name, age, phoneNumber, farmId } = req.body;
        const data = await handleUpdateFarmer(id, name, age, phoneNumber, farmId)
        res.status(200).json(data);

    });

    // POST route to create a new farmer
    app.post('/farmers', async (req, res) => {
        const { name, age, phoneNumber, farmId } = req.body;
        const data = await handleCreateFarmer(name, age, phoneNumber, farmId)
        res.status(200).json(data);
    });

    // DELETE route to delete a farmer by ID
    app.delete('/farmers/:id', (req, res) => {
        const userId = parseInt(req.params.id);
        handleDeleteFarmer(userId)
        res.status(200).json({ success: true });
    });

    // GET route to return all farms
    app.get('/farms', async (req: Request, res: Response) => {
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 30
        const page = req.query.page ? parseInt(req.query.page as string) : 0
        const filter: Filter<Farm> = req.query.filter ? (req.query.filter as Filter<Farm>) : null

        const data = await handleGetFarms(limit, page, filter)
        res.status(200).json(data);
    });

    // GET route to return all farms
    app.get('/farms/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const data = await handleGetFarm(id)
        res.status(200).json(data);
    });

    // PUT route to update farm
    app.put('/farms/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const { name, num_cows, num_chickens, num_pigs, acres_farmed } = req.body;
        const data = await handleUpdateFarm(id, name, num_cows, num_chickens, num_pigs, acres_farmed)
        res.status(200).json(data);

    });

    // POST route to create a new farm
    app.post('/farms', async (req, res) => {
        const { id, name, num_cows, num_chickens, num_pigs, acres_farmed } = req.body;
        const data = await handleCreateFarm(name, num_cows, num_chickens, num_pigs, acres_farmed)
        res.status(200).json(data);
    });

    // DELETE route to delete a farm by ID
    app.delete('/farms/:id', (req, res) => {
        const userId = parseInt(req.params.id);
        handleDeleteFarm(userId)
        res.status(200).json({ success: true });
    });

    // GET route to return all products
    app.get('/products', async (req: Request, res: Response) => {
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 30
        const page = req.query.page ? parseInt(req.query.page as string) : 0
        const filter: Filter<Product> = req.query.filter ? (req.query.filter as Filter<Product>) : null

        const data = await handleGetProducts(limit, page, filter)
        res.status(200).json(data);
    });

    // GET route to return all products
    app.get('/products/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const data = await handleGetProduct(id)
        res.status(200).json(data);
    });

    // PUT route to update product
    app.put('/products/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const { name, type } = req.body;
        const data = await handleUpdateProduct(id, name, type)
        res.status(200).json(data);

    });

    // POST route to create a new product
    app.post('/products', async (req, res) => {
        const { name, type } = req.body;
        const data = await handleCreateProduct(name, type)
        res.status(200).json(data);
    });

    // DELETE route to delete a product by ID
    app.delete('/products/:id', (req, res) => {
        const userId = parseInt(req.params.id);
        handleDeleteProduct(userId)
        res.status(200).json({ success: true });
    });

    // GET route to return all applications
    app.get('/applications', async (req: Request, res: Response) => {
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 30
        const page = req.query.page ? parseInt(req.query.page as string) : 0
        const filter: Filter<Application> = req.query.filter ? (req.query.filter as Filter<Application>) : null

        const data = await handleGetApplications(limit, page, filter)
        res.status(200).json(data);
    });

    // GET route to return all applications
    app.get('/applications/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const data = await handleGetApplication(id)
        res.status(200).json(data);
    });

    // PUT route to update application  
    app.put('/applications/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const { type, amount_requested, status, product_id, farmer_id } = req.body;
        const data = await handleUpdateApplication(id, type, amount_requested, status, product_id, farmer_id)
        res.status(200).json(data);

    });

    // POST route to create a new application
    app.post('/applications', async (req, res) => {
        const { type, amount_requested, status, product_id, farmer_id } = req.body;
        const data = await handleCreateApplication(type, amount_requested, status, product_id, farmer_id)
        res.status(200).json(data);
    });

    // DELETE route to delete a application by ID
    app.delete('/applications/:id', (req, res) => {
        const userId = parseInt(req.params.id);
        handleDeleteApplication(userId)
        res.status(200).json({ success: true });
    });
}