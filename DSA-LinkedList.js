class _Node {
    constructor (value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }


    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }


    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }


    remove(item) {
        if (!this.head) {
            return null
        }

        if (this.head.value === item) {
            this.head = this.head.next
            return
        }

        let currNode = this.head

        let previousNode = this.head

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }

        if(currNode === null) {
            console.log('item not found')
            return
        }

        previousNode.next = currNode.next
    }


    find(item) {
        let currNode = this.head
        
        if(!this.head) {
            return null
        }

        while(currNode.value !== item) {
            if(currNode.next === null) {
                return null
            }
            else {
                currNode = currNode.next
            }
        }

        return currNode
    }

    insertBefore(item, key) {
        if(this.head === null) {
            return null
        }

        if(this.head.value === key) {
            this.insertFirst(item)
        }

        let currNode = this.head
        let previousNode = this.head

        while((currNode !== null) && (currNode.value !== key)) {
            previousNode = currNode
            currNode = currNode.next
        } 
        if (currNode === null) {
            console.log('Could not find key')
        }

        previousNode.next = new _Node(item, currNode)
    }

    insertAfter(item, key) {
        if(this.head === null) {
            return null
        }

        let currNode = this.head
        let nextNode = this.head.next

        while((currNode !== null) && (currNode.value !== key)) {
            currNode = currNode.next
            nextNode = nextNode.next
        }

        if(currNode === null) {
            console.log('Could not find key')
        }

        currNode.next = new _Node(item, nextNode)
    }

    insertAt(item, key) {
        if(this.head === null) {
            return null
        }

        let currNode = this.head
        let nextNode = this.head.next

        for (let i = 1; i < key; i++) {
            currNode = currNode.next
            nextNode = nextNode.next
        }

        currNode.next = new _Node(item, nextNode)
    }

    printlist() {
        let current = this.head
        while (current !== null) {
            console.log(current.value)
            current = current.next
        }
    }
}


function main() {
    let SLL = new LinkedList()

    //create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
    SLL.insertLast("Apollo")
    SLL.insertLast("Boomer")
    SLL.insertLast("Helo")
    SLL.insertLast("Husker")
    SLL.insertLast("Starbuck")

    //Add Tauhida to the list.
    SLL.insertLast("Tauhida")

    //Remove Husker from the list
    SLL.remove("Husker")

    //Add Athena before Boomer using your insertBefore() function.
    SLL.insertBefore("Athena", "Boomer")

    //Add Hotdog after Helo using the insertAfter() method.
    SLL.insertAfter("Hotdog", "Helo")

    //Using the insertAt() method insert Kat in the 3rd position of the list.
    SLL.insertAt("kat", 3)

    //Remove tauhida
    SLL.remove("Tauhida")


    display(SLL)
    console.log(size(SLL))
    console.log(isEmpty(SLL))
    console.log(findPrevious("Starbuck", SLL))
    console.log(findLast(SLL))
}


//displays the linked list
function display(list) {
    let current = list.head

    while(current !== null) {
        console.log(current.value)
        current = current.next
    }
}


//returns the size of the linked list
function size(list) {
    let current = list.head
    let count = 0

    while(current !== null) {
        count++
        current = current.next
    }

    return count
}

//finds if the list is empty or not
function isEmpty(list) {
    if(list.head === null) {
        return true
    } return false
}


//finds the node before the item you are looking for
function findPrevious(item, list) {
    let currNode = list.head
    let previousNode = list.head

    while((currNode !== null) && (currNode.value !== item)) {
        previousNode = currNode
        currNode = currNode.next

        if(currNode === null) {
            return console.log('Could not find item')
        }
    }

    return previousNode.value

}


//returns the last node in the linked list
function findLast(list) {
    let currNode = list.head

    while(currNode.next !== null) {
        currNode = currNode.next
    }

    return currNode.value
}


/*
 Mystery program
 The program checks for duplicates within a linked list. 
 Time complexity = O(n^2)
*/





main()

