import React, { useEffect, useState } from 'react';
import './Explore.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Walls from './Walls'
import Flooring from './Flooring';
import Sanitary from './Sanitary';
import Work from './Work';
import Doors from './Doors';
import Others from './Others ';
import Amtimg1 from '../Components/images/outdoore.png'

const Explore = () => {

        const [exploredata, SetExploredata] = useState([]);
        const [explorecategory, setExplorecategory] = useState([]);
        const [explorecharges, setExplorecharges] = useState([]);
        const [depositedatas, setDepositedatas] = useState([]);
        const [amenity, setAmenity] = useState([]);

        useEffect(() => {
            async function explorecontent(){

                const response = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
                const responsedata = await response.json();
                SetExploredata(responsedata.acf);
                setExplorecategory(responsedata.acf.table_categories);
                setExplorecharges(responsedata.acf.charge);
                setDepositedatas(responsedata.acf.deposite);
              
            }
            //console.log(explorecategory);
            //console.log(depositedatas);
            explorecontent();

            async function amenities(){
              const amenitiesdata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/building_amenities/');
              const amenitiesres = await amenitiesdata.json();
              setAmenity(amenitiesres);
             // console.log(amenitiesres);

            }
            amenities();




        },[])




  return (
    <div>        
        <section id='AmenitiesDetails'>
            <div className='container'>
            <div className='explor-section'>
                <h3>{exploredata.explore_title}</h3>
                <p>{exploredata.explore_content}</p>
            </div>
            <div className='Ament-mian'>
                    {amenity.map((post, index) => (
                        <div className='At-item1' key={index}>
                              <div className='Atimg'>
                                <img src={post.acf.feature_images} alt={post.title.rendered}></img>
                              </div>                   
                              <div className='Ament-title'>
                                  <h5>{post.title.rendered}</h5>
                              </div>
                        </div>
                    ))}
             </div>            
        </div>
        </section >

        <section id='Specifications'>
            <div className='container'>
               {/* <h3>{exploredata.payment_plan_title}</h3>  */}
               <h3>Specifications</h3>       
               <h3>{exploredata.specification_title}</h3>
               <div className='specifictab'>
               <Tab.Container id='left-tabs-example' defaultactivekey="first">
                <Row g-0="true">
                    <Col sm={3}>
                    <Nav variant="pills" className='flex-column'>
                        <Nav.Item>
                        <Nav.Link eventKey="first"> Walls & Ceiling</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second"> Flooring/Tiling </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">  Sanitary & CP Fittings </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fourth">  M&E Works  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fivth"> Others</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="six"> Doors & Windows  </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Walls />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Flooring />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Sanitary />
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                        <Work />
                        </Tab.Pane>
                        <Tab.Pane eventKey="fivth">
                        <Others />
                        </Tab.Pane>
                        <Tab.Pane eventKey="six">
                        <Doors />
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </div>
            </div>
        </section>

        <section id='Payment-sec'>
            <div className='container'>
               <div className='Payment-main'>
                 <h3>{exploredata.payment_plan_title}</h3>

                  <div className='extra-ct'>
                  <table className='table table-extra'>
                        <thead>
                            <tr>
                              <th scope="col">{exploredata.extra_charge_2}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>{exploredata.extra_charge_2}</td>
                            </tr>  
                            <tr>
                              <td>{exploredata.extra_charge_2}</td>
                            </tr>  
                        </tbody>
                   </table>
                   <table className='table table-extra table-bordered table-striped categry-tble'>
                        <thead>
                            <tr>
                              <th scope="col">{exploredata.category_title} </th>
                              <th scope="col">{exploredata.charge_title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>1</span>{explorecategory.line_1} </td>  
                              <td>{explorecharges.charge_1}</td>
                            </tr>  
                            <tr>
                              <td><span>2</span>{explorecategory.line_2}</td>
                        <td>{explorecharges.charge_2}</td>
                            </tr>  
                            <tr>
                               <td><span>3</span>{explorecategory.line_3}</td> 
                              <td>{explorecharges.charge_3}</td> 
                            </tr> 

                            <tr>
                              <td><span>4</span>{explorecategory.line_4}</td> 
                             <td>{explorecharges.charge_4}</td> 
                            </tr> 
                        </tbody>
                   </table>

                   <div className='Deposit'>
                   <table className='table table-extra table-bordered table-striped  categry-tble Deposittable'>
                        <thead>
                            <tr>
                              <th colSpan={2}> 
                              {exploredata.deposit_title}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td><span>1</span>{depositedatas.left_site_content_1}</td>
                              <td>{depositedatas.Reft_site_content_1}</td>
                            </tr>                            
                        </tbody>
                     </table>
                   
                   </div>
                 </div>
               </div>
            </div>
        </section>
    </div>
  )
}

export default Explore;