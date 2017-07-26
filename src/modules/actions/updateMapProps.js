import computedBranchCount from '../computed/computedBranchCount'

export default function updateMap ({resolve, state}) {
  const branchCount = resolve.value(computedBranchCount)
  state.set('gmap.mapProps.size.width', branchCount > 0 ? 600 : 1000)
}

