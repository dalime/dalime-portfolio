import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Components
import LifeItem, { ILifeItem } from './LifeItem';
import { Subheading } from '../../../components';

// Assets
import MuayThaiImg from '../../../assets/images/personal/muay-thai.jpeg';
import TravelImg from '../../../assets/images/personal/travel.jpeg';
import BitcoinImg from '../../../assets/images/personal/bitcoin.jpg';

function PersonalLife() {
  // Hooks
  const isTablet = useMediaQuery({ maxWidth: 768 });

  const lifeItems: ILifeItem[] = [
    {
      title: 'Muay Thai',
      description: 'My main hobby is Muay Thai. I have been practicing for 6 years consistently now and competed two times in Thailand. Outside of work, you can find me enjoying pushing my body to its physical limits with this grueling but fulfilling sport.',
      bulletPoints: ['Muay Thai transcends just fighting; it improves mental clarity and focus.', 'Muay Thai allows me to stay fit year-round, which helps me stay clear of illnesses and physical ailments.', 'Muay Thai gives me a mental edge. I face fear on a regular basis, which helps me lead more courageously in my business engagements.'],
      imgSrc: MuayThaiImg,
      alignment: 'left',
    },
    {
      title: 'Travel',
      description: 'I love traveling and exploring new places. I have been to over 30 countries (and counting) and lived in 3 continents and 4 countries. Travel is great for mental flexibility and creating new neural pathways.',
      bulletPoints: [`I've been location independent since 2018, which has given me the freedom to live in diverse locations.`, 'I like to take away something from everywhere I visit, adding to my new global culture.', 'I have a very valuable and diverse network all around the world that I can draw from.'],
      imgSrc: TravelImg,
      alignment: 'right',
    },
    {
      title: 'Bitcoin',
      description: 'I am a passionate Bitcoin enthusiast. I have been investing in Bitcoin for more than 7 years and worked in the space. Bitcoin for me is freedom, beyond just monetary gains.',
      bulletPoints: ['Bitcoin is a hedge against inflation from fiat currencies.', 'Bitcoin is a store of value that can be used for anything you want.', 'Bitcoin is a way to create a more equitable society because it provides payment options for many who cannot afford traditional payment methods.'],
      imgSrc: BitcoinImg,
      alignment: 'left',
    }
  ];

  return (
    <div>
      <Subheading sx={isTablet ? { fontSize: 30 } : {}}>Danny's Personal Interests</Subheading>
      {lifeItems.map((lifeItem, index) => (
        <LifeItem key={`life-item-${index}`} {...lifeItem} />
      ))}
    </div>
  );
}

export default PersonalLife;