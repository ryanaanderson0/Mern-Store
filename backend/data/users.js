const Users = [
    {
        name: 'Admin',
        email: 'admin@winefriend.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jimmy',
        email: 'jimmy@hotmail.com',
        password: bcrypt.hashSync('123456', 10),
    
    },
    {
        name: 'Viola',
        email: 'viola@hotmail.com',
        password: bcrypt.hashSync('123456', 10),
    }

]

export default Users