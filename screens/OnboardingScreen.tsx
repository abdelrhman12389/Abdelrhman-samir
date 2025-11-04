
import React from 'react';
import Icon from '../components/Icon';

interface OnboardingScreenProps {
    onStart: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onStart }) => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[#DCCCF6] to-[#A7E8E3]">
            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="mb-8 text-gray-800">
                    <Icon name="CloudMoon" className="w-32 h-32" />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to DreamLink</h1>
                <p className="text-lg text-gray-700 max-w-xs">
                    Record your dreams, discover their meanings, and connect with dreamers around the world.
                </p>
            </div>
            <button
                onClick={onStart}
                className="w-full max-w-xs bg-white text-gray-800 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300"
            >
                Start Your Dream Journey
            </button>
        </div>
    );
};

export default OnboardingScreen;
