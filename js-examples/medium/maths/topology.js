let global_deep = 0;
export function binaryTreeNode(value, leaves, myRoot, myDeep, isMainRoot) {
    let node = { value, leaves, myRoot, myDeep, isMainRoot };
    node[Symbol.iterator] = function* depthFirst() {
        yield node.myDeep;
        yield node.value;
        yield node.leaves;
        yield node.myRoot;
        yield node.isMainRoot;
        if (node.leftChild) {
            yield* node.leftChild
        };
        if (node.rightChild) {
            yield* node.rightChild
        };
    };
    return node;
}

export function generateRandomTree(rootNode, nextValue = Math.random()) {
    if (global_deep++ <= 150) {
        if (rootNode.value < nextValue) {
            if (rootNode.leftChild) {
                generateTree(rootNode.leftChild, nextValue)
            }
            else {
                rootNode.leftChild = binaryTreeNode(nextValue, 0, rootNode, global_deep++, false)
                rootNode.leaves++;
                generateTree(rootNode, Math.random())
            }
        }
        else {
            if (rootNode.rightChild) {
                generateTree(rootNode.rightChild, nextValue)
            }
            else {

                rootNode.rightChild = binaryTreeNode(nextValue, 0, rootNode, global_deep++, false);
                rootNode.leaves++;
                generateTree(rootNode, Math.random())
            }
        }
    }
    if (rootNode.isMainRoot === true) {
        return rootNode;
    }
    else {
        generateTree(rootNode.myRoot)
    }
}

// let root_test = binaryTreeNode(0, 0, null, 0, true);
// let test = [...generateTree(root_test)];
// console.log(test);