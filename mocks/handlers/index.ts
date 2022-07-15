import * as toyHandlers from './toy';
import * as communityHandlers from './community';
import * as loginHandlers from './user';

export const handlers = [
  ...Object.values(toyHandlers),
  ...Object.values(communityHandlers),
  ...Object.values(loginHandlers),
];
