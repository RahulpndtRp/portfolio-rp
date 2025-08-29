// src/components/sections/TechStackVisualization.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { skills } from '@/data/skills';
import { TECH_CATEGORIES, SKILL_LEVELS, getCategoryInfo, getSkillLevelInfo, VISUAL_CONFIG, SEARCH_CONFIG, VIEW_MODES } from '@/config/techstack';
import { Filter, Search, X, Layers } from 'lucide-react';

interface TechStackVisualizationProps {
    className?: string;
}

export function TechStackVisualization({ className }: TechStackVisualizationProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTech, setSelectedTech] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'category' | 'all' | 'search'>('category');
    const [searchTerm, setSearchTerm] = useState('');

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    // Filter skills based on search term
    const filteredSkills = skills.filter(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort categories by priority (from config) then by average skill level
    const sortedCategories = Object.entries(groupedSkills).sort(([categoryA], [categoryB]) => {
        const configA = getCategoryInfo(categoryA);
        const configB = getCategoryInfo(categoryB);
        return configA.priority - configB.priority;
    });

    const clearFilters = () => {
        setSelectedCategory(null);
        setSelectedTech(null);
        setSearchTerm('');
        setViewMode('category');
    };

    // Render compact skill item for lists
    const renderSkillItem = (skill: any) => {
        const skillInfo = getSkillLevelInfo(skill.level);
        const isSelected = selectedTech === skill.name;

        return (
            <div
                key={skill.name}
                className={`flex items-center justify-between ${VISUAL_CONFIG.skillItemPadding} rounded-lg border transition-all duration-200 cursor-pointer ${
                    isSelected 
                        ? VISUAL_CONFIG.selectionBorder + ' bg-ai-dark bg-opacity-80' 
                        : VISUAL_CONFIG.defaultBorder + ' bg-ai-dark ' + VISUAL_CONFIG.hoverBorder
                }`}
                onClick={() => setSelectedTech(isSelected ? null : skill.name)}
            >
                <div className="flex items-center gap-3 flex-1">
                    <div className={`w-3 h-3 rounded-full ${skillInfo.bg}`}></div>
                    <div>
                        <h4 className={`text-white ${VISUAL_CONFIG.skillName}`}>{skill.name}</h4>
                        <p className={VISUAL_CONFIG.skillCategory}>{skill.category}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${
                                    i < skill.level ? skillInfo.bg : 'bg-gray-600'
                                }`}
                            />
                        ))}
                    </div>
                    <Badge variant={skillInfo.variant as any} size="sm" className="text-xs ml-2">
                        {skillInfo.label}
                    </Badge>
                </div>
            </div>
        );
    };

    // Category view - clean and organized
    const renderCategoryView = () => (
        <div className="space-y-4">
            {sortedCategories.map(([category, categorySkills]) => {
                const categoryConfig = getCategoryInfo(category);
                const IconComponent = categoryConfig.icon;
                const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
                const skillInfo = getSkillLevelInfo(avgLevel);
                const topSkills = categorySkills.sort((a, b) => b.level - a.level).slice(0, VISUAL_CONFIG.categoryPreviewCount);

                return (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`bg-ai-dark rounded-lg ${VISUAL_CONFIG.categoryCardPadding} border ${VISUAL_CONFIG.defaultBorder} ${VISUAL_CONFIG.hoverBorder} transition-colors`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div 
                                    className="p-2 rounded-lg"
                                    style={{ backgroundColor: `${categoryConfig.color}20` }}
                                >
                                    <IconComponent 
                                        className="w-5 h-5" 
                                        style={{ color: categoryConfig.color }}
                                    />
                                </div>
                                <div>
                                    <h4 className={`text-white ${VISUAL_CONFIG.categoryTitle}`}>
                                        {category}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-400">
                                            {categorySkills.length} technologies
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <div className={`w-2 h-2 rounded-full ${skillInfo.bg}`}></div>
                                            <span className="text-xs text-gray-500">{skillInfo.label}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedCategory(category);
                                    setViewMode('all');
                                }}
                            >
                                View All
                            </Button>
                        </div>

                        {/* Organized skill grid */}
                        <div className="grid grid-cols-2 gap-2">
                            {topSkills.map((skill) => {
                                const sInfo = getSkillLevelInfo(skill.level);
                                return (
                                    <div
                                        key={skill.name}
                                        className="flex items-center justify-between p-2 rounded border border-gray-700 hover:border-gray-600 cursor-pointer transition-colors"
                                        onClick={() => setSelectedTech(selectedTech === skill.name ? null : skill.name)}
                                    >
                                        <div className="flex items-center gap-2 flex-1 min-w-0">
                                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${sInfo.bg}`}></div>
                                            <span className="text-sm text-white truncate">{skill.name}</span>
                                        </div>
                                        <div className="flex items-center gap-1 flex-shrink-0">
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-1 h-1 rounded-full ${
                                                            i < skill.level ? sInfo.bg : 'bg-gray-600'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-400 ml-1">{skill.level}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {categorySkills.length > VISUAL_CONFIG.categoryPreviewCount && (
                            <div className="text-center mt-3">
                                <span className="text-xs text-gray-400">
                                    +{categorySkills.length - VISUAL_CONFIG.categoryPreviewCount} more technologies
                                </span>
                            </div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );

    // All skills view - clean list layout
    const renderAllSkillsView = () => {
        const skillsToShow = selectedCategory 
            ? groupedSkills[selectedCategory] || []
            : searchTerm 
            ? filteredSkills 
            : skills;

        return (
            <div>
                {(selectedCategory || searchTerm) && (
                    <div className="flex items-center justify-between mb-4 p-3 bg-ai-dark rounded-lg border border-gray-700">
                        <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-ai-blue" />
                            <span className="text-sm text-white">
                                {selectedCategory ? `Category: ${selectedCategory}` : `Search: "${searchTerm}"`}
                            </span>
                            <Badge variant="outline" size="sm">
                                {skillsToShow.length} results
                            </Badge>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearFilters}
                        >
                            <X className="w-4 h-4 mr-1" />
                            Clear
                        </Button>
                    </div>
                )}
                
                <div className="space-y-2">
                    {skillsToShow.map((skill) => renderSkillItem(skill))}
                </div>

                {skillsToShow.length === 0 && (
                    <div className="text-center py-8 text-gray-400">
                        <Search className="w-8 h-8 mx-auto mb-2" />
                        <p>No technologies found matching your search.</p>
                    </div>
                )}
            </div>
        );
    };

    const totalSkills = skills.length;
    const expertSkills = skills.filter(s => s.level >= 4.5).length;
    const advancedSkills = skills.filter(s => s.level >= 4 && s.level < 4.5).length;

    return (
        <Card className={className}>
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-ai-purple flex items-center gap-2">
                        <Layers className="w-5 h-5" />
                        Technology Stack
                    </h3>
                    
                    <div className="flex gap-2">
                        <Button
                            variant={viewMode === 'category' ? 'primary' : 'ghost'}
                            size="sm"
                            onClick={() => {
                                setViewMode('category');
                                clearFilters();
                            }}
                        >
                            Categories
                        </Button>
                        <Button
                            variant={viewMode === 'all' ? 'primary' : 'ghost'}
                            size="sm"
                            onClick={() => setViewMode('all')}
                        >
                            <Filter className="w-4 h-4 mr-1" />
                            All Skills
                        </Button>
                    </div>
                </div>

                {/* Search bar - separate row */}
                <div className="mb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder={SEARCH_CONFIG.placeholder}
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setViewMode(e.target.value ? 'search' : 'category');
                                setSelectedCategory(null);
                            }}
                            className={`w-full pl-10 pr-10 py-2 bg-ai-dark border ${VISUAL_CONFIG.defaultBorder} rounded-lg text-white text-sm placeholder-gray-400 focus:border-ai-blue focus:outline-none`}
                        />
                        {searchTerm && (
                            <button
                                onClick={clearFilters}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                <X className="w-4 h-4 text-gray-400 hover:text-white" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Stats - only show when not searching */}
                {!searchTerm && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="text-center p-3 bg-ai-gray rounded-lg">
                            <div className="text-2xl font-bold text-ai-blue">{totalSkills}</div>
                            <div className="text-xs text-gray-400">Technologies</div>
                        </div>
                        <div className="text-center p-3 bg-ai-gray rounded-lg">
                            <div className="text-2xl font-bold text-ai-purple">{expertSkills}</div>
                            <div className="text-xs text-gray-400">Expert Level</div>
                        </div>
                        <div className="text-center p-3 bg-ai-gray rounded-lg">
                            <div className="text-2xl font-bold text-green-400">{advancedSkills}</div>
                            <div className="text-xs text-gray-400">Advanced</div>
                        </div>
                    </div>
                )}
            </div>

            <div className="max-h-96 overflow-y-auto">
                {viewMode === 'category' && renderCategoryView()}
                {(viewMode === 'all' || viewMode === 'search') && renderAllSkillsView()}
            </div>

            {/* Selected tech details */}
            {selectedTech && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-ai-dark border border-ai-blue rounded-lg"
                >
                    {skills
                        .filter(skill => skill.name === selectedTech)
                        .map((skill) => {
                            const skillInfo = getSkillLevelInfo(skill.level);
                            const categoryInfo = getCategoryInfo(skill.category);
                            const IconComponent = categoryInfo.icon;
                            return (
                                <div key={skill.name} className="flex gap-4">
                                    <div 
                                        className="p-3 rounded-lg flex-shrink-0"
                                        style={{ backgroundColor: `${categoryInfo.color}20` }}
                                    >
                                        <IconComponent 
                                            className="w-6 h-6" 
                                            style={{ color: categoryInfo.color }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-bold text-white text-lg">{skill.name}</h4>
                                            <Badge variant={skillInfo.variant as any}>
                                                {skillInfo.label}
                                            </Badge>
                                        </div>
                                        <p className="text-gray-300 text-sm mb-3">
                                            {skill.category} • Level {skill.level}/5
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-3 h-3 rounded-full ${
                                                            i < skill.level ? skillInfo.bg : 'bg-gray-600'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-400">
                                                Proficiency: {Math.round((skill.level / 5) * 100)}%
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => setSelectedTech(null)}
                                            className="mt-3 text-xs text-gray-400 hover:text-white"
                                        >
                                            Click to close details
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </motion.div>
            )}
        </Card>
    );
}