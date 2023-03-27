import { describe, it, expect, beforeAll, } from '@jest/globals';
import { handleCreateFarm, handleGetFarms, } from '../src/farms';
import { handleCreateFarmer, handleGetFarmers, } from '../src/farmers';
import { Farm, Farmer, Filter } from '../src/models';
import createAndSeed from '../src/seed';


beforeAll( () => {
     createAndSeed()
})

describe('test api creating', function () {
    it('test farms', async function () {
        var milliseconds = new Date().getTime();

        const newName = "new farm 111" + milliseconds

        let entities = await handleGetFarms(10, 0, { name: newName } as Filter<Farm>)
        expect(entities).toHaveLength(0)

        await handleCreateFarm(newName, 1, 2, 3, 4)
        entities = await handleGetFarms(10, 0, { name: newName } as Filter<Farm>)
        expect(entities).toHaveLength(1)
    })

    it('test farmers', async function () {
        var milliseconds = new Date().getTime();

        const newName = "new farmer 222" + milliseconds
        let entities = await handleGetFarmers(10, 0, { name: newName } as Filter<Farmer>)
        expect(entities).toHaveLength(0)

        await handleCreateFarmer(newName, 1, "2", 1169410)
        entities = await handleGetFarmers(10, 0, { name: newName } as Filter<Farmer>)
        expect(entities).toHaveLength(1)
    })

    it('test products', async function () {
        var milliseconds = new Date().getTime();

        const newName = "new product 333" + milliseconds

        let entities = await handleGetFarms(10, 0, { name: newName } as Filter<Farm>)
        expect(entities).toHaveLength(0)

        await handleCreateFarm(newName, 1, 2, 3, 4)
        entities = await handleGetFarms(10, 0, { name: newName } as Filter<Farm>)
        expect(entities).toHaveLength(1)
    })

    it('test applications', async function () {
        var milliseconds = new Date().getTime();

        const newName = "new application 4444" + milliseconds

        let entities = await handleGetFarms(10, 0, { name: newName } as Filter<Farm>)
        expect(entities).toHaveLength(0)

        await handleCreateFarm(newName, 1, 2, 3, 4)
        entities = await handleGetFarms(10, 0, { name: newName } as Filter<Farm>)
        expect(entities).toHaveLength(1)
    })


})

