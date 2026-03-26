import React from 'react';

import Brand1 from '../assets/Brand1.webp';
import Brand2 from '../assets/Brand2.webp';
import Brand3 from '../assets/Brand3.webp';
import Brand4 from '../assets/Brand4.webp';
import Brand5 from '../assets/Brand5.webp';
import Brand6 from '../assets/Brand6.webp';

const TrustedBy = () => {
    const brands = [
        { name: 'Brand 1', logo: Brand1 },
        { name: 'Brand 2', logo: Brand2 },
        { name: 'Brand 3', logo: Brand3 },
        { name: 'Brand 4', logo: Brand4 },
        { name: 'Brand 5', logo: Brand5 },
        { name: 'Brand 6', logo: Brand6 }
    ];

    return (
        <section className="bg-white overflow-hidden border-t border-b border-black/[0.08] py-0 sm:py-0">
            <div className="w-full px-4 py-0 sm:px-12 sm:py-0 lg:px-20 text-center">
                <p className="text-[10px] sm:text-sm font-bold text-slate-400 uppercase tracking-[0.18em] leading-none mb-1 sm:mb-0">
                    Trusted by the best teams
                </p>

                <div className="sm:hidden">
                    <div className="flex items-center justify-between gap-3">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex min-h-[20px] min-w-0 items-center justify-center"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className={`
                                    ${index < 5 ? 'h-6' : 'h-5'}
                                    brightness-0 opacity-80 w-auto max-w-full object-contain
                                `}
                            />
                        </div>
                    ))}
                    </div>
                </div>

                <div className="hidden sm:flex flex-nowrap items-center justify-between gap-3 sm:gap-x-8">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="relative shrink-0"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className={`
                                    ${index < 5 ? 'h-6 sm:h-14 md:h-20 lg:h-24' : 'h-5 sm:h-10 md:h-14 lg:h-16'}
                                    brightness-0 opacity-80 w-auto
                                `}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
