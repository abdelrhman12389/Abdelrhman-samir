
import React from 'react';

const dreamLocations = [
    { name: 'Tokyo', style: { top: '38%', left: '85%' } },
    { name: 'Sydney', style: { top: '75%', left: '88%' } },
    { name: 'Chicago', style: { top: '40%', left: '25%' } },
    { name: 'Cairo', style: { top: '48%', left: '58%' } },
    { name: 'Rio de Janeiro', style: { top: '68%', left: '40%' } },
];

const MapPin: React.FC<{ name: string, style: React.CSSProperties }> = ({ name, style }) => (
    <div className="absolute transform -translate-x-1/2 -translate-y-full group" style={style}>
        <div className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap -translate-x-1/2 left-1/2">
            {name}
        </div>
        <div className="w-3 h-3 bg-[#A7E8E3] rounded-full ring-2 ring-white shadow-lg animate-pulse"></div>
    </div>
);


const MapScreen: React.FC = () => {
    return (
        <div className="h-full flex flex-col">
            <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800">Dream Map</h1>
                <p className="text-gray-500">Connections across the collective unconscious.</p>
            </div>
            <div className="flex-grow bg-[#e3f4f3] flex items-center justify-center overflow-hidden relative">
                 <svg viewBox="0 0 1000 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                    {/* Simplified world map path - placeholder */}
                    <path d="M500,5 C223.86,5 5,223.86 5,500 H995 C995,223.86 776.14,5 500,5 Z" fill="#DCCCF6" stroke="#c9b8e8" strokeWidth="1" className="opacity-50" />
                    <path d="M473.2,34.5c-15.3-2.3-31-3.3-46.9-2.8c-22,0.8-43.2,4.8-62.8,11.5c-19.4,6.6-36.8,15.7-51.1,28.7 c-13.6,12.3-23.7,27.1-31.5,43.8c-7.2,15.4-11.4,32-13.6,49.2c-2.3,18.1-2.4,36.6-0.6,55.1c1.5,15.8,4.8,31.2,9.8,45.8 c4.4,12.9,9.8,25,16.5,36.2c6.9,11.5,15.2,22,25.2,31.2c10.3,9.5,22,17.4,35,23.3c14,6.3,29.1,10.6,44.9,12.6 c16.2,2.1,32.7,2,49-0.1c16.9-2.2,33.2-6.5,48.4-13.1c14.6-6.3,28-14.7,39.6-25.7c11.3-10.7,20.6-23.4,27.8-37.9 c6.2-12.8,10.3-26.6,12.8-40.9c2.7-15,3.8-30.3,3.4-45.7c-0.4-17-2.6-33.8-6.9-49.8c-4.4-16.5-11-32-19.8-45.9 c-9.1-14.2-20.5-26.7-34-36.7c-13.4-9.8-28.7-17-45-21.2C506,36.5,489.5,35.3,473.2,34.5z" fill="#A7E8E3"/>
                    <path d="M853,108.2c-15.2-11.6-32.9-19.3-52.1-22.3c-20-3.2-40.7-1.3-59.8,4.8c-18,5.7-34,15-47.5,27.5 c-12.9,11.9-22.6,26.4-29.6,42.5c-6.6,15.1-10.4,31.4-12.1,48.1c-1.8,17.6-1.5,35.5,0.8,53c2.1,16.1,6.1,31.8,12,46.3 c5.6,13.6,12.7,26.2,21.5,37.5c9.2,11.8,20.2,22.1,32.8,30.3c12.7,8.2,26.8,14.4,41.8,18.1c15.2,3.7,30.9,4.9,46.5,3.4 c16.3-1.6,32.1-5.7,46.7-12.4c14.1-6.5,27-15.3,38-26.5c10.5-10.8,19-23.5,25.4-37.7c5.6-12.5,9.1-25.9,11.2-39.7 c2.3-14.6,3-29.4,2.2-44.2c-0.8-15.7-3.3-31.2-7.8-45.9c-4.6-15.1-11.3-29.3-20.3-42.3c-9.1-13.2-20.6-24.8-34.1-34 C884.2,115.5,868.5,112.3,853,108.2z" fill="#A7E8E3"/>
                    <path d="M149.2,318.5c-20.4-0.1-40.1,4.2-57.8,12.3c-17.1,7.8-31.8,19-43.2,33.2c-10.9,13.5-18,29.4-22.3,46.5 c-4.3,17.1-5.7,35.1-4.7,53c0.9,16.6,4,33,9.4,48.4c5.1,14.5,12.2,27.8,21.5,39.6c9.6,12.1,21.3,22.5,34.8,30.8 c13.4,8.2,28.3,14.1,43.9,17.3c15.8,3.2,32,3.7,47.9,1.4c16.2-2.3,31.8-7.4,46.2-15.1c13.7-7.4,26-17.1,36.3-28.9 c9.9-11.3,17.8-24.6,23.3-39.3c4.8-12.8,7.5-26.4,8.5-40.2c1-14.4,0.3-28.9-2-43.1c-2.3-14.7-6.5-28.9-12.7-42.1 c-6.4-13.6-15-26-25.6-36.6c-10.7-10.6-23.4-19.1-37.6-25.1C180.2,321.4,164.8,318.5,149.2,318.5z" fill="#A7E8E3"/>
                </svg>

                {dreamLocations.map(loc => <MapPin key={loc.name} name={loc.name} style={loc.style} />)}
            </div>
            <div className="p-4 bg-white/50 text-center text-sm text-gray-600">
                Pinch to zoom is not available in this preview.
            </div>
             <div className="h-20" />
        </div>
    );
};

export default MapScreen;
