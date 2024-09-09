import Sequelize from 'sequelize';
import config from '/Software App/Projects/web-template/server/utilities/postgresql_connection';

const sequelize = new Sequelize(config.database);