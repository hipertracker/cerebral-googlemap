import { Controller } from 'cerebral'
import Devtools from 'cerebral/devtools'
import Useragent from '@cerebral/useragent'

import { set } from 'cerebral/operators'
import { props, state } from 'cerebral/tags'

export default Controller({
  devtools: Devtools({
    host: '127.0.0.1:8585',
  }),
  state: {
    gmap: {
      defaultCenter: [53.42429531608128, -7.618042293750029],
      defaultZoom: 7,
      mapProps: {
        center: {lat: 53.42429531608128, lng: -7.61804229375002},
        zoom: 9,
      },
      clusterOptions: {
        radius: 60,
        minZoom: 3,
        maxZoom: 15,
      },
      markerSelected: 1,
      markers: [
        {id: 'rathmines', lat: 53.323218, lng: -6.265559, title: 'Ratchmines'},
        {id: 'temple', lat: 53.345573, lng: -6.2635, title: 'Temple'},
        {id: 'stephen', lat: 53.338621, lng: -6.25542, title: 'Stephen'},
        {id: 'blackrock', lat: 53.302276, lng: -6.180681, title: 'Blackrock'},
        {id: 'oconnell', lat: 53.347989, lng: -6.259295, title: 'OConnell'},
        {id: 'ranelagh', lat: 53.324156121, lng: -6.25154793, title: 'ranelagh'},
      ],
    },
  },
  signals: {
    mapChanged: set(state`gmap.mapProps`, props`mapProps`),
  },
  modules: {
    useragent: Useragent({
      media: {
        mobile: '(max-width: 640px)',
        small: '(max-width: 1024px)',
        large: '(min-width: 1025px)',
      },
      feature: false, // store all feature tests in model
      window: true, // update window size on resize
    }),
  },
})
