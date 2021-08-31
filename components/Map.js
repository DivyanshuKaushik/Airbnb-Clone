import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import { LocationMarkerIcon } from '@heroicons/react/solid';

function Map({ searchResults }) {

    // transform searchResults array into object of latitude longitude
    const coordinates = searchResults.map(({ long, lat }) => ({ longitude: long, latitude: lat }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });

    const [selectedLocation, setSelectedLocation] = useState({})

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/divyanshukaushik/ckt0622p5anm917tcsngesngt'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={newViewPort => setViewport(newViewPort)}
        >
            {searchResults.map(result => (
                <div className="" key={result.long}>
                    <Marker longitude={result.long} latitude={result.lat} offsetTop={-10}>
                        <LocationMarkerIcon className="h-8 text-red-400 cursor-pointer animate-bounce"
                            onClick={() => setSelectedLocation(result)}
                            aria-label="push-pin"
                        />
                    </Marker>
                    {selectedLocation.long === result.long &&
                        <Popup 
                        onClose={()=>setSelectedLocation({})}
                        closeOnClick={true}
                        longitude={result.long}
                        latitude={result.lat}
                        > 
                            {result.title}
                        </Popup>
                    }
                </div>
            ))}

        </ReactMapGL>
    )
}

export default Map
