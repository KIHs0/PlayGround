import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store/store';
import { slideAnimation } from '../config/motion';
import { motion } from 'framer-motion'
const ColorPicker = ({ setedittab }) => {
  const snap = useSnapshot(state);

  const handleChange = (color) => {
    state.color = color.hex;
  };

  return (
    <motion.div className="fixed top-60  glassmorphism left-20 z-50 bg-white p-4 rounded shadow-lg"   {...slideAnimation(
      'left'
    )}>
      <SketchPicker
        color={snap.color || '#ffffff'}
        onChange={handleChange}
        disableAlpha
      />
      <button
        className="mt-4 px-4  y-2 bg-gray-800 text-white rounded"
        onClick={() => { setedittab("") }}
      >
        Close
      </button>
    </motion.div>
  );
};

export default ColorPicker;