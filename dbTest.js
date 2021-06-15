const db = require('./models')

db.Users.create ({
    name: 'gamerman222'
}).then(ucreate => {
    console.log('Created: ', ucreate.name)
    db.Users.findOne({
        where: {
            name: ucreate.name
        }
    }).then(userfound => {
        console.log('Found: ', userfound.name)
    })
})