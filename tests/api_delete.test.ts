import { describe, it, expect, } from '@jest/globals';
import { handleDeleteFarm, handleGetFarm, } from '../src/farms';
import { handleDeleteFarmer, handleGetFarmer, } from '../src/farmers';
import { handleDeleteProduct, handleGetProduct, } from '../src/products';
import { handleDeleteApplication, handleGetApplication, } from '../src/applications';

describe('test api deleting', function () {
    it('test filters for farms', async function () {
        let entity = await handleGetFarm(1787204)
        expect(entity).not.toBe(undefined);
        await handleDeleteFarm(1787204)
        entity = await handleGetFarm(1787204)
        expect(entity).toBe(undefined);
    })

    it('test filters for applications', async function () {
        let entity = await handleGetApplication(1291540)
        expect(entity).not.toBe(undefined);
        await handleDeleteApplication(1291540)
        entity = await handleGetApplication(1291540)
        expect(entity).toBe(undefined);
    })

    it('test filters for farmers', async function () {
        let entity = await handleGetFarmer(1359197)
        expect(entity).not.toBe(undefined);
        await handleDeleteFarmer(1359197)
        entity = await handleGetFarmer(1359197)
        expect(entity).toBe(undefined);
    })

    it('test filters for products', async function () {
        let entity = await handleGetProduct(1614351)
        expect(entity).not.toBe(undefined);
        await handleDeleteProduct(1614351)
        entity = await handleGetProduct(1614351)
        expect(entity).toBe(undefined);
    })

})

