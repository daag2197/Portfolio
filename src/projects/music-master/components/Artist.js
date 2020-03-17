import React from 'react';

const Artist = ({artist}) => {
    if (!artist) return null;

    const {images,name,genres,followers} = artist;

    return (
        <div>
            <h2>{name}</h2>
            <p>{followers.total} followers</p>
            <p>Genre {genres.join(',')}</p>
            <img 
                src = {images[0] && images[0].url} 
                alt = 'artist-profile'
                style = {{
                    width : 200,
                    height : 200,
                    borderRadius : 100,
                    objectFit: 'cover'
                }}
            />
            <hr/>
        </div>
    )
}

export default Artist;