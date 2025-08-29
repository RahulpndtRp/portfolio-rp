// src/components/sections/SkillRadarVisualization.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { skillRadarData } from '@/data/professional';
import { BarChart3, TrendingUp, Award } from 'lucide-react';

export function SkillRadarVisualization() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'radar' | 'bars'>('radar');
    const [animationPhase, setAnimationPhase] = useState(0);

    // Radar chart calculations
    const centerX = 150;
    const centerY = 150;
    const radius = 120;
    const skillCount = skillRadarData.length;

    useEffect(() => {
        const timer = setTimeout(() => setAnimationPhase(1), 500);
        return () => clearTimeout(timer);
    }, []);

    const getSkillColor = (level: number) => {
        if (level >= 95) return '#00D4FF';
        if (level >= 90) return '#6366F1';
        if (level >= 85) return '#10B981';
        return '#F59E0B';
    };

    const getSkillPosition = (index: number) => {
        const angle = (index * 360) / skillCount - 90;
        const radians = (angle * Math.PI) / 180;
        return {
            x: centerX + Math.cos(radians) * radius,
            y: centerY + Math.sin(radians) * radius
        };
    };

    const renderRadarChart = () => (
        <div className="relative w-80 h-80 mx-auto">
            <svg width="300" height="300" className="absolute inset-0">
                {/* Background circles */}
                {[20, 40, 60, 80, 100].map((percent) => (
                    <circle
                        key={percent}
                        cx={centerX}
                        cy={centerY}
                        r={(radius * percent) / 100}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                    />
                ))}

                {/* Grid lines */}
                {skillRadarData.map((_, index) => {
                    const pos = getSkillPosition(index);
                    return (
                        <line
                            key={index}
                            x1={centerX}
                            y1={centerY}
                            x2={pos.x}
                            y2={pos.y}
                            stroke="rgba(255, 255, 255, 0.1)"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Skill points and connecting lines */}
                <motion.polygon
                    points={skillRadarData
                        .map((skill, index) => {
                            const pos = getSkillPosition(index);
                            const distance = (radius * skill.level) / 100;
                            const angle = (index * 360) / skillCount - 90;
                            const radians = (angle * Math.PI) / 180;
                            const x = centerX + Math.cos(radians) * distance;
                            const y = centerY + Math.sin(radians) * distance;
                            return `${x},${y}`;
                        })
                        .join(' ')}
                    fill="rgba(0, 212, 255, 0.1)"
                    stroke="#00D4FF"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                        opacity: animationPhase >= 1 ? 0.8 : 0, 
                        scale: animationPhase >= 1 ? 1 : 0 
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Individual skill points */}
                {skillRadarData.map((skill, index) => {
                    const pos = getSkillPosition(index);
                    const distance = (radius * skill.level) / 100;
                    const angle = (index * 360) / skillCount - 90;
                    const radians = (angle * Math.PI) / 180;
                    const x = centerX + Math.cos(radians) * distance;
                    const y = centerY + Math.sin(radians) * distance;

                    return (
                        <motion.circle
                            key={skill.skill}
                            cx={x}
                            cy={y}
                            r={hoveredSkill === skill.skill ? 8 : 6}
                            fill={getSkillColor(skill.level)}
                            stroke="white"
                            strokeWidth="2"
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredSkill(skill.skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                                opacity: animationPhase >= 1 ? 1 : 0, 
                                scale: animationPhase >= 1 ? 1 : 0 
                            }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            whileHover={{ scale: 1.2 }}
                        />
                    );
                })}
            </svg>

            {/* Skill labels */}
            {skillRadarData.map((skill, index) => {
                const pos = getSkillPosition(index);
                const labelDistance = radius + 30;
                const angle = (index * 360) / skillCount - 90;
                const radians = (angle * Math.PI) / 180;
                const x = centerX + Math.cos(radians) * labelDistance;
                const y = centerY + Math.sin(radians) * labelDistance;

                return (
                    <motion.div
                        key={skill.skill}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ 
                            left: x, 
                            top: y,
                            zIndex: hoveredSkill === skill.skill ? 10 : 1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: animationPhase >= 1 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                    >
                        <div className={`text-xs font-medium text-center ${
                            hoveredSkill === skill.skill 
                                ? 'text-white bg-ai-dark px-2 py-1 rounded shadow-lg' 
                                : 'text-gray-300'
                        }`}>
                            {skill.skill}
                            {hoveredSkill === skill.skill && (
                                <div className="text-ai-blue font-bold">{skill.level}%</div>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );

    const renderBarChart = () => (
        <div className="space-y-3">
            {skillRadarData.map((skill, index) => (
                <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm font-medium ${
                            hoveredSkill === skill.skill ? 'text-white' : 'text-gray-300'
                        }`}>
                            {skill.skill}
                        </span>
                        <div className="flex items-center gap-2">
                            <Badge 
                                variant={skill.level >= 95 ? 'primary' : skill.level >= 90 ? 'secondary' : 'outline'} 
                                size="sm"
                            >
                                {skill.level}%
                            </Badge>
                            {skill.level >= 95 && <Award className="w-4 h-4 text-ai-blue" />}
                        </div>
                    </div>
                    <div className="w-full bg-ai-dark rounded-full h-3 overflow-hidden">
                        <motion.div
                            className={`h-3 rounded-full bg-gradient-to-r ${
                                skill.level >= 95 
                                    ? 'from-ai-blue to-cyan-400' 
                                    : skill.level >= 90 
                                    ? 'from-ai-purple to-purple-400' 
                                    : 'from-green-500 to-green-400'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );

    const expertiseStats = {
        expert: skillRadarData.filter(s => s.level >= 95).length,
        advanced: skillRadarData.filter(s => s.level >= 90 && s.level < 95).length,
        proficient: skillRadarData.filter(s => s.level >= 85 && s.level < 90).length,
        average: Math.round(skillRadarData.reduce((sum, s) => sum + s.level, 0) / skillRadarData.length)
    };

    return (
        <Card>
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-ai-blue flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Expertise Radar
                    </h3>
                    <div className="flex gap-2">
                        <Button
                            variant={viewMode === 'radar' ? 'primary' : 'ghost'}
                            size="sm"
                            onClick={() => setViewMode('radar')}
                        >
                            Radar
                        </Button>
                        <Button
                            variant={viewMode === 'bars' ? 'primary' : 'ghost'}
                            size="sm"
                            onClick={() => setViewMode('bars')}
                        >
                            <BarChart3 className="w-4 h-4 mr-1" />
                            Bars
                        </Button>
                    </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                    <div className="text-center p-3 bg-ai-dark rounded-lg">
                        <div className="text-lg font-bold text-ai-blue">{expertiseStats.expert}</div>
                        <div className="text-xs text-gray-400">Expert Level</div>
                    </div>
                    <div className="text-center p-3 bg-ai-dark rounded-lg">
                        <div className="text-lg font-bold text-ai-purple">{expertiseStats.advanced}</div>
                        <div className="text-xs text-gray-400">Advanced</div>
                    </div>
                    <div className="text-center p-3 bg-ai-dark rounded-lg">
                        <div className="text-lg font-bold text-green-500">{expertiseStats.proficient}</div>
                        <div className="text-xs text-gray-400">Proficient</div>
                    </div>
                    <div className="text-center p-3 bg-ai-dark rounded-lg">
                        <div className="text-lg font-bold text-yellow-500">{expertiseStats.average}%</div>
                        <div className="text-xs text-gray-400">Average</div>
                    </div>
                </div>
            </div>

            {/* Chart content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {viewMode === 'radar' ? renderRadarChart() : renderBarChart()}
            </motion.div>

            {/* Legend */}
            <div className="mt-6 pt-4 border-t border-gray-600">
                <div className="flex flex-wrap gap-4 justify-center text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-ai-blue"></div>
                        <span className="text-gray-400">Expert (95%+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-ai-purple"></div>
                        <span className="text-gray-400">Advanced (90%+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-gray-400">Proficient (85%+)</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}