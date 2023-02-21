import Db from '../models'

let getHomePage = async (req, res) => {
    try {
        const data = await Db.User.findAll()
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch {

    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}
