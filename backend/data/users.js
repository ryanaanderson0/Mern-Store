import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@winefriend.com',
        password: bcrypt.hashSync('123456', 6),
        isAdmin: true,
    },
    {
        name: 'Jimmy',
        email: 'jimmy@hotmail.com',
        password: bcrypt.hashSync('123456', 6),
        isAdmin: false,
    
    },
    {
        name: 'Viola',
        email: 'viola@hotmail.com',
        password: bcrypt.hashSync('123456', 6),
        isAdmin: false,
    }

]

export default users