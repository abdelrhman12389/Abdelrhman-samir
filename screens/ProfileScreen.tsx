
import React from 'react';
import { LanguageDirection } from '../types';

interface ProfileScreenProps {
    languageDirection: LanguageDirection;
    toggleLanguageDirection: () => void;
}

const StatCard: React.FC<{ value: string, label: string, color: string }> = ({ value, label, color }) => (
    <div className={`flex-1 p-4 rounded-2xl text-center ${color}`}>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
    </div>
);

const SettingsRow: React.FC<{ label: string, description: string, children: React.ReactNode }> = ({ label, description, children }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <div className="pe-4">
            <p className="font-semibold text-gray-800">{label}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div>
            {children}
        </div>
    </div>
);

const ProfileScreen: React.FC<ProfileScreenProps> = ({ languageDirection, toggleLanguageDirection }) => {
    return (
        <div className="p-6 pb-24">
            <div className="flex flex-col items-center text-center mb-8">
                <img src="https://picsum.photos/120/120" alt="User Avatar" className="w-24 h-24 rounded-full mb-4 shadow-lg border-4 border-white" />
                <h1 className="text-2xl font-bold text-gray-800">Alex Starr</h1>
                <p className="text-gray-500">Dreamer since 1998</p>
            </div>

            <div className="flex space-x-4 rtl:space-x-reverse mb-8">
                <StatCard value="78" label="Dreams" color="bg-[#DCCCF6]/60" />
                <StatCard value="12" label="Matches" color="bg-[#A7E8E3]/60" />
                <StatCard value="3" label="Chats" color="bg-yellow-200/60" />
            </div>

            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Settings</h2>
                <div className="bg-white rounded-2xl p-4 shadow-md">
                   <SettingsRow label="Privacy Mode" description="Hide personal info from matches">
                        <input type="checkbox" className="toggle toggle-success" defaultChecked />
                        <label className="switch">
                            <input type="checkbox" className="sr-only peer" defaultChecked/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] rtl:after:right-[2px] rtl:after:left-auto after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A7E8E3]"></div>
                        </label>
                    </SettingsRow>
                    <SettingsRow label="Arabic (RTL) Mode" description="Switch UI to Right-to-Left">
                         <label className="switch">
                            <input type="checkbox" className="sr-only peer" checked={languageDirection === 'rtl'} onChange={toggleLanguageDirection}/>
                             <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] rtl:after:right-[2px] rtl:after:left-auto after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A7E8E3]"></div>
                        </label>
                    </SettingsRow>
                     <div className="pt-4">
                       <button className="w-full text-center text-red-500 font-semibold py-2">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;
