/* eslint-disable prefer-destructuring */
import { start } from '@storybook/core/client';

import './globals';
import render from './render';

const framework = 'complate';

const { configure: coreConfigure, clientApi, forceReRender } = start(render);

export const {
  setAddon,
  addDecorator,
  addParameters,
  clearDecorators,
  getStorybook,
  raw,
} = clientApi;

export const storiesOf = (...args: any) => {
  return clientApi.storiesOf(...args).addParameters({ framework });
};

export const configure = (...args: any) => coreConfigure(...args, framework);

export { forceReRender };
