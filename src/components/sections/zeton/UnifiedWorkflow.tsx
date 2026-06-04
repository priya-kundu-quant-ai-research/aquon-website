'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

export const UnifiedWorkflow = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Video play failed:', error);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const startOver = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <section id="overview-video" className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-vibrant-teal text-sm font-semibold uppercase tracking-widest mb-3">
            See Zeton in action.
          </p>
          <h2 className="mb-4 text-4xl font-bold text-deep-navy md:text-5xl">
            One Unified Workflow
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-neutral-600">
            From strategy design to execution to continuous monitoring, all in one platform.
          </p>
        </motion.div>

        {/* Video */}
        <div className="max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto rounded-2xl shadow-xl bg-black overflow-hidden"
        >
            <video
            ref={videoRef}
            src="/videos/zeton-video.mp4"
            preload="metadata"
            playsInline
            autoPlay={false}
            muted={false}
            controls={false}
            className="block w-full h-auto max-h-[65vh]"
            style={{ objectFit: 'contain' }} // explicit: never crop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onVolumeChange={() => setIsMuted(Boolean(videoRef.current?.muted))}
            aria-label="Workflow overview video"
            />

            {/* Overlay Controls */}
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4">
              <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-black/60 px-4 py-2 backdrop-blur">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="inline-flex items-center gap-2 text-white transition hover:text-white/90"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  <span className="text-sm font-medium">
                    {isPlaying ? 'Pause' : 'Play'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={startOver}
                  aria-label="Restart video"
                  className="inline-flex items-center gap-2 text-white transition hover:text-white/90"
                >
                  <RotateCcw size={18} />
                  <span className="text-sm font-medium">Restart</span>
                </button>

                <div className="h-5 w-px bg-white/25" />

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="inline-flex items-center gap-2 text-white transition hover:text-white/90"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  <span className="text-sm font-medium">
                    {isMuted ? 'Unmute' : 'Mute'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
