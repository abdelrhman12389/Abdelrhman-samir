
import React from 'react';
import Icon from './Icon';
import { Screen } from '../types';

interface BottomNavProps {
    activeScreen: Screen;
    setActiveScreen: (screen: Screen) => void;
}

const NavItem: React.FC<{
    screen: Screen,
    label: string,
    icon: React.ReactElement,
    isActive: boolean,
    onClick: () => void,
}> = ({ label, icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-all duration-200 ${isActive ? 'text-[#DCCCF6]' : 'text-gray-400 hover:text-gray-600'}`}
    >
        {React.cloneElement(icon, { className: `w-7 h-7 mb-1 transition-transform duration-200 ${isActive ? 'scale-110' : ''}` })}
        <span className="text-xs font-medium">{label}</span>
    </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
    return (
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-900/90 backdrop-blur-sm rounded-b-[38px] flex items-center justify-around shadow-inner_top">
            <NavItem
                screen="ADD"
                label="Add Dream"
                icon={<Icon name="PlusCircle" />}
                isActive={activeScreen === 'ADD'}
                onClick={() => setActiveScreen('ADD')}
            />
            <NavItem
                screen="MAP"
                label="Map"
                icon={<Icon name="MapPin" />}
                isActive={activeScreen === 'MAP'}
                onClick={() => setActiveScreen('MAP')}
            />
            <NavItem
                screen="PROFILE"
                label="Profile"
                icon={<Icon name="UserCircle" />}
                isActive={activeScreen === 'PROFILE'}
                onClick={() => setActiveScreen('PROFILE')}
            />
        </div>
    );
};

export default BottomNav;
