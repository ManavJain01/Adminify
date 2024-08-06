import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({data=[]}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);
  const scale = useTransform(mouseXSpring, [-0.5, 0.5], [0.95, 1.05]);

  // Functions
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-gradient-to-br from-indigo-300 to-violet-300 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-600 h-[35rem] w-[20rem] rounded-xl duration-400"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d"
        }}
        className="absolute inset-4 group-hover:inset-2 text-black bg-white group-hover:text-white group-hover:bg-blue-800 flex flex-col gap-5 items-center justify-center p-8 rounded-xl shadow-lg"
      >
        <span style={{transform: "translateZ(50px)"}} className='font-semibold text-2xl'>{data.name}</span>
        
        <span style={{transform: "translateZ(75px)"}} className='font-bold text-lg'>{data.subscription}</span>

        <section style={{transform: "translateZ(100px)"}} className="font-bold flex flex-col items-center">
          <span className="text-4xl">{data.fees}</span>
          <span>{data.duration}</span>
        </section>

        <section style={{transform: "translateZ(50px)"}} className="font-semibold text-xl w-full flex flex-col gap-3 items-center">
          {data?.features?.map((e, i) => {
            return(
              <div key={i} className="w-full flex flex-col gap-2 items-center">
                <hr className='w-full border-gray-300' />
                <span className='whitespace-nowrap'>{e}</span>
              </div>
            )
          })}

          <hr className='w-full border-gray-300' />
          <span>{data.timing}</span>
        </section>

        <button style={{transform: "translateZ(50px)"}} className="text-white bg-blue-700 group-hover:text-blue-900 group-hover:bg-white w-full mt-auto px-5 py-2 rounded-lg group-hover:shadow-xl">{data.more}</button>
      </div>
    </motion.div>
  )
}