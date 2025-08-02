import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Motion( {value}) {

    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, +value, { duration: 0.5 })
        return () => controls.stop()
    }, [])

    return <motion.pre className=" inline font-Space_Grotesk font-extrabold ">{rounded}</motion.pre>
}