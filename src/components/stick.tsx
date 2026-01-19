// components/StickFigure.tsx
export default function StickFigure() {
    return (
        <div className="container">
            <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="body">
                    <circle cx="50" cy="30" r="10" stroke="white" stroke-width="3" fill="none" />
                    <line x1="50" y1="40" x2="50" y2="70" stroke="white" stroke-width="3" />
                    <line x1="50" y1="70" x2="40" y2="90" stroke="white" stroke-width="3" />
                    <line x1="50" y1="70" x2="60" y2="90" stroke="white" stroke-width="3" />
                    <line x1="50" y1="50" x2="35" y2="65" stroke="white" stroke-width="3" />
                    <line className="arm-wave" x1="50" y1="50" x2="65" y2="35" stroke="white" stroke-width="3" />
                </g>
            </svg>

            <style jsx>{`
                .container { display: flex; justify-content: center; }
                .body { 
                transform-origin: bottom; 
                animation: breathe 3s ease-in-out infinite; 
                }
                .arm-wave { 
                transform-origin: 45px 45px; 
                animation: wave 2s ease-in-out infinite; 
                }

                @keyframes breathe {
                0%, 100% { transform: scaleY(1); }
                50% { transform: scaleY(1.05); }
                }
                @keyframes wave {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(-40deg); }
                }
            `}</style>
        </div>
    );
}