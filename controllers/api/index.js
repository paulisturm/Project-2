const router = require('express').Router();
const inventoryRoutes = require('./inventory-routes');
const weaponsRoutes = require('./weapons-routes');
const powersRoutes = require('./powers-routes');

router.use('/inventory', inventoryRoutes);
router.use('/weapons', weaponsRoutes);
router.use('/powers', powersRoutes);

module.exports = router;