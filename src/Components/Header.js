import React from 'react';

// This creates the header of the page and gets the about data from app.js
function Header(props) {
    return (
        <div>
            {/* nav section */}
            <nav>
                <a href='#home' id="ritname">RIT iSchool</a>
                <div>
                    <a href='#about'>about</a>
                    <a href='#degrees'>degrees</a>
                    <a href='#minors'>minors</a>
                    <a href='#employment'>employment</a>
                    <a href='#people'>people</a>
                </div>
            </nav>

            {/* header section */}
            <header id='home'>
                <h1>School of Information Technology</h1>
            </header>

            {/* about section */}
            <section id='about'>
                <h2 className='extraSpace'>{props.about.title}</h2>
                <p>{props.about.description}</p>
                <div className='quoteBubble'>
                    <p>"{props.about.quote}"</p>
                    <p>--{props.about.quoteAuthor}</p>
                </div>
            </section>
        </div>
        
    );
}

export default Header;