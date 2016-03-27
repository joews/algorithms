import test from 'ava'
import * as ht from '../../data-structures/hash-table'

test.todo('hashTable with an Object argument')

test('hashTable factory function accepts an iterable', (t) => {
  const pairs = [['a', 1], ['b', 2]]
  const table = ht.hashTable(pairs)
  t.same([...table], pairs)
})

test('set', (t) => {
  const t0 = ht.hashTable([])
  const t1 = ht.set(t0, 'name', 'ann')
  const t2 = ht.set(t1, 'age', 30)
  const t3 = ht.set(t2, 'age', 35)

  t.not(t0, t3)
  t.same([...t2], [['name', 'ann'], ['age', 30]])
  t.same([...t3], [['name', 'ann'], ['age', 35]])
})

test('remove', (t) => {
  const t0 = ht.hashTable([['name', 'ann']])
  const t1 = ht.remove(t0, 'name', 'ann')

  t.not(t0, t1)
  t.same([...t0], [['name', 'ann']])
  t.same([...t1], [])
})

test('size', (t) => {
  const table = ht.hashTable([['a', 1], ['b', 2], ['c', 3]])
  t.is(ht.size(table), 3)
})

test('has', (t) => {
  const table = ht.hashTable([['a', 1], ['b', 2], ['c', 3]])
  t.is(ht.has(table, 'a'), true)
  t.is(ht.has(table, 'z'), false)
})
