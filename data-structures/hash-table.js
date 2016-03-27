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
