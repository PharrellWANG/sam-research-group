/**
 *
 * Asynchronously loads the component for GroupMembers
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
