'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

export default function TableActivities() {
    const [activities, setActivities] = useState([]); // Data asli
    const [filteredActivities, setFilteredActivities] = useState([]); // Data yang difilter
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(''); // State untuk search input

    const fetchActivities = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('No token');
                setLoading(false);
                return;
            }

            const res = await axios.get('http://localhost:5000/kegiatanmahasiswa', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res) {
                setActivities(res.data.data);
                setFilteredActivities(res.data.data); // Set data ke state filtered juga
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    // Menghandle pencarian
    useEffect(() => {
        const result  = activities.filter((kegiatan : any) =>
            kegiatan.nama_kegiatan.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredActivities(result);
    }, [search, activities]);

    const columns : any = [
        {
            name: '#',
            selector: (row : any, index : number) => index + 1,
            center: true,
            width: '70px',
        },
        {
            name: 'Nama Kegiatan',
            selector: (row : any) => row.nama_kegiatan,
            sortable: true,
            wrap: true,
            center: false,
        },
        {
            name: 'Kategori',
            selector: (row : any) => row.kategori,
            sortable: true,
            center: true,
        },
    ];

    return (
        <div className="mt-4 p-4  text-white rounded-lg shadow-lg">
            {loading ? (
                <p className="text-center text-gray-500">Mohon tunggu sebentar...</p>
            ) : (
                <>
                    {/* Search Bar */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Cari nama kegiatan..."
                            className="p-2 w-full border border-gray-700 rounded bg-gray-800 text-white"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* DataTable */}
                    <DataTable
                        columns={columns}
                        data={filteredActivities} // Gunakan data yang telah difilter
                        pagination
                        highlightOnHover
                        responsive
                        
                        customStyles={{
                            
                            header: {
                                style: {
                                    backgroundColor: '#2c3e50',
                                    color: 'white',
                                },
                            },
                            headCells: {
                                style: {
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    backgroundColor: '#34495e',
                                },
                            },
                            rows: {
                                style: {
                                    '&:hover': {
                                        backgroundColor: '#1abc9c',
                                    },
                                },
                            },
                        }}
                    />
                </>
            )}
        </div>
    );
}
