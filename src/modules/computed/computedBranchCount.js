import { compute } from 'cerebral'
import computedClusters from './computedClusters'

const computedBranchCount = compute(
  computedClusters,
  clusters => clusters.filter(({numPoints}) => numPoints === 1).length
)

export default computedBranchCount
