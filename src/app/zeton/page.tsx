import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/site/PageHero';
import { ScreenshotFrame } from '@/components/site/ScreenshotFrame';
import { ButtonLink } from '@/components/site/primitives';
import { SectionReveal } from '@/components/core/SectionReveal';
import { ThreeZs, EveryAccount, Zee, Value, WhatsNext } from '@/components/platform/PlatformSections';
import { ClosingCTA } from '@/components/site/ClosingCTA';

export const metadata: Metadata = {
  title: 'Zeton: the portfolio operating system',
  description:
    'Build, test, research, trade and monitor in one platform. Every account runs as its own portfolio; the system proposes and a person approves.',
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The portfolio operating system"
        brand={<Image src="/images/brand/zeton-wordmark-light.svg" alt="Zeton" width={2845} height={815} priority className="h-8 w-auto" />}
        title={
          <>
            One place for the whole{' '}
            <span className="text-teal-bright">portfolio lifecycle.</span>
          </>
        }
        lead="Build, test, research, trade and monitor in one platform. The system proposes, a person approves, and every decision is recorded."
      >
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <ButtonLink href="/contact" dark>
            Request a demo
          </ButtonLink>
          <div className="flex items-center gap-3 text-[13px] text-cream-muted">
            <Image src="/images/brand/zeton-mark-light.svg" alt="" width={612} height={967} className="h-6 w-auto" />
            Z-Studio · Z-Sight · Z-Strike
          </div>
        </div>
        <SectionReveal delay={0.15} className="mt-16">
          <ScreenshotFrame label="Home · every portfolio and what needs attention" src="/images/screens/zee-panel-dark.png" alt="Zeton Home with Zee open: every portfolio and what needs attention" theme="dark" priority />
        </SectionReveal>
      </PageHero>
      <ThreeZs />
      <EveryAccount />
      <Zee />
      <Value />
      <WhatsNext />
      <ClosingCTA
        heading="See Zeton on your own book."
        body="We’ll walk you through the platform with a model and clients that look like yours."
        primary={{ href: '/contact', label: 'Request a demo' }}
        secondary={{ href: '/technology', label: 'How Aqua works' }}
      />
    </>
  );
}
