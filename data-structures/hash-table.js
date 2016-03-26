// Hash table
// Hash table
// Functional style (Pure functions, immutable state)

// Dummy implementation for testing
export function hashTable (initialPairs) {
  const _map = new Map(initialPairs)

  return {
    _map,
    [Symbol.iterator]: function * () {
      for (const e of _map) {
        yield e
      }
    }
  } 
}

export function set (table, key, value) {
  const result = new Map(table._map)
  result.set(key, value)
  return hashTable(result)
}


export function remove (table, key) {
  const result = new Map(table._map)
  result.delete(key)
  return hashTable(result)
}

export function has (table, key) {
  return table._map.has(key)
}

export function size (table) {
  return table._map.size
}

const t0 = hashTable([["name", "ann"], ["age", 30]])
const t1 = set(t0, "a", 1)
const t2 = set(t1, "b", 2)
const t3 = set(t2, "b", 3)
const t4 = remove(t3, "age")

console.log([...t2])
console.log([...t4])
console.log(size(t4)) 
