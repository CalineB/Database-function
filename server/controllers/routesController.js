const renderGoals = (req, res) => {
    res.render('goals');   
};

const renderHomepage = (req, res) => {
    res.render('homepage');
};

const renderInvest = (req, res) => {
    res.render('invest');   
};

const renderMyspace = (req, res) => {
    res.render('myspace');   
};

const renderTokenomics = (req, res) => {
    res.render('tokenomics');
};

module.exports = {
    renderGoals,
    renderHomepage,
    renderInvest,
    renderMyspace,
    renderTokenomics
};