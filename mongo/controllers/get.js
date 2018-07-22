
const Model = require('../model/model')

module.exports = {
    'GET /': async (ctx) => {
        var data = await Model.getAllMessages()
        if ( data == [] ) {
            await ctx.render('index')
        } else {
            await ctx.render('index', { data })
        }
    },
    'GET /delete/:name/:id': async (ctx) => {
        var id = ctx.params.id
        var name = ctx.params.name
        var result = await Model.deleteMessage(id, name)
        ctx.redirect('/')
    },
    'GET /find/:id': async (ctx) => {
        var id = ctx.params.id
        var data = []
        data.push( await Model.findPerson(id) )
        await ctx.render('index', { data })
    }
}