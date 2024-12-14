"use client";

import React from 'react';
import {
  Zap,
  Code,
  Compass
} from 'lucide-react';
import { useDeviceMode } from '@/hooks/device/useDeviceMode';

const HomeComponent: React.FC = () => {
  const { isDesktop } = useDeviceMode();

  const features = [
    {
      icon: <Zap />,
      title: 'Performance Optimization',
      description: 'Leveraging cutting-edge techniques to maximize application speed and efficiency.',
      color: 'text-blue-500'
    },
    {
      icon: <Code />,
      title: 'Innovative Development',
      description: 'Creative problem-solving and implementation of next-generation technological solutions.',
      color: 'text-green-500'
    },
    {
      icon: <Compass />,
      title: 'Strategic Planning',
      description: 'Comprehensive digital strategies aligned with your business objectives and growth trajectory.',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          Digital Innovation Hub
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-600">
          Transforming ideas into powerful digital experiences through innovative technology and strategic thinking.
        </p>
      </div>

      {isDesktop && (
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-center transform transition-all hover:scale-105 hover:shadow-2xl bg-white/70 backdrop-blur-sm shadow-md"
            >
              <div className={`mb-4 flex justify-center ${feature.color}`}>
                {React.cloneElement(feature.icon, { size: 48 })}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default HomeComponent;
