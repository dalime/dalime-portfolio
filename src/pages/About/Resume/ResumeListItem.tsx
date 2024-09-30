import React from 'react';
import { Paper, List, ListItem, ListItemText, ListItemIcon, Slider, Link } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { styled } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

// Types
import { ResumeItem } from '../../../types';

// Helpers
import { navigateToUrl } from '../../../helpers';

// Components
import { H3, H4 } from '../../../components';

// Styles
import { ResumeItemWrapper, FlexColumn } from './index.style';

interface Props {
  item: ResumeItem;
}

function ResumeListItem({ item }: Props) {
  // Hooks
  const isMedScreen = useMediaQuery({ maxWidth: 1180 });
  // const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });

  // Constants
  const { company, position, startDate, endDate, highlights, imgSrc, url } = item;

  // Custom Styles
  const CustomSlider = styled(Slider)({
    '& .MuiSlider-thumb': {
      height: 70,
      width: 70,
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#0e0e0e',
      border: '1px solid #64b5f6', 
      cursor: 'pointer'
    },
  });

  return (
      <ResumeItemWrapper style={{ width: 'calc(80% - 6rem)', margin: '3rem' }}>
        <FlexColumn style={{ width: '20%', alignItems: 'center', marginRight: isMedScreen ? 10 : 0 }}>
          <H4>{startDate} - {endDate}</H4>
          <CustomSlider
            sx={{
              '& input[type="range"]': {
                WebkitAppearance: 'slider-vertical',
              },
            }}
            componentsProps={{
              thumb: {
                onClick: () => navigateToUrl(url),
              }
            }}
            style={{ height: 'calc(100% - 20px)', minHeight: 270, marginTop: 40, cursor: 'default' }}
            orientation='vertical'
            defaultValue={100}
            step={null}
            size="small"
          />
        </FlexColumn>
        <FlexColumn style={{ width: '80%' }}>
        <Paper elevation={1} style={{ padding: '2rem', width: '100%' }}>
          <Link href={url} target="_blank" style={{ textDecoration: 'none' }}>
            <H3>{company}</H3>
          </Link>
          <H4>{position}</H4>         
          <List>
            {highlights.map((highlight, index) => (
              <ListItem key={`resume-item-${index}`}>
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
                <ListItemText primary={highlight} />
              </ListItem>
            ))}
          </List>
        </Paper>
        </FlexColumn>
      </ResumeItemWrapper>
  );
}

export default ResumeListItem;