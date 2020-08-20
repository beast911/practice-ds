#include <bits/stdc++.h>
using namespace std;

struct Node {
    int key;
    Node *left, *right;
    Node(int x)
    {
        key = x;
        left = right = NULL;
    }
};

/* Entry Point for in order traversal from root */
void inOrder(Node* root)
{
    if (!root) {
        return;
    }
    inOrder(root->left);
    cout << root->key << " ";
    inOrder(root->right);
}

/*function to insert element in binary tree */
void insert(Node* temp, int key)
{
    queue<Node*> q;
    q.push(temp);

    // Do level order traversal until we find
    // an empty place.
    while (!q.empty()) {
        Node* temp = q.front();
        q.pop();

        if (!temp->left) {
            temp->left = new Node(key);
            break;
        } else
            q.push(temp->left);

        if (!temp->right) {
            temp->right = new Node(key);
            break;
        } else
            q.push(temp->right);
    }
}

Node* delete (struct Node* root, int keyToBeDeleted)
{
    if (root == NULL) {
        return NULL;
    }

    if (root->left == NULL && root->right == NULL) {
        if (root->key == keyToBeDeleted) {
            return NULL
        } else {
            return root;
        }
    }

    queue<struct Node*> q;
    q.push(root);
}

// Driver code
int main()
{
    Node* root = new Node(10);
    root->left = new Node(11);
    root->left->left = new Node(7);
    root->right = new Node(9);
    root->right->left = new Node(15);
    root->right->right = new Node(8);

    cout << "Inorder traversal before insertion:";
    inOrder(root);

    int key = 12;
    insert(root, key);

    cout << endl;
    cout << "Inorder traversal after insertion:";
    inOrder(root);
    cout << endl;

    return 0;
}