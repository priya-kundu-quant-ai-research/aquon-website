'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Node = 'fund' | 'platform' | 'engine' | null;

const sentences: Record<string, string> = {
  fund: "The fund's live track record proves the platform works.",
  platform: "The platform's growth funds the engine.",
  engine: "The engine keeps the fund ahead.",
};

export const Flywheel = () => {
  const [hovered, setHovered] = useState<Node>(null);
  const reduced = useReducedMotion() ?? false;

  const nodeProps = (id: Node) => ({
    onMouseEnter: () => setHovered(id),
    onMouseLeave: () => setHovered(null),
    onFocus: () => setHovered(id),
    onBlur: () => setHovered(null),
  });

  const isActive = (id: Node) => hovered === id;

  const highlightText = (text: string) => {
    if (!hovered) return <span>{text}</span>;
    if (text === sentences[hovered]) {
      return (
        <span className="font-semibold text-vibrant-teal transition-colors duration-200">
          {text}
        </span>
      );
    }
    return <span>{text}</span>;
  };

  return (
    <section className="py-20 bg-deep-navy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: heading + body + hover caption */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why the hybrid is the moat.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Most asset managers cannot build a platform. Most platform companies cannot run a
                fund. Doing both, credibly, is the hard part and the durable advantage.{' '}
                {highlightText(sentences.fund)}{' '}
                {highlightText(sentences.platform)}{' '}
                {highlightText(sentences.engine)}
              </p>
              {hovered && (
                <p className="text-vibrant-teal text-sm mt-6 font-medium transition-all">
                  {sentences[hovered]}
                </p>
              )}
            </div>

            {/* Right: circular diagram */}
            <div>
              <svg
                viewBox="0 0 280 260"
                aria-label="Flywheel: Fund, Platform, and Engine reinforce each other"
                role="img"
                className="w-full max-w-[360px] mx-auto"
              >
                {/* Circular arcs */}
                {!reduced ? (
                  <>
                    <path
                      d="M 140 30 A 100 100 0 0 1 226 175"
                      fill="none" stroke="#1DBFBF" strokeWidth="2"
                      strokeOpacity="0.35" strokeDasharray="6 4" strokeLinecap="round"
                    />
                    <path
                      d="M 226 175 A 100 100 0 0 1 54 175"
                      fill="none" stroke="#1DBFBF" strokeWidth="2"
                      strokeOpacity="0.35" strokeDasharray="6 4" strokeLinecap="round"
                    />
                    <path
                      d="M 54 175 A 100 100 0 0 1 140 30"
                      fill="none" stroke="#1DBFBF" strokeWidth="2"
                      strokeOpacity="0.35" strokeDasharray="6 4" strokeLinecap="round"
                    />
                  </>
                ) : (
                  <circle cx="140" cy="130" r="100" fill="none" stroke="#1DBFBF" strokeWidth="1.5" strokeOpacity="0.3" />
                )}

                {/* Arrowhead definition */}
                <defs>
                  <marker id="fw-arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#1DBFBF" opacity="0.5" />
                  </marker>
                </defs>
                <line x1="160" y1="58" x2="200" y2="148" stroke="#1DBFBF" strokeWidth="1" strokeOpacity="0.3" markerEnd="url(#fw-arr)" />
                <line x1="196" y1="155" x2="84" y2="155" stroke="#1DBFBF" strokeWidth="1" strokeOpacity="0.3" markerEnd="url(#fw-arr)" />
                <line x1="68" y1="150" x2="118" y2="58" stroke="#1DBFBF" strokeWidth="1" strokeOpacity="0.3" markerEnd="url(#fw-arr)" />

                {/* Fund node (top) */}
                <g
                  tabIndex={0}
                  role="button"
                  aria-label="Fund: the fund's live track record proves the platform works"
                  style={{ cursor: 'pointer' }}
                  {...nodeProps('fund')}
                >
                  <circle
                    cx="140" cy="35" r="32"
                    fill={isActive('fund') ? '#1DBFBF' : '#0D3D4D'}
                    stroke="#1DBFBF"
                    strokeWidth={isActive('fund') ? 3 : 1.5}
                    style={{ transition: 'all 0.2s' }}
                  />
                  <text x="140" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" fontFamily="sans-serif">AQTF</text>
                  <text x="140" y="43" textAnchor="middle" fontSize="8" fill="white" fontFamily="sans-serif" opacity="0.8">Fund</text>
                </g>

                {/* Platform node (bottom-right) */}
                <g
                  tabIndex={0}
                  role="button"
                  aria-label="Platform: the platform's growth funds the engine"
                  style={{ cursor: 'pointer' }}
                  {...nodeProps('platform')}
                >
                  <circle
                    cx="224" cy="180" r="32"
                    fill={isActive('platform') ? '#1DBFBF' : '#0D3D4D'}
                    stroke="#1DBFBF"
                    strokeWidth={isActive('platform') ? 3 : 1.5}
                    style={{ transition: 'all 0.2s' }}
                  />
                  <text x="224" y="175" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" fontFamily="sans-serif">Zeton</text>
                  <text x="224" y="188" textAnchor="middle" fontSize="8" fill="white" fontFamily="sans-serif" opacity="0.8">Platform</text>
                </g>

                {/* Engine node (bottom-left) */}
                <g
                  tabIndex={0}
                  role="button"
                  aria-label="Engine: the engine keeps the fund ahead"
                  style={{ cursor: 'pointer' }}
                  {...nodeProps('engine')}
                >
                  <circle
                    cx="56" cy="180" r="32"
                    fill={isActive('engine') ? '#1DBFBF' : '#0D3D4D'}
                    stroke="#1DBFBF"
                    strokeWidth={isActive('engine') ? 3 : 1.5}
                    style={{ transition: 'all 0.2s' }}
                  />
                  <text x="56" y="175" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" fontFamily="sans-serif">Aqua</text>
                  <text x="56" y="188" textAnchor="middle" fontSize="8" fill="white" fontFamily="sans-serif" opacity="0.8">Engine</text>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
