// src/components/sections/JourneyVisualization.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { techJourney } from '@/data/professional';
import { Trophy, TrendingUp, Zap, Target, Star } from 'lucide-react';

export function JourneyVisualization() {
    const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null);
    const [animationPhase, setAnimationPhase] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setAnimationPhase(1), 500);
        return () => clearTimeout(timer);
    }, []);

    // Mountain path visualization
    const width = 700;
    const height = 350;
    const padding = 60;

    const getMountainPoint = (index: number, total: number) => {
        const stepWidth = (width - 2 * padding) / (total - 1);
        const baseHeight = height - padding;
        
        // Progressive height increase (mountain climbing)
        const progressionLevels = [0.1, 0.3, 0.55, 0.8, 0.95]; // Steeper climb
        const normalizedHeight = progressionLevels[index] || 0;
        
        return {
            x: padding + stepWidth * index,
            y: baseHeight - (baseHeight - padding) * normalizedHeight,
            stepWidth: stepWidth
        };
    };

    // Generate mountain path with connecting platforms
    const generateMountainPath = () => {
        const points: string[] = [];
        const platformWidth = 80;
        
        techJourney.forEach((_, index) => {
            const point = getMountainPoint(index, techJourney.length);
            const prevPoint = index > 0 ? getMountainPoint(index - 1, techJourney.length) : null;
            
            if (index === 0) {
                // Start platform
                points.push(`M ${point.x - platformWidth/2} ${point.y}`);
                points.push(`L ${point.x + platformWidth/2} ${point.y}`);
            } else if (prevPoint) {
                // Connecting slope from previous platform
                points.push(`L ${prevPoint.x + platformWidth/2} ${prevPoint.y}`);
                points.push(`L ${point.x - platformWidth/2} ${point.y}`);
                points.push(`L ${point.x + platformWidth/2} ${point.y}`);
            }
        });
        
        return points.join(' ');
    };

    const milestoneIcons = {
        '2021': Target,
        '2022': TrendingUp,
        '2023': Zap,
        '2024': Trophy,
        '2025': Star
    };

    const getMilestoneColor = (year: string) => {
        const colors = {
            '2021': '#10B981',
            '2022': '#3B82F6',
            '2023': '#8B5CF6',
            '2024': '#F59E0B',
            '2025': '#00D4FF'
        };
        return colors[year as keyof typeof colors] || '#6B7280';
    };

    const getProgressLevel = (year: string) => {
        const levels = {
            '2021': 'Foundation',
            '2022': 'Growth',
            '2023': 'Acceleration', 
            '2024': 'Innovation',
            '2025': 'Leadership'
        };
        return levels[year as keyof typeof levels] || 'Progress';
    };

    return (
        <Card>
            <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-ai-blue text-center">
                    AI/ML Journey - Mountain Path (2021-2025)
                </h3>
                <p className="text-center text-gray-300 text-sm">
                    Climbing from traditional ML to Senior AI/ML Leadership
                </p>
            </div>

            {/* Mountain Path Visualization */}
            <div className="relative mb-6">
                <svg 
                    width="100%" 
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    className="mx-auto"
                >
                    <defs>
                        <linearGradient id="mountainGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#1F2937" />
                            <stop offset="50%" stopColor="#374151" />
                            <stop offset="100%" stopColor="#4B5563" />
                        </linearGradient>
                        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="25%" stopColor="#3B82F6" />
                            <stop offset="50%" stopColor="#8B5CF6" />
                            <stop offset="75%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#00D4FF" />
                        </linearGradient>
                    </defs>

                    {/* Mountain background */}
                    <path
                        d={`M 0 ${height} L 0 ${height-40} L ${width/4} ${height-80} L ${width/2} ${height-120} L ${3*width/4} ${height-160} L ${width} ${height-200} L ${width} ${height} Z`}
                        fill="url(#mountainGradient)"
                        opacity="0.3"
                    />

                    {/* Mountain path */}
                    <motion.path
                        d={generateMountainPath()}
                        stroke="url(#pathGradient)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: animationPhase >= 1 ? 1 : 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Milestone platforms and icons */}
                    {techJourney.map((milestone, index) => {
                        const point = getMountainPoint(index, techJourney.length);
                        const IconComponent = milestoneIcons[milestone.year as keyof typeof milestoneIcons];
                        const color = getMilestoneColor(milestone.year);
                        const isHovered = hoveredMilestone === milestone.year;
                        const platformWidth = 80;
                        const platformHeight = 8;

                        return (
                            <g key={milestone.year}>
                                {/* Platform */}
                                <motion.rect
                                    x={point.x - platformWidth/2}
                                    y={point.y - platformHeight/2}
                                    width={platformWidth}
                                    height={platformHeight}
                                    rx="4"
                                    fill={color}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: animationPhase >= 1 ? 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                                />

                                {/* Icon background circle */}
                                <motion.circle
                                    cx={point.x}
                                    cy={point.y - 20}
                                    r={isHovered ? 22 : 18}
                                    fill={color}
                                    stroke="white"
                                    strokeWidth="3"
                                    className="cursor-pointer"
                                    onMouseEnter={() => setHoveredMilestone(milestone.year)}
                                    onMouseLeave={() => setHoveredMilestone(null)}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: animationPhase >= 1 ? 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                                    whileHover={{ scale: 1.2 }}
                                />

                                {/* Icon */}
                                <motion.g
                                    initial={{ scale: 0 }}
                                    animate={{ scale: animationPhase >= 1 ? 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                                    className="cursor-pointer"
                                    onMouseEnter={() => setHoveredMilestone(milestone.year)}
                                    onMouseLeave={() => setHoveredMilestone(null)}
                                >
                                    <foreignObject
                                        x={point.x - 8}
                                        y={point.y - 28}
                                        width="16"
                                        height="16"
                                    >
                                        <IconComponent className="w-4 h-4 text-white" />
                                    </foreignObject>
                                </motion.g>

                                {/* Year label */}
                                <motion.text
                                    x={point.x}
                                    y={point.y - 45}
                                    textAnchor="middle"
                                    className="text-sm font-bold fill-white"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: animationPhase >= 1 ? 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                                >
                                    {milestone.year}
                                </motion.text>

                                {/* Progress level */}
                                <motion.text
                                    x={point.x}
                                    y={point.y + 25}
                                    textAnchor="middle"
                                    className="text-xs fill-gray-300 font-medium"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: animationPhase >= 1 ? 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                                >
                                    {getProgressLevel(milestone.year)}
                                </motion.text>

                                {/* Altitude markers */}
                                {index > 0 && (
                                    <motion.text
                                        x={point.x - 50}
                                        y={point.y}
                                        textAnchor="middle"
                                        className="text-xs fill-gray-400"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: animationPhase >= 1 ? 0.6 : 0 }}
                                        transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                                    >
                                        Level {index + 1}
                                    </motion.text>
                                )}
                            </g>
                        );
                    })}

                    {/* Summit flag for 2025 */}
                    <motion.g
                        initial={{ scale: 0, y: 20 }}
                        animate={{ 
                            scale: animationPhase >= 1 ? 1 : 0,
                            y: animationPhase >= 1 ? 0 : 20
                        }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    >
                        <path
                            d={`M ${getMountainPoint(4, techJourney.length).x + 20} ${getMountainPoint(4, techJourney.length).y - 40} L ${getMountainPoint(4, techJourney.length).x + 20} ${getMountainPoint(4, techJourney.length).y - 70} L ${getMountainPoint(4, techJourney.length).x + 50} ${getMountainPoint(4, techJourney.length).y - 60} L ${getMountainPoint(4, techJourney.length).x + 20} ${getMountainPoint(4, techJourney.length).y - 50} Z`}
                            fill="#00D4FF"
                        />
                        <line
                            x1={getMountainPoint(4, techJourney.length).x + 20}
                            y1={getMountainPoint(4, techJourney.length).y - 40}
                            x2={getMountainPoint(4, techJourney.length).x + 20}
                            y2={getMountainPoint(4, techJourney.length).y - 70}
                            stroke="white"
                            strokeWidth="2"
                        />
                        <text
                            x={getMountainPoint(4, techJourney.length).x + 35}
                            y={getMountainPoint(4, techJourney.length).y - 75}
                            textAnchor="middle"
                            className="text-xs font-bold fill-ai-blue"
                        >
                            Senior Level
                        </text>
                    </motion.g>

                    {/* Base camp */}
                    <text x={width / 2} y={height - 10} textAnchor="middle" className="text-sm fill-gray-400">
                        Career Progression Timeline
                    </text>
                    <text 
                        x={15} 
                        y={height / 2} 
                        textAnchor="middle" 
                        className="text-sm fill-gray-400"
                        transform={`rotate(-90, 15, ${height / 2})`}
                    >
                        Expertise Altitude
                    </text>
                </svg>
            </div>

            {/* Milestone Details */}
            {hoveredMilestone && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="glass-effect p-4 rounded-lg border border-ai-blue mb-6"
                >
                    {techJourney
                        .filter(milestone => milestone.year === hoveredMilestone)
                        .map((milestone) => {
                            const IconComponent = milestoneIcons[milestone.year as keyof typeof milestoneIcons];
                            return (
                                <div key={milestone.year} className="flex gap-3">
                                    <div 
                                        className="p-2 rounded-lg flex-shrink-0"
                                        style={{ backgroundColor: `${getMilestoneColor(milestone.year)}20` }}
                                    >
                                        <IconComponent 
                                            className="w-5 h-5" 
                                            style={{ color: getMilestoneColor(milestone.year) }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white mb-1">{milestone.title}</h4>
                                        <p className="text-gray-300 text-sm mb-2">{milestone.description}</p>
                                        
                                        {milestone.company && (
                                            <Badge variant="secondary" size="sm" className="mb-2">
                                                {milestone.company}
                                            </Badge>
                                        )}
                                        
                                        <div className="flex flex-wrap gap-1">
                                            {milestone.technologies.slice(0, 4).map((tech) => (
                                                <Badge key={tech} variant="outline" size="sm" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {milestone.technologies.length > 4 && (
                                                <Badge variant="outline" size="sm" className="text-xs">
                                                    +{milestone.technologies.length - 4}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </motion.div>
            )}

            {/* Legend */}
            <div className="pt-4 border-t border-gray-600">
                <div className="grid grid-cols-5 gap-2 text-center">
                    {techJourney.map((milestone) => {
                        const color = getMilestoneColor(milestone.year);
                        return (
                            <div key={milestone.year} className="flex flex-col items-center gap-1">
                                <div 
                                    className="w-3 h-3 rounded-full border-2 border-white"
                                    style={{ backgroundColor: color }}
                                ></div>
                                <span className="text-xs text-gray-400">{milestone.year}</span>
                                <span className="text-xs font-medium text-gray-300">
                                    {getProgressLevel(milestone.year)}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <p className="text-xs text-gray-400 text-center mt-2">
                    Hover over any milestone to see details
                </p>
            </div>
        </Card>
    );
}