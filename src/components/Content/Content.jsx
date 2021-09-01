import './Content.css';
import React from 'react';

const Content = () => {
    return (
        <main>
            <div className="card-container left-card">
                <h3 className="title">Science Magazine</h3>
                <p className="date"> 17.11.2017.</p>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <a href="#">Read More</a>
            </div>

            <div className="card-container mid-card">
                <h3 className="title">Nature</h3>
                <p className="date">11.12.2019.</p>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <a href="#">Read More</a>
            </div>

            <div className="card-container right-card">
                <h3 className="title">Lecture at NYU</h3>
                <video src=""></video>
                <a href="#">Watch</a>
            </div>
        </main>
    )
}

export default Content;
