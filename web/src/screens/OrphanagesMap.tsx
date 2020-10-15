import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css'
import mapMarkerImg from '../images/map-marker.svg'

function OrphanagesMap() {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="Happy Icon" />

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita</p>
				</header>

				<footer>
					<strong>Aquidauana</strong>
					<span>Mato Grosso do Sul</span>
				</footer>
			</aside>

			<Map center={[-20.48,-55.7907968]} zoom={15} style={{ width: '100%', height: '100%' }}>
				<TileLayer url="https://a.tile.openstreatmap.org/{z}/{x}/{y}.png"/>
			</Map>

			<Link to="" className="create-orphanage">
				<FiPlus size={32} color="#fff" />
			</Link>
		</div>


	);
}

export default OrphanagesMap;