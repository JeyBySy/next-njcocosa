import Particles from 'react-tsparticles'
import ParticleConfig from '../../config/particlesjs-config'
import { loadFull } from "tsparticles"

const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
};

const particleBackground = () => {
    return (
        <>
            <Particles id='tsparticles' init={particlesInit} params={ParticleConfig} />
        </>
    )
}

export default particleBackground