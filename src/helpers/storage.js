
// ********** Storage functions ************ //
// store [id1, id2...]


// Gets items in storage and formats them to usable data
export const getItems = () => {
    const items = JSON.parse(localStorage.getItem('artstorecart'))
    return items ? items : []
};

// Adds given item to storage if it isn't already there
// otherwise, increments its quantity
export const addItem = item => {
    let items = getItems()
    if (items === null) {
        items = []
    }
    let found = false
    // check if item already exists
    items.forEach(curr => {
        if (curr === item) {
            found = true
            curr.qty += 1
        }
    });

    // add item
    if (!found) {
        items.push(item)
    }
    // update storage
    localStorage.setItem('artstorecart', JSON.stringify(items))
};

// Removes given item from storage
export const removeItem = item => {
    const items = getItems()
    if (items === null) {
        return
    }
    // remove item
    items.forEach((curr, i) => {
        if (curr === item) {
            items.splice(i, 1) // deletes item from array
            // update storage
            localStorage.setItem('artstorecart', JSON.stringify(items))
            return
        }
    });
    
};