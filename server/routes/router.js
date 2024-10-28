// On on exporte notre router à utiliser dans notre fichier d'entrée (index.js)
const express = require('express');
const router = express.Router();
// On cible et requiert le controllers pour chaque page
const {
        renderHomepage,
        renderGoals,
        renderInvest,
        renderMyspace,
        renderTokenomics
        } = require('../controllers/routesController')
// Créer des espaces soumis à une authentification. Pour les clients et pour les admins


router.get('/', renderHomepage);
router.get('/goals', renderGoals);
router.get('/invest', renderInvest);
router.get('/myspace', renderMyspace);
router.get('/tokenomics', renderTokenomics);

module.exports = router;