import { SectionReveal } from '@/components/core/SectionReveal';

export const Horizon = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-1 text-deep-navy mb-6">Finance first. Not finance only.</h2>
          <p className="text-body-l text-neutral-600 mb-4 mx-auto prose-measure">
            The constraint Aqua removes is not specific to portfolios. Wherever heavy numerical work
            meets fixed hardware and no tuning budget, the same problem appears, and the cost of
            running that work is now a first-order limit on who can build at all.
          </p>
          <p className="text-body-l text-neutral-500 mx-auto prose-measure">
            These are directions we are researching, not products we ship today.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};
