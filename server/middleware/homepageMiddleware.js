const { getVerses } = require('../database/pool'); 

const versesMiddleware = async (req, res, next) => {
    try {
        const verses = await getVerses(); // Récupérez les versets
        req.verses = verses; // Attachez les versets à l'objet req
        next(); // Passez au middleware ou à la route suivante
    } catch (err) {
        console.error('Erreur lors de la récupération des versets', err);
        return res.status(500).send('Erreur interne du serveur');
    }
};

module.exports = versesMiddleware;
