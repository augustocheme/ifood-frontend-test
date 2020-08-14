import React from 'react';
import { ShowcaseContainer, ShowcaseTitle } from './styles';
import { PlaylistInterface } from '../../interfaces/playlist.interface';

interface PlaylistShowcaseProps {
  playlists: PlaylistInterface[];
  message: string;
}

const PlaylistShowcase: React.FC<PlaylistShowcaseProps> = ({
  playlists,
  message,
}) => {
  return (
    <>
      <ShowcaseTitle>{message}</ShowcaseTitle>
      <ShowcaseContainer>
        {playlists.map(playlist => (
          <a
            href={playlist.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            key={playlist.id}
          >
            <img src={playlist.images[0].url} alt={playlist.name} />
          </a>
        ))}
      </ShowcaseContainer>
    </>
  );
};

export default PlaylistShowcase;