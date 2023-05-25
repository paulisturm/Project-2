const Inventory = require('./inventory');
const Power = require('./power');
const Weapons = require('./weapons');

Inventory.belongsTo(Inventory, {
    foreignKey: 'inventory_id'
  });

Power.hasMany(Inventory, {
    foreignKey: 'inventory_id',
    onDelete: 'CASCADE',
    });

Inventory.belongsToMany(Weapons, {
    through: Inventory,
    as: 'inventory_weapons',
    foreignKey: 'inventory_id'
    });

Weapons.belongsToMany(Inventory, {
    through: Inventory,
    as: 'inventory_weapons',
    foreignKey: 'weapons_id'
    })

module.exports = {
    Inventory,
    Power,
    Weapons,
};