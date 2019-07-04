import { defineMessages } from 'react-intl';

export const scope = 'app.containers.About';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the About container!',
  },
  readMore: {
    id: `${scope}.readMore`,
    defaultMessage: 'Read More!',
  },
});
