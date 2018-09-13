import Item from './Item';

// TODO: Use a doubly-linked list instead of an array

class Category {
    constructor(id, name, image) {
        this._id = id;   
        this._name = name;
        this._image = image;
        this._items = [];
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    setName(newName) {
        this._name = newName;
    }

    getImage() {
        return this._image;
    }

    setImage(newImage) {
        this._image = newImage;
    }

    getItems() {
        return this._items;
    }

    itemCount() {
        return (this._items !== undefined && this._items !== null) ? this._items.length : -1;
    }

    // TODO: Complete method
    // Find the item by id if one is provided; otherwise, find item
    // by name; if invalid arguments are provided or the item is not found,
    // return null
    findItem(itemId, itemName) {
        let item = null;

        if(itemId !== undefined && itemId !== null) {
            // Find item by id
        } else if(itemName !== undefined && itemId !== null) {
            // Find item by name
        }

        return item;
    }

    // If the new item is valid and is not already present, add it
    // to the array and return true
    addItem(newItem) {
        if(!this.findItem(newItem.getId(), newItem.getName())) {
            this._items.push(newItem);
            return true;
        }
        return false;
    }

    // TODO: Implement after switching to doubly-linked list
    removeItem(itemId, itemName) {
        // let item = this.findItem()
    }
}

export default Category;