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
import { H3, H4, H5 } from '../../../components';

// Styles
import { ResumeItemWrapper, FlexColumn, FlexRow } from './index.style';

interface Props {
  item: ResumeItem;
}

function ResumeListItem({ item }: Props) {
  // Hooks
  const isMedMobile = useMediaQuery({ maxWidth: 450 });
  const isMobile = useMediaQuery({ maxWidth: 460 });
  const isSmallTablet = useMediaQuery({ maxWidth: 560 });
  const isMedTablet = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 900 });
  const isSmallScreen = useMediaQuery({ maxWidth: 1000 });
  const isMedScreen = useMediaQuery({ maxWidth: 1180 });
  const isLargeScreen = useMediaQuery({ maxWidth: 1300 });
  const isXlScreen = useMediaQuery({ minWidth: 1686 });
  // const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });

  // Constants
  const { company, position, startDate, endDate, highlights, imgSrc, url, large, small } = item;

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
      <ResumeItemWrapper style={{ width: isMedTablet ? 'calc(100% - 2rem)' : isTablet ? 'calc(100% - 3rem)' : isSmallScreen ? 'calc(100% - 4rem)' : isLargeScreen ? 'calc(90% - 4rem)' : 'calc(80% - 6rem)', margin: isMedTablet ? '1rem' : isTablet ? '1.5rem' : isSmallScreen || isLargeScreen ? '2rem' : '3rem' }}>
        {!isMedTablet && !isSmallTablet && (
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
              style={{ height: 'calc(100% - 20px)', minHeight: large ? isXlScreen ?  460 : 540 : small ? 220 : 270, marginTop: 40, cursor: 'default' }}
              orientation='vertical'
              defaultValue={100}
              step={null}
              size="small"
            />
          </FlexColumn>
        )}
        <FlexColumn style={{ width: isMedTablet ? '100%' : '80%' }}>
          <Paper elevation={1} style={{ padding: isMedMobile ? '1rem' : '2rem', width: '100%' }}>
            {isSmallTablet ? (
              <FlexRow>
                <FlexColumn>
                  {isMedMobile && (
                    <img src={imgSrc} alt={`${company} logo`} width={40} height={40} style={{ borderRadius: '50%', border: '1px solid #64b5f6', marginTop: 5, marginBottom: 16 }} />
                  )}
                  <Link href={url} target="_blank" style={{ textDecoration: 'none' }}>
                    <H3 style={{ marginBottom: 10 }}>{company}</H3>
                  </Link>
                  <H5 style={{ marginBottom: 10 }}>{startDate} - {endDate}</H5> 
                  <H4>{position}</H4>     
                </FlexColumn>
                {!isMedMobile && (
                  <FlexColumn style={{ alignItems: 'flex-end' }}>
                    <img src={imgSrc} alt={`${company} logo`} width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} style={{ borderRadius: '50%', border: '1px solid #64b5f6', marginTop: 5 }} />
                  </FlexColumn>
                )}
              </FlexRow> 
            ) : isMedScreen ? (
              <FlexRow>
                <FlexColumn>
                  <Link href={url} target="_blank" style={{ textDecoration: 'none' }}>
                    <H3>{company}</H3>
                  </Link>
                  <H4>{position}</H4>      
                </FlexColumn>
                <FlexColumn style={{ alignItems: 'flex-end' }}>
                  <H5>{startDate} - {endDate}</H5>
                  <img src={imgSrc} alt={`${company} logo`} width={50} height={50} style={{ borderRadius: '50%', border: '1px solid #64b5f6', marginTop: 5 }} />
                </FlexColumn>
              </FlexRow>  
            ) : (
              <>
                <Link href={url} target="_blank" style={{ textDecoration: 'none' }}>
                  <H3>{company}</H3>
                </Link>
                <H4>{position}</H4> 
              </>
            )} 
            <List>
              {highlights.map((highlight, index) => (
                <ListItem key={`resume-item-${index}`} style={isMobile ? { padding: 0, alignItems: 'flex-start' } : {}}>
                  <ListItemIcon style={isSmallTablet ? { minWidth: 30, marginLeft: 0, paddingLeft: 0, marginTop: isMobile ? 4 : 'auto' } : {}}>
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