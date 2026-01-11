import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
    const sectionRef = useRef(null);
    const prject1Ref = useRef(null);
    const prject2Ref = useRef(null);
    const prject3Ref = useRef(null);

    useGSAP(() => {
        const projectsRefs = [prject1Ref.current, prject2Ref.current, prject3Ref.current];

        projectsRefs.forEach((card, index) => {
            gsap.fromTo(card, { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 1, delay: (index + 1) * 0.3,
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            });
        });
        gsap.fromTo(sectionRef.current, { opacity: 0 }, {
            opacity: 1, duration: 1.5,
        })
    }, []);

    return (
        <section ref={sectionRef} id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT SIDE */}
                    <div className="first-project-wrapper" ref={prject1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>On-demand Rides Made Simple with a Powerfull, User-Friendelly App Called Ryde</h2>
                            <p className="text-white-50 md:text-xl">
                                Ryde is a cutting-edge mobile application designed to revolutionize the way you book and manage your rides.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="overflow-hidden project-list-wrapper">
                        <div className="project" ref={prject2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library Management Platform" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>
                        <div className="project" ref={prject3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="YC Directory" />
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};


export default ShowCaseSection