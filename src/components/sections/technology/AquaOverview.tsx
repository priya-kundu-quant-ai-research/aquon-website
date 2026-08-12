import { SectionReveal } from '@/components/core/SectionReveal';

export const AquaOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-1 text-deep-navy mb-6">One engine, many machines.</h2>
          <p className="text-body-l text-neutral-600 mb-4 mx-auto prose-measure">
            Every machine is different: core count, cache size, available memory. Most numerical
            libraries ignore that and take the same path everywhere.
          </p>
          <p className="text-body-l text-neutral-600 mx-auto prose-measure">
            Aqua profiles the hardware when it starts, classifies what it is working with, and
            routes each operation to the execution strategy that machine can run fastest. The same
            source code, on a constrained cloud instance and on a high-core workstation, takes two
            different paths, and the caller never writes a line of configuration.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};
