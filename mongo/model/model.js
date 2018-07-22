
const Person = require('../lib/mongo')

module.exports = {
    addPerson(data) {
        return Person.create(data)
    },
    checkPerson(name) {
        return Person
               .find({ name: name })
               .exec()
    },
    findPerson(id) {
        return Person
               .findById(id)
               .exec()
    },
    getAllMessages() {
        return Person
               .find({})
               .exec()
    },
    addMessage(name, data) {
        return getArr(name)
               .then( arr => {
                    arr.push(data)
                    return Person
                           .findOneAndUpdate({ name: name }, { messages: arr })
                           .exec()
               })
    },
    editMessage(id, name, data) {
        return getArr(name)
               .then( arr => {
                    arr.forEach( obj => {
                        if (obj.id == id) {
                            obj.message = data
                        }
                    })
                    return Person
                           .findOneAndUpdate({ name: name }, { messages: arr })
                           .exec()
               })
    },
    deleteMessage(id, name) {
        return getArr(name)
               .then( arr => {
                    arr.forEach( (obj, index) => {
                        if (obj.id == id) {
                            arr.splice(index, 1)
                        }
                    })
                    if (!arr.length) {
                        return Person
                               .findOneAndRemove({ name: name })
                               .exec()
                    } else {
                        return Person
                               .findOneAndUpdate({ name: name }, { messages: arr })
                               .exec()
                    }
               })
    },
    removeAll() {
        return Person
               .remove({})
               .exec()
    }
}

function getArr(name) {
    return Person
    .find({ name: name })
    .then( res => {
        var [{ messages: arr }] = res
        return arr
    })
}