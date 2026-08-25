import { MENU } from '@/lib/menuData';
import MenuCategory from './MenuCategory';
import Reveal from './Reveal';

export default function ServicesMenu() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-wrap mx-auto px-6">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">The menu</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-cream">
            Three counters. One receipt.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-24">
          {MENU.map((category, i) => (
            <MenuCategory key={category.id} data={category} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
