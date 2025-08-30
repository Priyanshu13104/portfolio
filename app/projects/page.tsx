"use client";
import React from 'react'
import LightRays from "../components/LightRays/LightRays";
import CardNav from "../components/CardNav/CardNav";
import DotGrid from "../components/DotGrid/DotGrid";
import { ExternalLink, Github, Calendar, Eye } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    date: string;
    featured?: boolean;
    ishosted?: boolean;
}

const ProjectsPage = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "EarnWave",
            description: "EarnWave is a user-friendly freelance marketplace designed to connect job seekers with potential employers.",
            image: "/ProjectImages/FreelancerMarketPlace.png",
            technologies: ["EJS", "CSS", "JS", "MongoDB"],
            demoUrl: "https://freelancer-marketplace-ranz.onrender.com/",
            githubUrl: "https://github.com/Priyanshu13104/project",
            date: "2024",
            featured: true,
            ishosted: true
        },
        {
            id: 2,
            title: "Chatbot SAAS Platform",
            description: "A Chatbot service for your website that seamlessly integrates with your existing infrastructure. Powered by gemini.",
            image: "/ProjectImages/ChatBotSAAS.png",
            technologies: ["JS", "TypeScript", "NextJS", "PostgreSQL"],
            demoUrl: "https://conversy.archan.dev/",
            githubUrl: "https://github.com/ArchanRD/chatbot-saas#",
            date: "2024",
            featured: true,
            ishosted: true
        },
        {
            id: 3,
            title: "FileZipper",
            description: "A file compression and management tool that allows users to easily zip and organize their files using various formats. Made with AI",
            image: "/ProjectImages/FileZipper.png",
            technologies: ["Python3", "Django"],
            demoUrl: "",
            githubUrl: "https://github.com/Priyanshu13104/File-Zipper",
            date: "2024",
            featured: false,
            ishosted: false
        },
        {
            id: 4,
            title: "Sorting Visualizer",
            description: "A web-based tool to visualize various sorting algorithms in action and understand them in an easy and interactive way.",
            image: "/ProjectImages/SortingWebsite.png",
            technologies: ["Python3", "Django"],
            demoUrl: "",
            githubUrl: "https://github.com/Priyanshu13104/sortify-simulation",
            date: "2024",
            featured: false,
            ishosted: false
        }
    ];

    // Card navigation data
    const cardNavItems = [
        {
            label: "Projects",
            bgColor: "#c27aff",
            textColor: "#FFFFFF",
            links: [
                { label: "View Projects", href: "/projects", ariaLabel: "View web applications" },
                { label: "Home", href: "/", ariaLabel: "Go to home page" }
            ]
        },
        {
            label: "About",
            bgColor: "#c27aff",
            textColor: "#FFFFFF",
            links: [
                { label: "Resume", href: "#", ariaLabel: "Download resume" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#c27aff",
            textColor: "#FFFFFF",
            links: [
                { label: "Email", href: "mailto:priyanshuprajapati13@gmail.com", ariaLabel: "Send email" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-prajapati-8a5b5b282/", target: "_blank", ariaLabel: "View LinkedIn profile" },
                { label: "GitHub", href: "https://github.com/Priyanshu13104", target: "_blank", ariaLabel: "View GitHub profile" }
            ]
        }
    ];

    const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
        return (
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 overflow-hidden hover:bg-white/10">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-6xl font-bold text-purple-300/30">
                                {project.title.charAt(0)}
                            </div>
                        </div>
                    )}
                    
    

                    {/* Featured Badge */}
                    {project.featured && (
                        <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 text-xs font-medium bg-purple-500 text-white rounded-full backdrop-blur-sm">
                                ⭐ Featured
                            </span>
                        </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white" />
                    </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                            {project.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-400 ml-2 flex-shrink-0">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.date}
                        </div>
                    </div>

                    <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-md border border-gray-700/50 backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="px-2 py-1 text-xs font-medium bg-gray-800/50 text-gray-400 rounded-md border border-gray-700/50">
                                +{project.technologies.length - 4} more
                            </span>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        {project.ishosted && project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium hover:bg-gray-800/50"
                            >
                                <Github className="w-4 h-4" />
                                Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-black lg:bg-gradient-to-br lg:from-gray-900 lg:via-gray-800 lg:to-black lg:bg-none lg:bg-black relative overflow-hidden">
            {/* Mobile Background - DotGrid */}
            <div className="fixed inset-0 z-0 lg:hidden w-full h-full">
                <DotGrid
                    dotSize={2}
                    gap={20}
                    baseColor="#271E37"
                    activeColor="#5227FF"
                    proximity={120}
                    speedTrigger={100}
                    shockRadius={200}
                    shockStrength={5}
                    maxSpeed={200}
                    resistance={750}
                    returnDuration={0.8}
                    className="w-full h-full px-0.5"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            {/* Desktop Background - Light Rays */}
            <div className="fixed inset-0 z-0 hidden lg:block">
                <LightRays
                    raysOrigin="top-center"
                    raysSpeed={1}
                    lightSpread={0.8}
                    rayLength={3}
                    pulsating={true}
                    fadeDistance={1}
                    saturation={1}
                    followMouse={true}
                    mouseInfluence={0.15}
                    noiseAmount={0}
                    distortion={0}
                    className="opacity-30"
                />
            </div>

            {/* Card Navigation */}
            <div className="relative z-50">
                <CardNav
                    logoAlt="Priyanshu Logo"
                    items={cardNavItems}
                    baseColor="rgba(0, 0, 0, 0.2)"
                    menuColor="#FFFFFF"
                    buttonBgColor="#8B5CF6"
                    buttonTextColor="#FFFFFF"
                    className="backdrop-blur-md"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-40 pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Projects
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Here you will find projects I have worked on.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
