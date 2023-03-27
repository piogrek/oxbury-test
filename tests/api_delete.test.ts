import { describe, it, expect, beforeAll, } from '@jest/globals';
import { handleDeleteFarm, handleGetFarm, } from '../src/farms';
import { handleDeleteFarmer, handleGetFarmer, } from '../src/farmers';
import { handleDeleteProduct, handleGetProduct, } from '../src/products';
import { handleDeleteApplication, handleGetApplication, } from '../src/applications';
import createAndSeed from '../src/seed';


beforeAll( () => {
     createAndSeed()
})
describe('test api deleting', function () {
    it('test farms', async function () {
        let entity = await handleGetFarm(1787204)
        // console.log("entity",entity)
        expect(entity).toBeDefined();
        await handleDeleteFarm(1787204)
        entity = await handleGetFarm(1787204)
        expect(entity).not.toBeDefined();
    })

    it('test applications', async function () {
        let entity = await handleGetApplication(1291540)
        expect(entity).toBeDefined();
        await handleDeleteApplication(1291540)
        entity = await handleGetApplication(1291540)
        expect(entity).not.toBeDefined();
    })

    it('test farmers', async function () {
        let entity = await handleGetFarmer(1359197)
        expect(entity).toBeDefined();
        await handleDeleteFarmer(1359197)
        entity = await handleGetFarmer(1359197)
        expect(entity).not.toBeDefined();
    })

    it('test products', async function () {
        let entity = await handleGetProduct(1614351)
        expect(entity).toBeDefined();
        await handleDeleteProduct(1614351)
        entity = await handleGetProduct(1614351)
        expect(entity).not.toBeDefined();
    })

})

