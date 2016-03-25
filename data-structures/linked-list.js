/*eslint no-unused-vars: [2, { "varsIgnorePattern": "_" }]*/

// TODO compare classical, OLOO and functional structures
export default class LinkedList {

  // TODO accept iterable
  constructor (value) {
    this.head = this.tail = node(value)
  }

  // Return the first element of the list
  // O(1)
  first () {
    return this.head
  }

  // Return the last element of the list
  // O(1)
  last () {
    return this.tail
  }

  // Return the length of the list
  // O(M)
  // Possible optimisation: O(1) if we maintain this.length on each edit.
  //  - Tradoffs: risk of inconsistent state; 8 bytes extra memory
  length () {
    let index
    for (const [, i] of iterateNodes(this)) {
      index = i
    }

    return index + 1
  }

  // Push a new value to the front of the list
  // O(1)
  push (value) {
    const newNode = node(value)

    if (!this.head) {
      this.head = newNode
    } else if (this.tail) {
      this.tail.next = newNode
    }

    this.tail = newNode
    return this
  }

  // Remove a value from the end of the list
  // O(N)
  pop () {
    return this.remove(this.length() - 1)
  }

  // Remove a value from an arbitrary index
  // O(N)
  remove (index) {
    let targetNode = null
    let prevNode = null

    for (const [node, i] of iterateNodes(this)) {
      if (i === index) {
        targetNode = node
        break
      } else {
        prevNode = node
      }
    }

    if (!targetNode) {
      return null
    }

    if (prevNode) {
      prevNode.next = targetNode.next
    } else {
      this.head = targetNode.next
    }

    if (targetNode === this.tail) {
      this.tail = prevNode
    }

    return targetNode.value
  }

  * [Symbol.iterator ] () {
    for (const [node] of iterateNodes(this)) {
      yield node.value
    }
  }
}

function node (value, next = null) {
  if (!value) {
    return null
  }

  return { value, next }
}

function * iterateNodes (list) {
  let currentNode = list.head
  let i = 0
  while (currentNode) {
    yield [currentNode, i++]
    currentNode = currentNode.next
  }
}

const list = new LinkedList(1)
list.push(2)
list.pop()
list.push(3)
list.push(4)
list.push(5)
list.remove(1)
console.log([...list])
console.log(list.length())
