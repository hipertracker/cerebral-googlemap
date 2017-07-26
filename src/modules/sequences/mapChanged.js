import { set } from 'cerebral/operators'
import { props, state } from 'cerebral/tags'
import updateMapProps from '../actions/updateMapProps'

export default [
  set(state`gmap.mapProps`, props`mapProps`),
  updateMapProps,
]
