import React, { useState } from 'react';
import Button from '../ui/Button';

const VideoButton = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="flex flex-col items-center my-4">
      <Button
        onClick={() => setShowVideo(true)}
        className="mx-auto block"
        style={{ backgroundColor: 'var(--footer)', color: 'var(--texto-horario-footer)' }}
      >
        Ver video
      </Button>
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-transparent flex flex-col items-center">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 text-white text-2xl font-bold bg-black/80 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg border-2 border-white"
              aria-label="Cerrar video"
              style={{ zIndex: 60 }}
            >
              ×
            </button>
            <div className="w-full aspect-video max-h-40 sm:max-h-52 md:max-h-60 lg:max-h-72 xl:max-h-80 flex items-center justify-center">
              <video
                src="/video.mp4"
                controls
                autoPlay
                className="w-full h-full rounded-lg shadow-lg border-4 border-white object-contain bg-black"
                style={{ background: 'black' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoButton;
