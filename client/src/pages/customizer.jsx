import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store/store.js'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants.js'
import { downloadCanvasToImage } from '../config/helpers.js'
import { fadeAnimation, slideAnimation } from '../config/motion.js'
import { AIHelper, FilePickerHelper, ColorPicker, Tab, Cusbtn } from '../components/components.js'
import { download } from '../assets/index.js'
import ProtectedRoutes from '../components/protectedroutes.jsx'
import { Toaster } from 'react-hot-toast'


const Customiser = () => {
    const [edittab, setedittab] = useState("")
    const genfx = () => {
        switch (edittab) {
            case "colorpicker": return <ColorPicker setedittab={setedittab} />
            case "filepicker": return <FilePickerHelper setedittab={setedittab} />
            case "aipicker": return <ProtectedRoutes setedittab={setedittab}><AIHelper setedittab={setedittab} /></ProtectedRoutes>
            default: return null;
        }
    }
    const snap = useSnapshot(state)
    return (
        <AnimatePresence>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
            {!snap.intro && (
                <>
                    <motion.div {...slideAnimation('left')}
                        key="custom" className='absolute top-0 left-0 z-10'>
                        <div className='flex items-center min-h-screen '>
                            <div className='editortabs-container  '>
                                {
                                    EditorTabs.map((tab) => (
                                        <Tab customStyles='tab-btn ' key={tab.name} tab={tab} handleClick={() => {
                                            setedittab(tab.name)
                                        }} />
                                    ))}

                                {genfx()}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div {...fadeAnimation} className='absolute top-0 right-0 mt-1 z-11'>
                        <Cusbtn customStyle='w-fit px-4 py-2.5 font-bold text-sm ' type='filled' title='Go Back' handleClick={() => {
                            state.intro = true
                            { snap.colorOn && <ColorPicker {...slideAnimation('left')} /> }
                        }} />
                    </motion.div>
                    <motion.div {...slideAnimation('down')}
                        key="custom2" {...fadeAnimation} className='absolute  right-0  top-0     z-10'>
                        <div className='flex  items-center min-h-screen '  >
                            <div className='editortabs-container ' >
                                {
                                    FilterTabs.map((tab) => (
                                        <Tab customStyles='tab-btn glassmorphism' key={tab.name} tab={tab} handleClick={() => {
                                            if (`${tab.name}` === 'logoShirt' && (
                                                (!state.isLogoTexture && (state.isLogoTexture = true)) ||
                                                (state.isLogoTexture && (state.isLogoTexture = false))
                                            ));
                                            if (`${tab.name}` === 'stylishShirt' && (
                                                (!state.isFullTexture && (state.isFullTexture = true)) ||
                                                (state.isFullTexture && (state.isFullTexture = false))
                                            ));
                                        }} />
                                    ))
                                }

                                {/* <button className='download-btn glassmorphism' onClick={downloadCanvasToImage}>
                                    <img
                                        src={download} alt='download_image'
                                        className='w-3/5 h-3/5 object-contain'
                                        crossOrigin='anonymous'
                                    />
                                </button> */}
                            </div>

                        </div>

                    </motion.div>
                </>
            )

            }
        </AnimatePresence >
    )
}

export default Customiser