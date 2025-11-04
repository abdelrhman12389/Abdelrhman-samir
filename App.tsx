
import React, { useState, useCallback } from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import AddDreamScreen from './screens/AddDreamScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';
import { Screen, LanguageDirection } from './types';

const App: React.FC = () => {
    const [hasOnboarded, setHasOnboarded] = useState(false);
    const [activeScreen, setActiveScreen] = useState<Screen>('ADD');
    const [languageDirection, setLanguageDirection] = useState<LanguageDirection>('ltr');

    const handleOnboard = () => setHasOnboarded(true);

    const toggleLanguageDirection = useCallback(() => {
        const newDir = languageDirection === 'ltr' ? 'rtl' : 'ltr';
        setLanguageDirection(newDir);
        document.documentElement.dir = newDir;
        document.documentElement.lang = newDir === 'ltr' ? 'en' : 'ar';
    }, [languageDirection]);

    if (!hasOnboarded) {
        return <OnboardingScreen onStart={handleOnboard} />;
    }

    const renderScreen = () => {
        switch (activeScreen) {
            case 'ADD':
                return <AddDreamScreen />;
            case 'MAP':
                return <MapScreen />;
            case 'PROFILE':
                return <ProfileScreen languageDirection={languageDirection} toggleLanguageDirection={toggleLanguageDirection} />;
            default:
                return <AddDreamScreen />;
        }
    };

    return (
        <div className="min-h-screen bg-[#DCCCF6]/30 flex items-center justify-center p-4">
            <main className="w-full max-w-sm h-[800px] max-h-[95vh] bg-[#F5F7FA] shadow-2xl rounded-[40px] overflow-hidden relative flex flex-col ring-8 ring-gray-800">
                <div className="flex-grow overflow-y-auto scrollbar-hide">
                    {renderScreen()}
                </div>
                <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
            </main>
        </div>
    );
};

export default App;
