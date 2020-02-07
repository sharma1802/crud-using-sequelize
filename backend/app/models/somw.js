const { User } = require('./User.js')
const { Books } = require('./Books.js')


module.exports = {

    index(req, res) {
        User.findAll({
            include:[
                {
                    model: Books,
                    
                }
            ]
        })

        .then(users => {
            const resObj = users.map(user => {
      
              //tidy up the user data
              return Object.assign(
                {},
                {
                  user_id: user.id,
                  username: user.username,
                  name: user.name,
                  books: user.books.map(book => {
      
                    //tidy up the post data
                    return Object.assign(
                      {},
                      {
                        book_id: book.id,
                        book_name: book.book_name,
                        book_author: book.book_author,
                      }
                      )
                  })
                }
              )
            });
            res.json(resObj)
          })

          .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
        

            // .then(users => res.json({
            //     error: false,
            //     data: users
            // }))

            // .catch(error => res.json({
            //     error:true,
            //     data: [],
            //     error: error
            // }));
    },

    create(req, res) {
        const { name, username } = req.body;
        User.create({
            name, username
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: "new user has been created"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const user_id = req.params.id;

        const { name, username } = req.body;

        User.update({
            name, username
        }, {
            where: {
                id: user_id
            }
        })

        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: 'user has been updated'
        }))

        .catch(error => res.json({
            error: true,
            error: error
        }));
    },



    destroy(req, res) {
        const user_id = req.params.id;

        User.destroy({ where: {
            id: user_id
        }})
        .then(status => res.status(201).json({
            error: false,
            message: 'user has been deleted'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    }
}
