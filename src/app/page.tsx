import { Metadata } from "next";
import Hero from "@/components/Redesign/Hero";
import Features from "@/components/Redesign/Features";
import HowItWorks from "@/components/Redesign/HowItWorks";
import Pricing from "@/components/Redesign/Pricing";
import Testimonials from "@/components/Redesign/Testimonials";
import FAQ from "@/components/Redesign/FAQ";
import Footer from "@/components/Redesign/Footer";
import FloatingCTA from "@/components/Redesign/FloatingCTA";
import styles from "@/styles/Redesign/Page.module.css";

export const metadata: Metadata = {
    title: "נרשמים בשבילך - העברת חשבונות במהירות",
    description: "העברת חשבונות חשמל, מים, ארנונה וגז בקליק. אנחנו דואגים לכל העניין מולם.",
    openGraph: {
        title: "נרשמים בשבילך - העברת חשבונות במהירות",
        description: "העברת חשבונות חשמל, מים, ארנונה וגז בקליק. אנחנו דואגים לכל העניין מולם.",
        type: "website",
    },
};

export default function HomePage() {
    return (
        <main className={styles.main}>
            <Hero />
            <Features />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Footer />
            <FloatingCTA />
        </main>
    );
}
