import { SectionReveal } from '@/components/core/SectionReveal';

/* "What Zeton replaces" — placed above the video (§4.3). Replaces the old
   ZetonMeetZeton. Copy verbatim from 02 · Zeton · Overview. */
export const ZetonOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-1 text-deep-navy mb-6">What Zeton replaces.</h2>
          <p className="text-body-l text-neutral-600 mb-4 mx-auto prose-measure">
            Emerging funds, family offices and independent RIAs run real strategies on assembled
            parts: a spreadsheet for construction, a broker API for execution, a separate tool for
            monitoring, and email for everything in between. The cost is allocation errors,
            undisciplined rebalancing, slippage, and an audit trail that has to be reconstructed
            after the fact.
          </p>
          <p className="text-body-l text-neutral-600 mx-auto prose-measure">
            Their two options today are an institutional platform priced out of reach, or a patchwork
            that never quite adds up. Zeton is the third.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};
