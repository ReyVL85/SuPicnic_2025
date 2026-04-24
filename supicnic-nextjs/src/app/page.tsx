import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import StatsSection from '@/components/StatsSection'
import FeaturedSection from '@/components/FeaturedSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTABanner from '@/components/CTABanner'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <FeaturedSection />
      <TestimonialsSection />
      <CTABanner />
      <Newsletter />
    </>
  )
}
