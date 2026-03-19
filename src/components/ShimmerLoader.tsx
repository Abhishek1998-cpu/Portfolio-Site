import React from 'react';

interface ShimmerLoaderProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

const ShimmerLoader: React.FC<ShimmerLoaderProps> = ({
  className = '',
  height = 'h-4',
  width = 'w-full',
  rounded = false,
}) => {
  return (
    <div
      className={`${width} ${height} ${rounded ? 'rounded-full' : 'rounded'} bg-gray-200 ${className}`}
      style={{
        background: 'linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%, #f0f0f0 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s ease-in-out infinite',
      }}
    />
  );
};

export const ShimmerBox: React.FC<{
  width?: string;
  height?: string;
  className?: string;
}> = ({ width = 'w-full', height = 'h-48', className = '' }) => {
  return (
    <div
      className={`${width} ${height} rounded-lg bg-gray-200 ${className}`}
      style={{
        background: 'linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%, #f0f0f0 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s ease-in-out infinite',
      }}
    />
  );
};

export default ShimmerLoader;

