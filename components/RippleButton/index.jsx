"use client";
import { useState } from "react";
import styles from "./styles.module.css";

export default function RippleButton({ children, onClick, link }) {
    const [ripples, setRipples] = useState([]);
    const addRipple = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = { id: Date.now(), x, y, size };

        setRipples((prevRipples) => [...prevRipples, newRipple]);

        setTimeout(() => {
            setRipples((prevRipples) => prevRipples.filter((r) => r.id !== newRipple.id));

        }, 1000); // Match animation duration


    };

    return (
        <button className={styles.rippleButton} onClick={(e) => { addRipple(e); onClick && onClick(e); }}>
            {children}
            {ripples.map(({ id, x, y, size }) => (
                <span key={id} className={styles.ripple} style={{ left: x, top: y, width: size, height: size }} />
            ))}

        </button>
    );
}
