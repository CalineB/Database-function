const { getVerses } = require('../database/pool'); 

const versesMiddleware = async (req, res, next) => {
    try {
        const verses = await getVerses();
        req.verses = verses;
        next(); 
    } catch (err) {
        console.error('Erreur lors de la récupération des versets', err);
        return res.status(500).send('Erreur interne du serveur');
    }
};

module.exports = versesMiddleware;
