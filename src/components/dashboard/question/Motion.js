import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Motion( {value}) {

    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, +value, { duration: 0.5 })
        return () => controls.stop()
    }, [])

    return <motion.pre className=" font-Nunito font-bold">{rounded}</motion.pre>
}