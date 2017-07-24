import { Controller } from 'cerebral'
import Devtools from 'cerebral/devtools'
import { set } from 'cerebral/operators'
import { props, state } from 'cerebral/tags'

const ireland = {
  lat: 53.42429531608128,
  lng: -7.61804229375002
}

export default Controller({

  // http://cerebraljs.com/docs/introduction/debugger.html
  devtools: Devtools({
    host: '127.0.0.1:8585',
  }),

  state: {
    gmap: {
      defaultCenter: ireland,
      defaultZoom: 6,
      mapProps: {
        center: ireland,
        zoom: 6,
      },
      clusterOptions: {
        radius: 60,
        minZoom: 3,
        maxZoom: 15,
      },
      markerSelected: 'rathmines',
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
})
