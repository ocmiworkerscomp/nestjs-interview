import database from './database';
import app from '@spikey/api/config/app';
import auth from '@spikey/api/config/auth';

export default () => {
  return [app, database, auth];
};
