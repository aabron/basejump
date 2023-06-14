import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            imageSrc="/path/to/image1.jpg"
            title="Step 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            imageSrc="/path/to/image2.jpg"
            title="Step 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            imageSrc="/path/to/image3.jpg"
            title="Step 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="overflow-hidden shadow rounded-lg">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="h-12 w-12 opacity-75"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M7.778 3.026a2.5 2.5 0 0 0-3.556 3.528L6.94 9.998H3a1 1 0 0 0 0 2h3.94l-2.717 2.717a2.5 2.5 0 1 0 3.535 3.535l6-6a2.5 2.5 0 0 0 0-3.535l-6-6zm1.414 1.414l6 6a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.708-.708L14.293 12l-5.707-5.707a.5.5 0 0 1 .708-.707z"
            />
          </svg>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;