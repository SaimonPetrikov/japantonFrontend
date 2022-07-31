import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {motion, useReducedMotion} from 'framer-motion';

import firstLevelMenu from '../../assets/helpers';
import { ReactComponent as ArrowIcon } from '../../assets/icons/Menu/Menu.icons/arrow.svg';

import {
  CategoryStyled,
  FirstLvlItemStyled,
  FirstLvlMenuIconStyled,
  FirstLvlStyled,
  MenuStyled, SecondLvlCategoryStyled,
  SecondLvlStyled
} from './Menu.styles';

export const Menu = () => {
  const router = useNavigate();
  const [active, setActive] = useState(0);
  const [activeSecondLvl, setActiveSecondLvl] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    visible: {
      marginBottom: 0,
      transition: shouldReduceMotion ? {} : {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: { marginBottom: 0 }
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 35
    },
    hidden: { opacity: shouldReduceMotion ? 1 : 0, height: 0 }
  };

  const openSecondLevel = m => {
    setActive(m.id);
    if (m.id === active) setIsOpen(!isOpen);
    else setIsOpen(true);
  };

  const openSecondLevelItem = e => {
    setActiveSecondLvl(e.id);
    router(e.route);
  };

  const buildSecondLevel = m => {
    return (
      m.secondLvl.map(e => (
        <motion.li key={e.route} variants={variantsChildren}>
          <SecondLvlStyled
            textColor={e.id === activeSecondLvl ? '#459ED8' : 'black'}
            onClick={() => openSecondLevelItem(e)}
          >
            {e.icon}
            {e.name}
          </SecondLvlStyled>
        </motion.li>
      ))
    );
  };

  const buildFirstLevel = () => {
    return (
      <MenuStyled>
        <CategoryStyled>
          {firstLevelMenu.map(m => (
            <li key={m.id}>
              <FirstLvlStyled
                shouldHover={m.id !== active}
                backgroundColor={m.id === active ? '#409DDA' : 'white'}
                textColor={m.id === active ? 'white' : 'black'}
                onClick={() => openSecondLevel(m)}
              >
                <FirstLvlItemStyled>
                  <FirstLvlMenuIconStyled>
                    {m.icon}
                  </FirstLvlMenuIconStyled>
                  <span>{m.name}</span>
                </FirstLvlItemStyled>
                <ArrowIcon />
              </FirstLvlStyled>
              <SecondLvlCategoryStyled
                layout
                variants={variants}
                initial={'hidden'}
                animate={isOpen ? 'visible' : 'hidden'}
              >
                {m.id === active && buildSecondLevel(m)}
              </SecondLvlCategoryStyled>
            </li>
          ))}
        </CategoryStyled>
      </MenuStyled>
    );
  };

  return (
    <>
      {buildFirstLevel()}
    </>
  );
};
