import { describe, it, expect, test } from '@jest/globals';
import { handleGetFarms } from '../src/farms';
import { Application, Farm, Farmer, Filter, Product } from '../src/models';
import { handleGetFarmers } from '../src/farmers';
import { handleGetProducts } from '../src/products';
import { handleGetApplication, handleGetApplications } from '../src/applications';

describe('test api', function () {
    it('test filters for all entities', async function () {
        let rows: any = await handleGetFarms(10, 0, { name: "Postley & Sons" } as Filter<Farm>)
        expect(rows).toHaveLength(1);
        expect(rows[0].name).toBe("Postley & Sons");

        rows = await handleGetFarmers(10, 0, { name: "James Miller" } as Filter<Farmer>)
        console.log("rows", rows)
        expect(rows).toHaveLength(1);
        expect(rows[0].name).toBe("James Miller");

        rows = await handleGetProducts(10, 0, { name: "45 Day Notice Account" } as Filter<Product>)
        expect(rows).toHaveLength(1);
        expect(rows[0].name).toBe("45 Day Notice Account");

        rows = await handleGetApplications(10, 0, { farmer_id: 1215200, product_id: 1435004, status: "in_progress" } as Filter<Application>)
        expect(rows).toHaveLength(1);
        expect(rows[0].amount_requested).toBe(11800);
    })
})