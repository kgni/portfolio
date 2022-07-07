import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './config/particles-config';
const ParticlesBackground = () => {
	return <Particles params={particlesConfig} />;
};

export default ParticlesBackground;
