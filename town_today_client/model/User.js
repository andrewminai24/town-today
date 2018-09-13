import './Category';

class User {

    constructor(id, username, email, firstName, lastName) {
        this._id = id;
        this._username = username;
        this._email = email;
        this._firstName = firstName;
        this._lastName = lastName;
        this._categories = [];
    }

    getId() {
        return this._id;
    }

    getUsername() {
        return this._username;
    }

    getEmail() {
        return this._email;
    }

    getFirstName() {
        return this._firstName;
    }

    setFirstName(newName) {
        this._firstName = newName;
    }

    getLastName() {
        return this._lastName;
    }

    setLastName(newName) {
        this._lastName = newName;
    }

    getCategories() {
        return this._categories;
    }

    categoryCount() {
        return this._categories.length;
    }

    // TODO: Complete method
    findCategory(categoryId, categoryName) {
        let category = null;

        if(categoryId !== undefined && categoryId !== null) {
            // Find category by id
        } else if(categoryName !== undefined && categoryName !== null) {
            // Find category by name
        }

        return category;
    }

    addCategory(newCategory) {
        if(!this.findCategory(newCategory.getId(), newCategory.getName())) {
            this._categories.push(newCategory);
            return true;
        }
        return false;
    }

    removeCategory() {

    }



}

export default User;