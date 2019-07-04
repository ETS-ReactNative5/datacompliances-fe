/**
 *
 * Asynchronously loads the component for Subscription
 *
 */

import loadable from 'loadable-components';
export default loadable(() => import('./index'));
