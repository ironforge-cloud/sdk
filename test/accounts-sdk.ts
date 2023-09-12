import test from 'node:test'
import assert from 'assert/strict'
import { IronforgeSdk } from '../src/sdk'
import spok from 'spok'

const API_KEY = process.env.IF_PLATFORM_API_KEY
if (API_KEY == null) throw new Error('IF_PLATFORM_API_KEY not set')

// -----------------
// Aggregate
// -----------------
test('accounts-sdk: aggregate', async () => {
  const sdk = new IronforgeSdk(API_KEY)
  const { result, status } = await sdk.accounts.aggregate({
    body: {
      pipeline: [
        {
          $match: {
            'data.data.sellerFeeBasisPoints': {
              $gt: 750,
            },
          },
        },
        {
          $sort: {
            'data.data.sellerFeeBasisPoints': 1,
          },
        },
        {
          $limit: 20,
        },
        {
          $sort: {
            'data.data.itemsAvailable': 1,
          },
        },
        {
          $limit: 5,
        },
      ],
    },
    cluster: 'devnet',
    program: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
  })

  assert.equal(status, 200)
  assert(result.error == null)
  result.data
  assert.equal(result.data?.length, 5)
})

// -----------------
// Filter By Type
// -----------------
test('accounts-sdk: filter by type', async (t) => {
  const sdk = new IronforgeSdk(API_KEY)
  const { result, status } = await sdk.accounts.filterByType({
    accountType: 'CandyMachine',
    body: { filter: { 'data.data.price': 250 } },
    cluster: 'devnet',
    program: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
    limit: 2,
    offset: 0,
  })
  assert.equal(status, 200)
  spok(t, result, {
    metadata: { count: 2, offset: 0, limit: 2, hasMore: true },
    error: null,
  })
  assert.equal(result.data?.length, 2)
})

// -----------------
// Filter
// -----------------
test('accounts-sdk: filter', async (t) => {
  const sdk = new IronforgeSdk(API_KEY)
  const { result, status } = await sdk.accounts.filter({
    body: { filter: { 'data.data.price': 250 } },
    cluster: 'devnet',
    program: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
    limit: 3,
    offset: 0,
  })
  assert.equal(status, 200)
  spok(t, result, {
    metadata: { count: 3, offset: 0, limit: 3, hasMore: true },
    error: null,
  })
  assert.equal(result.data?.length, 3)
})

// -----------------
// Find By Type
// -----------------
test('accounts-sdk: find by type', async (t) => {
  const sdk = new IronforgeSdk(API_KEY)
  const { result, status } = await sdk.accounts.findByType({
    accountType: 'CandyMachine',
    cluster: 'devnet',
    program: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
    limit: 2,
    offset: 0,
  })
  assert.equal(status, 200)
  spok(t, result, {
    metadata: { count: 2, offset: 0, limit: 2, hasMore: true },
    error: null,
  })
  assert(
    !(result.data as any[]).some((x: any) => x.account_type !== 'CandyMachine')
  )
  assert.equal(result.data?.length, 2)
})

// -----------------
// FindOne
// -----------------
test('accounts-sdk: findOne', async (t) => {
  const sdk = new IronforgeSdk(API_KEY)
  const { result, status } = await sdk.accounts.findOne({
    cluster: 'devnet',
    program: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
    address: 'Ei7njHQ4dk5WcfoJybgTQebdnWpyzV2MGJNJgcNGxeSd',
  })
  assert.equal(status, 200)
  spok(t, result, {
    error: spok.notDefined,
    data: {
      _id: 'Ei7njHQ4dk5WcfoJybgTQebdnWpyzV2MGJNJgcNGxeSd',
      account_type: 'CandyMachine',
      data: {
        authority: '8omKf9iJt2J7t9HFLFPFabLyCZqSQPWbfHbfFgThtnTv',
        wallet: '8omKf9iJt2J7t9HFLFPFabLyCZqSQPWbfHbfFgThtnTv',
        tokenMint: spok.notDefined,
        itemsRedeemed: spok.number,
      },
      size: spok.number,
      lamports: spok.number,
      slot: spok.number,
      approx_slot_time: spok.string,
    },
  })
})

// -----------------
// Memcmp
// -----------------
test('accounts-sdk: memcmp', async (t) => {
  const sdk = new IronforgeSdk(API_KEY)
  const { result, status } = await sdk.accounts.memcmp({
    body: {
      filters: [
        {
          memcmp: {
            offset: 71,
            bytes: '2C',
          },
        },
      ],
    },
    cluster: 'devnet',
    program: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
    limit: 3,
    offset: 0,
  })
  assert.equal(status, 200)
  spok(t, result, {
    metadata: { count: 3, offset: 0, limit: 3, hasMore: true },
    error: null,
  })
  assert.equal(result.data?.length, 3)
})

// -----------------
// MongoDB
// -----------------
test('accounts-sdk: mongodb', async (t) => {
  // TODO: Remove prefix
  const sdk = new IronforgeSdk(API_KEY, 'dev')

  await t.test('aggregation pipeline', async () => {
    const { result, status } = await sdk.accounts.mongodb({
      body: {
        pipeline: [
          {
            $match: {
              account_type: 'CollectionPDA',
            },
          },
          {
            $project: {
              account_type: 1,
              _id: 1,
            },
          },
          {
            $limit: 10,
          },
        ],
      },
      cluster: 'devnet',
      program: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
    })

    assert.equal(status, 200)

    const data = result.data

    assert.equal(data.length, 10)

    data.forEach((item) => {
      assert.equal(Object.keys(item).length, 2)
      assert.ok(item.account_type)
      assert.ok(item._id)
    })
  })

  await t.test('query with sort + pagination', async () => {
    const { result, status } = await sdk.accounts.mongodb({
      body: {
        query: {
          account_type: 'CollectionPDA',
        },
        options: {
          limit: 5,
          skip: 10,
          sort: [['size', 'asc']],
        },
      },
      cluster: 'devnet',
      program: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
    })

    assert.equal(status, 200)

    spok(t, result, {
      metadata: { count: 5, offset: 10, limit: 5, hasMore: true },
      error: null,
    })

    const data = result.data
    data.forEach((item) => {
      assert.equal(item.account_type, 'CollectionPDA')
    })

    assert.equal(data.length, 5)
    for (let i = 0; i < data.length - 1; i++) {
      assert.ok(data[i].size <= data[i + 1].size)
    }
  })
})
