// src/model/FullList.ts

import ListItem from './ListItem';

class FullList {
    private list: ListItem[] = [];

    // Load items from localStorage
    loadList() {
        const storedList = localStorage.getItem('list');
        if (storedList) {
            this.list = JSON.parse(storedList);
        }
    }

    // Save items to localStorage
    saveList() {
        localStorage.setItem('list', JSON.stringify(this.list));
    }

    // Add a new item to the list
    addItem(item: ListItem) {
        this.list.push(item);
        this.saveList();
    }

    // Remove an item from the list by id
    removeItem(id: string) {
        this.list = this.list.filter((item) => item.id !== id);
        this.saveList();
    }

    // Update an item's text
    updateItem(id: string, newItemText: string) {
        const item = this.list.find((item) => item.id === id);
        if (item) {
            item.item = newItemText;
            this.saveList();
        }
    }

    // Toggle the completion status of an item
    toggleItem(id: string) {
        const item = this.list.find((item) => item.id === id);
        if (item) {
            item.checked = !item.checked;
            this.saveList();
        }
    }

    // Clear all items from the list
    clearList() {
        this.list = [];
        this.saveList();
    }

    // Get the list of items
    getList(): ListItem[] {
        return this.list;
    }
}

export default FullList;
