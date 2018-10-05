module.exports = {
    get_houses: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_houses().then(dbRes => {
            res.send(dbRes)
        }).catch(err => {
            console.log(err)
            res.send("Looks like we had a problem...")
        })
    },
    add_home: (req, res, next) => {
        const {name, address, city, state, zip} = req.body
        const dbInstance = req.app.get('db')
        dbInstance.add_home([name, address, city, state, zip]).then(dbRes => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.send("Couldn't add house at this time")
        })
    },
    delete_house: (req, res, next) => {
        const {id} = req.params
        const dbInstance = req.app.get('db') 
        dbInstance.delete_house(id).then(() => {
            res.sendStatus(200)
        })
    }
}