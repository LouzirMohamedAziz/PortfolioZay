import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import About from "./about/About";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = localStorage.getItem('darkMode');

      if (detectedDarkMode !== null) {
         setDarkMode(JSON.parse(detectedDarkMode));
      } else {
         localStorage.setItem('darkMode', 'true');
      }
   }, []);


   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home />} />
                  <Route exact path={'/about'} element={<About />} />
                  <Route exact path={'/portfolio'} element={<Portfolio />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p>Created with &hearts; by <a href={'https://www.linkedin.com/in/mohamed-aziz-louzir-728952193/'}>Mohamed Aziz LOUZIR</a></p>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

