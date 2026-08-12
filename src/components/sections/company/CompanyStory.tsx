import { SectionReveal } from '@/components/core/SectionReveal';

/* "The story" — the section that did not exist before. Copy verbatim from 02. */
export const CompanyStory = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto">
          <p className="text-body-l text-neutral-600 mb-5">
            Aquon started from a narrow technical observation: the numerical code behind portfolio
            construction was leaving most of the machine unused. Not because the mathematics was
            wrong, but because software written once and shipped everywhere cannot know what hardware
            it will land on.
          </p>
          <p className="text-body-l text-neutral-600 mb-5">
            That became Aqua — an engine that reads the machine and adapts to it — and, at NYU, a
            patent application.
          </p>
          <p className="text-body-l text-neutral-600 mb-8">
            An engine on its own proves nothing. So we built the thing that would test it hardest:
            Zeton, a full investment platform, and AQTF, our own systematic strategy running real
            capital through it. Our ideal customer sits in our founding team, which means the
            platform is stress-tested by the person it was built for long before anyone else sees it.
          </p>
          <p className="text-heading-2 text-deep-navy">
            Zeton is what we commercialize. Aqua is why it is different. AQTF is how we know it works.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};
