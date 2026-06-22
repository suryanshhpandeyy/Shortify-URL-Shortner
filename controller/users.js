const { v4: uuidv4 } = require('uuid');
const Users = require('../model/users');
const {setUser} = require('../service/auth')

async function handleSignUp(req,res){
    const{Name, Email, Password} = req.body;
    const existingUser = await Users.findOne({ Email });

    if (existingUser) {
        return res.redirect("/signup");
    }
    await Users.create({
        Name,
        Email,
        Password
    });
    return res.redirect("/login");
}

async function handleLogIn(req,res){
    const{ Email, Password} = req.body;
    const existingUser = await Users.findOne({ Email, Password });

    if (!existingUser) {
        return res.redirect("/login");
    }
    // const sessionId = uuidv4();
    // setUser(sessionId,existingUser);
    // res.cookie('uid', sessionId);
    const token = setUser(existingUser);
    res.cookie('uid', token);
    return res.render("home", {
    shortUrl: null
});
}

module.exports = {handleSignUp,handleLogIn};