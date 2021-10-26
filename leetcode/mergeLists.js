const ListNode = require('./list');

const root1 = new ListNode(1);
root1.next = new ListNode(4);
root1.next.next = new ListNode(5);

const root2 = new ListNode(1);
root2.next = new ListNode(3);
root2.next.next = new ListNode(4);
root2.next.next.next = new ListNode(7);

const mergeTwo = (r1, r2) => {
    let p1 = r1;
    let p2 = r2;
    let newList = null;
    let nListP = newList;
    while (p1 !== null || p2 !== null) {
        if (p1 === null) {
            // append all p2
            if (newList) {
                newList.next = p2;
            } else {
                newList = p2;
                nListP = newList;
            }
            break;
        }
        if (p2 === null) {
            if (newList) {
                newList.next = p1;
            } else {
                newList = p1;
                nListP = newList;
            }
            break;
        }
        if (p1.val <= p2.val) {
            if (newList) {
                newList.next = new ListNode(p1.val);
                newList = newList.next;
            } else {
                newList = new ListNode(p1.val);
                nListP = newList;
            }
            p1 = p1.next;
        } else {
            if (newList) {
                newList.next = new ListNode(p2.val)
                newList = newList.next;
            } else {
                newList = new ListNode(p2.val);
                nListP = newList;
            }
            p2 = p2.next;
        }
    }
    return nListP;
}



const kMerge = (lists) => {
    let finalList = null;
    for (let list of lists) {
        // merge list to final empty list
        finalList = mergeTwo(finalList, list);
    }
    return finalList;
}

//kMerge([root1, root2])
console.log(kMerge([root1, root2]));