import React, { useEffect, useRef } from 'react';

const Tick = () => {
    const tickRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (tickRef.current) {
                tickRef.current.style.animation = 'none';
            }
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const redirectToLogin = () => {
        window.location.href = '/login';
    };

    return (
        <div style={styles.fullScreenContainer}>
            <div style={styles.container}>
                <div ref={tickRef} style={styles.tick}>
                    <svg style={styles.tickSvg} viewBox="0 0 24 24">
                        <polyline points="6 12 10 16 18 8"></polyline>
                    </svg>
                </div>
                <h1>Account Created!</h1>
                <p>Your account has been successfully created.</p>
                <button style={styles.button} onClick={redirectToLogin}>Login</button>
            </div>
        </div>
    );
};

const styles = {
    fullScreenContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '106vh',
        width:'115%',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0'
    },
    container: {
        textAlign: 'center',
    },
    tick: {
        display: 'inline-block',
        width: '100px',
        height: '100px',
        border: '3px solid #5cb85c',
        borderRadius: '50%',
        position: 'relative',
        animation: 'tick 0.5s forwards'
    },
    tickSvg: {
        fill: 'none',
        stroke: '#5cb85c',
        strokeWidth: 3,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeDasharray: 70,
        strokeDashoffset: 70,
        animation: 'draw 3s forwards'
    },
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        marginTop: '20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none'
    }
};

// Adding global styles for animations using plain CSS within the component file:
document.head.appendChild(document.createElement("style")).textContent = `
@keyframes tick {
    0% { transform: scale(0); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
@keyframes draw {
    to { stroke-dashoffset: 0; }
}
`;

export default Tick;
