
import React, { useState, useCallback } from 'react';
import Icon from '../components/Icon';
import Loader from '../components/Loader';
import DreamCard from '../components/DreamCard';
import { analyzeDreamWithAI } from '../services/geminiService';
import { AIAnalysis, DreamMatch } from '../types';

const mockMatches: DreamMatch[] = [
    { id: '1', text: 'I was soaring through clouds that looked like cotton candy, the city below was sparkling with neon lights.', location: { city: 'Tokyo', country: 'Japan', lat: 35.68, lng: 139.69 }, timestamp: new Date(), similarity: 0.88 },
    { id: '2', text: 'Dreamt I was flying over the ocean, the water was crystal clear and I could see giant, friendly whales swimming.', location: { city: 'Sydney', country: 'Australia', lat: -33.86, lng: 151.20 }, timestamp: new Date(), similarity: 0.76 },
    { id: '3', text: 'A recurring dream where I can fly, but only a few feet off the ground. I was gliding through my old neighborhood park.', location: { city: 'Chicago', country: 'USA', lat: 41.87, lng: -87.62 }, timestamp: new Date(), similarity: 0.65 },
];


const AddDreamScreen: React.FC = () => {
    const [dreamText, setDreamText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    
    const handleAnalyze = useCallback(async () => {
        if (!dreamText.trim()) return;
        setIsLoading(true);
        setAnalysis(null);
        const result = await analyzeDreamWithAI(dreamText);
        setAnalysis(result);
        setIsLoading(false);
    }, [dreamText]);
    
    const reset = () => {
        setDreamText('');
        setAnalysis(null);
        setIsLoading(false);
    }

    if (isLoading) {
        return <Loader message="Analyzing your dream..." />;
    }
    
    if (analysis) {
        return (
            <div className="p-6 space-y-6 bg-gradient-to-b from-white to-[#A7E8E3]/20 min-h-full">
                <h2 className="text-2xl font-bold text-gray-800">Your Dream Analysis</h2>
                <div className="bg-white rounded-2xl p-4 shadow-md">
                    <h3 className="font-semibold text-gray-700 mb-2">Summary</h3>
                    <p className="text-sm text-gray-600">{analysis.summary}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white rounded-2xl p-4 shadow-md">
                        <h3 className="font-semibold text-gray-700 mb-2">Themes</h3>
                        <div className="flex flex-wrap gap-2">
                           {analysis.themes.map(t => <span key={t} className="text-xs bg-[#DCCCF6]/50 text-purple-800 px-2 py-1 rounded-full">{t}</span>)}
                        </div>
                    </div>
                     <div className="bg-white rounded-2xl p-4 shadow-md">
                        <h3 className="font-semibold text-gray-700 mb-2">Emotions</h3>
                        <div className="flex flex-wrap gap-2">
                           {analysis.emotions.map(e => <span key={e} className="text-xs bg-[#A7E8E3]/50 text-teal-800 px-2 py-1 rounded-full">{e}</span>)}
                        </div>
                    </div>
                </div>
                 <div className="bg-white rounded-2xl p-4 shadow-md">
                    <h3 className="font-semibold text-gray-700 mb-2">Key Symbols</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {analysis.symbols.map(s => <li key={s}>{s}</li>)}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Dream Matches</h3>
                    <div className="space-y-3">
                        {mockMatches.map(match => <DreamCard key={match.id} match={match} />)}
                    </div>
                    <button className="w-full bg-[#A7E8E3] text-teal-900 font-bold py-3 px-4 rounded-xl shadow-md hover:bg-[#96d8d3] transition">Join Global Chat Room</button>
                    <button onClick={reset} className="w-full text-gray-500 font-medium py-2">Record another dream</button>
                </div>
                <div className="h-20" />
            </div>
        );
    }

    return (
        <div className="p-6 flex flex-col h-full bg-gradient-to-b from-[#DCCCF6]/10 to-white">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Good morning,</h1>
            <p className="text-gray-500 mb-6">What did you dream about?</p>
            
            <textarea
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
                placeholder="Last night, I dreamt of a forest where the trees had leaves of glass..."
                className="w-full flex-grow bg-white border-2 border-gray-200 rounded-2xl p-4 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[#DCCCF6] focus:border-transparent transition resize-none"
            />
            
            <div className="py-6 flex items-center space-x-4 rtl:space-x-reverse">
                 <button 
                    onClick={() => setIsRecording(!isRecording)}
                    className={`p-4 rounded-full transition duration-300 ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-white text-gray-600 shadow-md'}`}>
                    <Icon name="Microphone" className="w-6 h-6" />
                </button>
                <button
                    onClick={handleAnalyze}
                    disabled={!dreamText.trim()}
                    className="flex-grow bg-[#A7E8E3] text-teal-900 font-bold py-4 px-6 rounded-xl shadow-md hover:bg-[#96d8d3] transition disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                    <span>Analyze Dream</span>
                    <Icon name="PaperAirplane" className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default AddDreamScreen;
