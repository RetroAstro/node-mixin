
const Model = require('../model/model')

module.exports = {
    'POST /add': async (ctx) => {
        var { name, message } = ctx.request.body
        var person = await Model.checkPerson(name)
        if ( person.length && (person[0].name == name) ) {
            var result = await Model.addMessage(name, { message: message })
            ctx.redirect('/')
        } else {
            var data = {
                name: name,
                messages: [{ message: message }]
            }
            var result = await Model.addPerson(data)
            ctx.redirect('/')
        }
    },
    'POST /edit/:name/:id': async (ctx) => {
        var id = ctx.params.id
        var name = ctx.params.name
        var message = ctx.request.body.message
        var result = await Model.editMessage(id, name, message)
        ctx.redirect('/')
    }
}
