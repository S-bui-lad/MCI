import React from 'react';
import Header from '../components/Header';
import Banner from "../components/Banner";
import EventSection from '../components/EventSection';
import Album from '../components/Album';
import TrainingPrograms from '../components/TrainingPrograms';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function blogPage() {
    return (
        <div>
            <Header />
            <Banner />
            <EventSection />
            <Album />
            <TrainingPrograms />
            <Footer />
        </div>
    );
}

export default blogPage;
