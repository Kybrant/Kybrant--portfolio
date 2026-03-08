import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Impact from '../components/Impact';
import CTA from '../components/CTA';

export default function Home() {
    return (
        <main>
            <Hero />
            <Features />
            <Impact />
            <CTA />
        </main>
    );
}
