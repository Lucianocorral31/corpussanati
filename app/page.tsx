import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Criteria } from '@/components/Criteria';
import { Objectives } from '@/components/Objectives';
import { Coverage } from '@/components/Coverage';
import { Locations } from '@/components/Locations';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Process />
        <Criteria />
        <Objectives />
        <Coverage />
        <Locations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
