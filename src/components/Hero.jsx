import React, { useEffect, useState } from 'react'
import { HeroWrapper, HeroImage, HeroText, HeroSubtitle, HeroTitle } from '../constants/Styles/Hero'
import { fetchRandomHeroRecipe } from '../utils/fetchData'

const Hero = () => {
  const [recipeData, setRecipeData] = useState()

  const getRandomHeroRecipe = async() => {
   const data = await fetchRandomHeroRecipe()
   localStorage.setItem('heroData', JSON.stringify(data));
    }
    useEffect(() => {
    const heroDataFromLocalStorage = localStorage.getItem('heroData');
    // console.log(heroDataFromLocalStorage)
    if (!heroDataFromLocalStorage) {
      // If data doesn't exist, fetch and store immediately
      getRandomHeroRecipe();
    } else {
      // If data exists, set it in the state
      setRecipeData(JSON.parse(heroDataFromLocalStorage));
      // console.log(recipeData.image)
    }
  }, [])

  const interval = setInterval(() => {
    getRandomHeroRecipe();
  }, 5 * 60 * 60 * 1000); 
  
  const firstRefine = (text) => { 
    return text.replace(/'/g, '');
   }
  const secondRefine = (text) => { 
    return text.length > 500 ? `${text.substr(0, 500)}...` : text;
   }

   const refinedSubText = firstRefine(recipeData.summary);
  const subText = secondRefine(refinedSubText);

  return (
    <HeroWrapper>
      <HeroImage>
        <img src={recipeData.image} />
      </HeroImage>
      <HeroText>
        <HeroTitle>{recipeData.title}</HeroTitle>
        <HeroSubtitle dangerouslySetInnerHTML={{ __html: subText }}>

        </HeroSubtitle>
      </HeroText>
      
    </HeroWrapper>
  )
}

export default Hero