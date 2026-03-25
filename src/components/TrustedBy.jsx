import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        <section className="py-2 bg-white overflow-hidden border-t border-b border-black/[0.08]">
            <div className="w-full px-6 sm:px-12 lg:px-20 text-center">
                <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mt-3 mb-6">
                    Trusted by the best teams
                </p>
                <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-10">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="relative"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className={`
                                    ${index < 5 ? 'h-14 sm:h-16 md:h-24' : 'h-10 sm:h-12 md:h-16'}
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
