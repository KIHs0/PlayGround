import React, { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import state from '../store/store'
import { Cusbtn } from '../components/components'
import { useFrame } from '@react-three/fiber'
const Home = () => {

    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home'{...slideAnimation('left')} style={{ userSelect: 'none' }} >
                    <motion.header {...slideAnimation('down')}>
                        <img src={'./threejs.png'} alt="logo" className='w-8 h-8 mt-10 object-contain ' />
                    </motion.header>

                    <motion.div {...headContainerAnimation} className='home-content'>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text' >lets begin Customising your Experience </h1>
                            <br />
                            <p>Create Unique Style , Designs , Pictures Logo  For Your Overall Appreace !!!   <br /> <strong className=''>Unleash Your Potential Desigining </strong>
                                <br /> <code>Beautify Textures Logo Stunning Colors and Download at Max quality</code></p>
                            <Cusbtn customStyle='mt-5' type='filled' title='customise it' handleClick={() => {
                                state.intro = false
                            }} />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )
            }
        </AnimatePresence >
    )
}

export default Home