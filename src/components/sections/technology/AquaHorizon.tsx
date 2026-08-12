import { SectionReveal } from '@/components/core/SectionReveal';

export const AquaHorizon = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-1 text-deep-navy mb-6">Where Aqua goes next.</h2>
          <p className="text-body-l text-neutral-600 mb-4 mx-auto prose-measure">
            The shape of the problem is not unique to finance. Gradient descent, loss computation and
            fine-tuning passes have the same structure: heavy numerical work, fixed hardware, no
            tuning budget. The cost of running that work is now a first-order constraint on who can
            build with AI at all.
          </p>
          <p className="text-body-l text-neutral-500 mx-auto prose-measure">
            These are directions we are researching, not capabilities we ship today.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};
