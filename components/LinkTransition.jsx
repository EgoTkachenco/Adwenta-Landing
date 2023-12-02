import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const LinkTransition = ({ children, isActive }) => {
  return (
    <motion.div
      initial="initial"
      exit="initial"
      animate={isActive ? 'active' : 'initial'}
      variants={{
        initial: {
          backgroundPosition: '100% 50%',
        },
        active: {
          backgroundPosition: '0% 50%',
        },
      }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{
        background: 'linear-gradient(to right,transparent 50%,green 50% 100%)',
        backgroundSize: '200%',
      }}
    >
      {children}
    </motion.div>
  );
};

export default forwardRef(LinkTransition);
