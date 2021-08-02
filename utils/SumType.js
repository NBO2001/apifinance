const Extrato = require('../model/Extrato');
const { Op } = require("sequelize");

const SumType = async (types, iniDate, endDate) => {

    return await Extrato.sum('val', {
        where: {
          "type": types,
          "dataLan": {
            [Op.between]: [iniDate, endDate],
          }
        }
      })
        .then((resuls) => resuls)
        .catch(() => {
          return false;
        });
}

module.exports = SumType;