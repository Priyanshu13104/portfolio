"use client";
import React from 'react'
import LightRays from "../components/LightRays/LightRays";
import CardNav from "../components/CardNav/CardNav";
import DotGrid from "../components/DotGrid/DotGrid";


const ProjectsPage = () => {


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




        </div>
    )
}

export default ProjectsPage
