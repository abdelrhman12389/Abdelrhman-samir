
import React from 'react';
import { DreamMatch } from '../types';
import Icon from './Icon';

interface DreamCardProps {
    match: DreamMatch;
}

const DreamCard: React.FC<DreamCardProps> = ({ match }) => {
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200/50 flex flex-col space-y-2">
            <p className="text-sm text-gray-700 italic">"{match.text.substring(0, 100)}..."</p>
            <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Icon name="Location" className="w-4 h-4" />
                    <span>{match.location.city}, {match.location.country}</span>
                </div>
                <span className="font-semibold text-[#A7E8E3]">{Math.round(match.similarity * 100)}% Match</span>
            </div>
        </div>
    );
};

export default DreamCard;
