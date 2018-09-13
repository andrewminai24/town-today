
class Item {
    constructor(id, name, image) {
        this._id = id;
        this._name = name;
        this._image = image;
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

}

export default Item;