import React, { useEffect, useState } from 'react'
import './Timeline.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import { Pagination } from "swiper";



const Timeline = () => {
 const [timeline, setTimeline] = useState([]);
 const [cosntructionsdata, setCosntructionsdata] = useState([]);
   
useEffect(() => {
            async function Timelines(){
                const timelinedata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
                const timelinedatas = await timelinedata.json();
                setTimeline(timelinedatas.acf);
                //console.log(timelinedatas.acf);    
            }
            Timelines();
            async function cosntructionss(){
                const constructiondata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/construction_status');
                const constructionpost = await constructiondata.json();
                setCosntructionsdata(constructionpost);
            }
      cosntructionss();
 },[])
  return (
    <>
    <section id='timeline'> 
        <div className='container'>
                    <div className='Construction-section'>
                        <h4> Construction Status  </h4>
                            <h3>Phases of Construction </h3>
                    </div>
                <div className='row time-main'>
                    <div className='col-lg-12'>
                        <div className='card'>
                            <div className='card-body'>             
                                <div className='hori-timeline' dir="ltr">
                                    <ul className='list-inline events'>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  "1024": {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  "768": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  "640": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  "568": {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  "200": {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}
                modules={[Pagination]}
                className='mySwiper'>

                                {cosntructionsdata.map((post, index) => ( 

                                <SwiperSlide key={index}> 
                                    <li className='list-inline-item event-list'>
                                        <div className='px-4'>
                                            <div className='event-img'>
                                            <img src={post.acf.featured_image}></img>
                                            </div>
                                                <div className='event-des'>
                                                <p className='text-muted'>{post.title.rendered}</p>   
                                                </div>
                                        </div>
                                    </li>
                                </SwiperSlide> 
                                 ))}
                              </Swiper>

                                    </ul>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>
        </div>
    </section>
  </>
    
  )
}

export default Timeline