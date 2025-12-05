"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/WhatsAppButton.module.css";

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
}

export default function WhatsAppButton({ 
    phoneNumber = "+972542505203", // Default Israeli number format
    message = "שלום, התרשמו בשבילי?"
}: WhatsAppButtonProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Show button after a short delay for better UX
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        // Format phone number for WhatsApp
        // Remove all non-digit characters (spaces, dashes, parentheses, plus signs, etc.)
        let cleanPhone = phoneNumber.replace(/\D/g, '');
        
        // Remove leading zeros if present (WhatsApp doesn't accept them)
        cleanPhone = cleanPhone.replace(/^0+/, '');
        
        // Ensure we have a valid phone number (at least 7 digits, typically 10-15 digits)
        if (cleanPhone.length < 7 || cleanPhone.length > 15) {
            console.error('Invalid phone number format:', phoneNumber, '->', cleanPhone);
            alert('מספר טלפון לא תקין. אנא בדקו את המספר.');
            return;
        }
        
        // Build WhatsApp URL
        // Start with base URL - ensure no trailing slashes or extra characters
        let whatsappUrl = `https://wa.me/${cleanPhone}`;
        
        // Add message parameter if message exists
        if (message && message.trim()) {
            // Properly encode the message for URL
            // encodeURIComponent handles Hebrew characters, spaces, and special characters correctly
            const trimmedMessage = message.trim();
            const encodedMessage = encodeURIComponent(trimmedMessage);
            
            // Ensure the encoded message doesn't break the URL
            // WhatsApp requires the text parameter to be properly URL-encoded
            whatsappUrl += `?text=${encodedMessage}`;
        }
        
        // Debug: log the URL to console for troubleshooting
        console.log('WhatsApp URL:', whatsappUrl);
        console.log('Phone number:', cleanPhone);
        console.log('Original message:', message);
        
        // Always use direct navigation for WhatsApp links
        // This is the most reliable method and works on both mobile and desktop
        // Mobile: opens WhatsApp app directly
        // Desktop: opens WhatsApp Web
        window.location.href = whatsappUrl;
    };

    return (
        <div
            className={`${styles.whatsappButton} ${isVisible ? styles.visible : styles.hidden}`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
            aria-label="צור קשר בוואטסאפ"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            <div className={styles.iconContainer}>
                <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            {isHovered && (
                <div className={styles.tooltip}>
                    <span className={styles.tooltipText}>שלחו לנו הודעה</span>
                    <div className={styles.tooltipArrow}></div>
                </div>
            )}
            <div className={styles.pulseRing}></div>
        </div>
    );
}
