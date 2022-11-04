import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import PageTitle from './static_components/PageTitle'
import DndBoard from './static_components/DndBoard'
import { ChakraProvider } from '@chakra-ui/react';
import theme from './dnd_board_resources/config/theme';

export default function Opportunities() {

  let title = "Opportunités"

  //const [open,setOpen]=useState(false);


  useEffect(()=>{
    var loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(tag);
      }
    loadScript('./assets/js/vendor.min.js')
},[])



  return (
    <div className='wrapper' >
        <SideBar />
        <Header />
        
        <div className="content-page">
          <div className="content">
            {/* Start Content*/}
            <div className="container-fluid">
              {/* start page title */}
              <PageTitle title={title} />
              {/* end page title */} 
              {/* ------------------------ drag and drop board ------------------ */}
              <ChakraProvider  resetCSS={false} theme={theme} >
                  <DndBoard />
              </ChakraProvider>
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div>

    </div>
  )
}




