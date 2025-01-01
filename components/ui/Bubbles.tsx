import { motion } from "framer-motion";

const Bubble = ({ size, left, delay, color }: { size: number; left: string; delay: number, color: string }) => (
    <motion.div
      className={`absolute bottom-10 rounded-full opacity-30 ${color}`}
      style={{
        width: size,
        height: size,
        left,
      }}
      initial={{ y: '100%' }}
      animate={{
        y: '-100vh',
        transition: {
          duration: 10 + Math.random() * 5,
          repeat: Infinity,
          delay,
          ease: 'linear',
        },
      }}
    />
  );
  
  const Bubbles = () => (
    <>
      <Bubble size={20} left="10%" delay={0} color="bg-cyan-400" />
      <Bubble size={15} left="20%" delay={2} color="bg-fuchsia-400" />
      <Bubble size={25} left="30%" delay={1} color="bg-purple-400" />
      <Bubble size={18} left="40%" delay={3} color="bg-blue-400" />
      <Bubble size={32} left="50%" delay={0.5} color="bg-pink-400" />
      <Bubble size={16} left="60%" delay={2.5} color="bg-cyan-400" />
      <Bubble size={28} left="70%" delay={1.5} color="bg-fuchsia-400" />
      <Bubble size={14} left="80%" delay={3.5} color="bg-cyan-400" />
      <Bubble size={24} left="90%" delay={0.8} color="bg-cyan-400" />
    </>
  );

  export default Bubbles;