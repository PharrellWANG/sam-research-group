/**
 *
 * Asynchronously loads the component for ResearchMachineLearning
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
