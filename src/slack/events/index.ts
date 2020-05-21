import { App } from '@slack/bolt';
import logger from '../../logger';
import message from './message';

export default function register(app: App): void {
  logger.info('Registering evenT listeners');
  message(app);
}
