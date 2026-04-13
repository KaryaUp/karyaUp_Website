import React from 'react';

import Brand1 from '../assets/Brand1.webp';
import Brand2 from '../assets/Brand2.webp';
import Brand3 from '../assets/Brand3.webp';
import Brand4 from '../assets/Brand4.webp';
import Brand5 from '../assets/Brand5.webp';
import Brand6 from '../assets/Brand6.webp';

const TrustedBy = () => {
    const brands = [
        { name: 'Kripal Homes', logo: Brand1 },
        { name: 'Pehnaava', logo: Brand2 },
        { name: 'Rayon Lab Tech', logo: Brand3 },
        { name: 'The Diet Diary', logo: Brand4 },
        { name: 'Zenithive', logo: Brand5 },
        { name: 'Utopia', logo: Brand6 }
    ];

    // Double the array to ensure the screen is always full during animation
    const marqueeBrands = [...brands, ...brands];

    return (
        <section className="bg-white border-y border-black/[0.08] overflow-hidden w-full pt-6 pb-6 sm:pt-8 sm:pb-8">
            <div className="flex flex-col items-center">
                
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.25em] m-0 mb-6 leading-[1.05]">
                    Trusted by the best teams
                </p>

                <div className="relative flex overflow-x-hidden w-full">
                    {/* The animation class 'animate-infinite-scroll' is defined in the style tag below */}
                    <div className="flex items-center whitespace-nowrap animate-infinite-scroll">
                        {marqueeBrands.map((brand, index) => (
                            <div 
                                key={index} 
                                // Increased horizontal margin (mx-16 to mx-24) for more space
                                className="mx-8 sm:mx-16 md:mx-20 lg:mx-24 flex items-center shrink-0"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    width="200"
                                    height="80"
                                    loading="lazy"
                                    className="h-20 sm:h-16 md:h-20 w-auto brightness-0 opacity-70 hover:opacity-100 transition-opacity duration-300 block object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Injected CSS for the smooth marquee effect */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-infinite-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 35s linear infinite;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
};

export default TrustedBy;
