import { describe, it, expect, test, beforeAll } from '@jest/globals';
import { handleGetFarms } from '../src/farms';
import { Application, Farm, Farmer, Filter, Product } from '../src/models';
import { handleGetFarmers } from '../src/farmers';
import { handleGetProducts } from '../src/products';
import { handleGetApplications } from '../src/applications';
import createAndSeed from '../src/seed';

beforeAll(async () => {
    createAndSeed()
})   

describe('test api filtering', function () {
    it('test filters for farms', async function () {
        const rows = await handleGetFarms(10, 0, { name: "Postley & Sons" } as Filter<Farm>)
        expect(rows).toHaveLength(1);
        expect(rows[0].name).toBe("Postley & Sons");
    })
    it('test filters for farmers', async function () {
        const rows = await handleGetFarmers(10, 0, { name: "James Miller" } as Filter<Farmer>)
        expect(rows).toHaveLength(1);
        expect(rows[0].name).toBe("James Miller");
    })
    it('test filters for products', async function () {
        const rows = await handleGetProducts(10, 0, { name: "45 Day Notice Account" } as Filter<Product>)
        expect(rows).toHaveLength(1);
        expect(rows[0].name).toBe("45 Day Notice Account");
    })
    it('test filters for applications', async function () {
        const rows = await handleGetApplications(10, 0, { farmer_id: 1215200, product_id: 1435004, status: "in_progress" } as Filter<Application>)
        expect(rows).toHaveLength(1);
        expect(rows[0].amount_requested).toBe(11800);

    })
})

