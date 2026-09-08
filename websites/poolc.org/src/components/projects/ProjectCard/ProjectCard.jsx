import { MENU } from '../../../constants/menus';
import getImageVariantUrl from '../../../lib/utils/getImageVariantUrl';
import {
  Card,
  ProjectCardBlock,
  ProjectDescription,
  ProjectGenre,
  ProjectThumbnail,
  ProjectTitle,
  ProjectTrack,
  StyledLink,
  TextContent,
  ThumbnailContainer,
} from './ProjectCard.styles';

const splitProjectName = (name) => {
  const match = name?.match(/^\[([^\]]+)\]\s*(.+)$/);

  if (!match) {
    return { title: name, track: null };
  }

  return {
    title: match[2],
    track: match[1],
  };
};

const getProjectPlaceholder = (id) => `https://picsum.photos/seed/poolc-project-${id}/480/270`;

const getProjectThumbnail = ({ id, thumbnailURL }) => {
  if (!thumbnailURL) {
    return getProjectPlaceholder(id);
  }

  return getImageVariantUrl(thumbnailURL, 'CARD');
};

const ProjectCard = ({ project, variant = 'default' }) => {
  const { id, thumbnailURL, name, genre, description } = project;
  const { title, track } = splitProjectName(name);

  return (
    <StyledLink to={`/${MENU.PROJECT}/${id}`}>
      <ProjectCardBlock data-variant={variant}>
        <Card data-variant={variant}>
          <ThumbnailContainer>
            <ProjectThumbnail
              src={getProjectThumbnail({ id, thumbnailURL })}
              alt={title}
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = getProjectPlaceholder(id);
              }}
            />
          </ThumbnailContainer>
          <TextContent>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectGenre>
              {track && <ProjectTrack>{track}</ProjectTrack>}
              <span>{genre}</span>
            </ProjectGenre>
            <ProjectDescription>{description}</ProjectDescription>
          </TextContent>
        </Card>
      </ProjectCardBlock>
    </StyledLink>
  );
};

export default ProjectCard;
