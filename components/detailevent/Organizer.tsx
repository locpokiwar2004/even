import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface SocialLinks {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
}

interface OrganizerProps {
    name: string;
    img: string;
    description: string;
    socialLinks: SocialLinks;
}

const Organizer: React.FC = () => {
    // Sample data for testing
    const organizer: OrganizerProps = {
        name: "NoName",
        img: "/path-to-organizer-image.jpg",  
        description: "John is the visionary behind the Innovate & Elevate series. With a decade of experience in tech event management, he brings unparalleled expertise and passion for driving industry conversations.",
        socialLinks: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
        }
    };

    return (
        <div className="mt-5">
            <h3 className="text-2xl md:text-4xl font-bold">Organized by</h3>
            <div className="organizer flex flex-col lg:flex-row items-start lg:items-center gap-4 p-4 border border-gray-200 bg-gray-100 rounded-lg mt-8">
            <div className="organizer-img">
                <Image
                    className="rounded-full bg-black"
                    src={organizer.img}
                    alt={organizer.name}
                    width={80}
                    height={80}
                    layout="fixed"
                    objectFit="cover"
                />
            </div>
            <div className="organizer-info">
                <div className="organizer-name text-xl font-bold">{organizer.name}</div>
                <div className="organizer-description text-gray-600 mt-2">
                    {organizer.description}
                </div>
                <div className="social-links flex space-x-4 mt-4">
                    {organizer.socialLinks.facebook && (
                        <a href={organizer.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="text-blue-600" size="2x" />
                        </a>
                    )}
                    {organizer.socialLinks.twitter && (
                        <a href={organizer.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="text-blue-400" size="2x" />
                        </a>
                    )}
                    {organizer.socialLinks.linkedin && (
                        <a href={organizer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="text-blue-700" size="2x" />
                        </a>
                    )}
                    {organizer.socialLinks.instagram && (
                        <a href={organizer.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-pink-600" size="2x" />
                        </a>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Organizer;
