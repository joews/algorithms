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
  length () {
    let length = 0
    for (const _ of this) {
      length++
    }

    return length
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
    let i = 0
    let currentNode = this.head
    let prevNode = null

    while (i < index) {
      i++
      prevNode = currentNode
      currentNode = currentNode.next
      if (!currentNode) {
        return null
      }
    }

    if (prevNode) {
      prevNode.next = currentNode.next
    } else {
      this.head = currentNode.next
    }
    if (currentNode === this.tail) {
      this.tail = prevNode
    }

    return currentNode.value
  }

  * [Symbol.iterator ] () {
    let currentNode = this.head
    while (currentNode) {
      yield currentNode.value
      currentNode = currentNode.next
    }
  }
}

function node (value, next = null) {
  if (!value) {
    return null
  }

  return { value, next }
}

const list = new LinkedList(1)
list.push(2)
list.pop()
list.push(3)
list.push(4)
list.remove(1)
console.log([...list])
console.log(list.length)
