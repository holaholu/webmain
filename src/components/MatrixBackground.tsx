/**
 * Matrix Rain Background Component
 * 
 * Creates the iconic Matrix digital rain effect using HTML Canvas.
 * The animation features falling binary digits (0s and 1s) that create
 * a cyberpunk atmosphere for the portfolio website.
 * 
 * Key Features:
 * - Responsive canvas that fills the screen
 * - Binary characters (0s and 1s) for authenticity
 * - Random starting positions for natural flow
 * - Optimized performance with requestAnimationFrame
 * - Automatic resizing on window changes
 */

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

export const MatrixBackground: React.FC = () => {
  // Reference to the canvas element for drawing
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    /**
     * Resizes the canvas to match window dimensions
     * Called on mount and window resize events
     */
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuration for the Matrix effect
    const chars = '01';              // Binary characters for authenticity
    const fontSize = 14;             // Size of each character
    const columns = canvas.width / fontSize;  // Number of character columns
    const drops: number[] = [];      // Y-positions of each column's drop

    // Initialize each column's drop at a random negative position
    // This creates a staggered falling effect at the start
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    /**
     * Main drawing function for the Matrix rain effect
     * Handles the rendering of each frame of the animation
     */
    const draw = () => {
      // Create trailing effect by drawing a semi-transparent black rectangle
      // The alpha value (0.05) controls how long previous characters remain visible
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the style for Matrix characters
      // Using the iconic Matrix green (#0f0) and monospace font for authenticity
      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      // Process each column in the Matrix rain
      for (let i = 0; i < drops.length; i++) {
        // Randomly select a character from our binary set
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw the character at its current position
        // X position is determined by column index * fontSize
        // Y position is determined by the drop's current position * fontSize
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Reset the drop to the top when it reaches the bottom
        // The random factor (0.975) creates a varied, natural-looking flow
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        // Move the drop down by one position
        drops[i]++;
      }
    };

    // Start the animation loop
    // 33ms interval gives us approximately 30fps for smooth animation
    const interval = setInterval(draw, 33);

    // Cleanup function to prevent memory leaks
    // Runs when component unmounts
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.3,
        pointerEvents: 'none',
      }}
    />
  );
};
