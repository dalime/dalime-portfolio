import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';

// Components
import { H3 } from '../../../components';

// CSS
import './personal.css';

export interface ILifeItem {
  title: string;
  imgSrc: string;
  description: string;
  bulletPoints: string[];
  alignment: 'left' | 'right';
}

function LifeItem({ title, imgSrc, description, bulletPoints, alignment }: ILifeItem) {
  const isMobile = useMediaQuery({ maxWidth: 460 });
  const isSmallTablet = useMediaQuery({ maxWidth: 560 });
  const isTablet = useMediaQuery({ maxWidth: 768 });

  const TextElement = (
    <div className="life-item-text">
      <H3 style={{ marginBottom: 10, color: '#64b5f6' }}>{title}</H3>
      <Typography variant="body1" component="p">{description}</Typography>
      <List>
        {bulletPoints.map((bulletPoint, index) => (
          <ListItem key={`resume-item-${index}`} style={isMobile ? { padding: 0, alignItems: 'flex-start' } : {}}>
            <ListItemIcon style={isSmallTablet ? { minWidth: 30, marginLeft: 0, paddingLeft: 0, marginTop: isMobile ? 4 : 'auto' } : {}}>
              <KeyboardArrowRight />
            </ListItemIcon>
            <ListItemText primary={bulletPoint} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const ImgElement = (
    <img
      src={imgSrc}
      alt={title}
      width={400}
      height={400}
      className="life-item-img"
      style={isTablet ? { marginBottom: '2rem' } : alignment === 'left' ? { marginRight: isMobile ? 0 : '2rem' } : { marginLeft: isMobile ? 0 : '2rem' }}
    />
  );

  return (
    <Paper className="life-item">
      <Box className="life-item-box">
        {alignment === 'left' || isTablet ? (
          <>
            {ImgElement}
            {TextElement}
          </>
        ) : (
          <>
            {TextElement}
            {ImgElement}
          </>
        )}
      </Box>
    </Paper>
  );
}

export default LifeItem;