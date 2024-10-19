// src/model/ListItem.ts

// Define the structure of a list item
interface IListItem {
    id: string;
    item: string;
    checked: boolean;
}

// Implement the ListItem class
class ListItem implements IListItem {
    constructor(public id: string, public item: string, public checked: boolean = false) {}
}

// Export the ListItem class
export default ListItem;
