import { SERVICES } from '@/lib/menuData';
import ServiceCategory from './ServiceCategory';
import Reveal from './Reveal';

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-paper">
      <div className="max-w-wrap mx-auto px-6">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-royal font-semibold">Our Services</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-ink">
            Three pillars. One dedicated advisor.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-24">
          {SERVICES.map((category, i) => (
            <ServiceCategory key={category.id} data={category} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
