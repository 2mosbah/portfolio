import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { expCards } from "../constants"

gsap.registerPlugin(ScrollTrigger);


const ExperienceSection = () => {
    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%"
                }
            })
        })


        gsap.to(".timeline", {
            transformOrigin: "bottom bottom",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "70% center",
                onUpdate: (self) => {
                    gsap.to(".timeline", {
                        scaleY: 1 - self.progress,
                    })
                }
            }
        })

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 60%"
                }
            })
        })

    }, [])
    return (
        <div id='experience' className='w-full mt-20 md:mt-40 section-padding xl:px-0'>
            <div className="w-full h-full px-5 md:px-20">
                <TitleHeader title={"Professional Work Experience"} sub={"My Carrer Overview"} />
                <div className="relative mt-32">
                    <div className="relative z-50 space-y-10 xl:space-y-32">
                        {expCards.map((card, index) => (
                            <div key={card.title} className="exp-card-wrapper">
                                <div className="lg:w-2/6">
                                    <GlowCard card={card} index={index}>
                                        <div>
                                            <img src={card.imgPath} alt={card.title} />
                                        </div>
                                    </GlowCard>
                                </div>
                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="w-1 h-full gradient-line" />
                                        </div>
                                        <div className="relative z-20 flex gap-5 expText xl:gap-20 md:gap-10 ">
                                            <div className="timeline-logo">
                                                <img src={card.logoPath} alt="logo" />
                                            </div>
                                            <div className="">
                                                <h1 className="text-3xl font-semibold">{card.title}</h1>
                                                <p className="my-5 text-white-50">
                                                    📅 {card.date}
                                                </p>
                                                <p className="text-[#839cb5] italic">
                                                    Responsibilites
                                                </p>
                                                <ul className="flex flex-col gap-5 mt-5 list-disc ms-5 text-white-50">
                                                    {card.responsibilities.map((responsibility) => (
                                                        <li key={responsibility} className="text-lg">
                                                            {responsibility}
                                                        </li>
                                                    ))}

                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection