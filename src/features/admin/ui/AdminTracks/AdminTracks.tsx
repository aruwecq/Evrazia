import React, { useState } from 'react';

export const AdminTracks = () => {
    const [tracks, setTracks] = useState([
        { id: '1', name: 'трасса', length: '1,650 м', status: 'OPEN' },
        { id: '1A', name: 'трасса', length: '175 м', status: 'CLOSE' },
    ]);

    const toggleStatus = (id: string) => {
        setTracks(prev => prev.map(t => t.id === id ? { ...t, status: t.status === 'OPEN' ? 'CLOSE' : 'OPEN' } : t));
    };

    return (
        <div className="p-8 space-y-6">
            <h1 className="text-xl font-black uppercase italic text-gray-800">Статус Трасс</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tracks.map(track => (
                    <div key={track.id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center font-black text-blue-500">{track.id}</div>
                            <div>
                                <p className="text-xs font-black uppercase text-gray-400 leading-none">{track.name}</p>
                                <p className="text-sm font-bold">{track.length}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => toggleStatus(track.id)}
                            className={`px-4 py-2 rounded-xl font-black text-[10px] uppercase transition-all ${track.status === 'OPEN' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                }`}
                        >
                            {track.status}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};