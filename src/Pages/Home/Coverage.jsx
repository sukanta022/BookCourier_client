import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css' //must have to add this other wise show crack view in map
const Coverage = () => {
    const mapRef = useRef();
    const [bookCenter, setBookCenter] = useState([]);
    const position = [23.6850, 90.3563]
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('/BookStore.json');
            const data = await res.json();
            setBookCenter(data);
        };
        loadData();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.place.value;
        const district = bookCenter.find(c =>
            c.district.toLowerCase().includes(location.toLowerCase())
        );

        if (district && mapRef.current) {
            const coord = [district.latitude, district.longitude];
            mapRef.current.flyTo(coord, 13, { duration: 1.5 });
        }
    };

    return (
        <section className="bg-base-100 py-16 px-5 lg:px-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center ">

                {/* Left Content */}
                <div className="space-y-6 animate__animated animate__fadeInLeft">
                    <span className="badge badge-outline text-primary"> Nationwide Coverage</span>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        BookCourier is available <br /> <span className="text-primary">all over Bangladesh</span>
                    </h1>

                    <p className="text-gray-500">Search your nearest library branch and get books delivered from your closest center. Fast, reliable, and nationwide. </p>

                    
                    <form onSubmit={handleSearch} className="join w-full max-w-md shadow-md">
                        <input className="input input-bordered join-item w-full" name="place" type="text" placeholder="Search by district (e.g. Dhaka)" />

                        <button className="btn join-item bg-primary text-white">Find</button>
                    </form>

                    
                    <div className="grid grid-cols-3 gap-4 pt-6">
                        <div className="stat bg-base-200 rounded-xl">
                            <div className="stat-title">Branches</div>
                            <div className="stat-value text-primary">{bookCenter.length}</div>
                        </div>
                        <div className="stat bg-base-200 rounded-xl">
                            <div className="stat-title">Districts</div>
                            <div className="stat-value text-primary">64</div>
                        </div>
                        <div className="stat bg-base-200 rounded-xl">
                            <div className="stat-title">Coverage</div>
                            <div className="stat-value text-primary">
                                {((bookCenter.length / 64) * 100).toFixed(2)}%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Map */}
                <div className="w-full h-[350px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl border ">
                    <MapContainer center={position} zoom={7} scrollWheelZoom={false} className="w-full h-full" ref={mapRef}>
                        
                        <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        {bookCenter.map((center, index) => (
                            <Marker key={index} position={[center.latitude, center.longitude]}>
                                <Popup>
                                    <strong>{center.city}</strong> <br />
                                    District: {center.district} <br />
                                    Service: {center.covered_area.join(', ')}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </section>
    );
};

export default Coverage;
