import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
    <div className='footerArea'>
        <Container>
            <Row>
                <Col lg={7}>
                    <Row>
                        <Col>
                            <div className="team_members footer-widget">
                                <h2>আমাদের টিমের সদস্যরা</h2>
                                <div className="teammates_images">
                                    <img src="https://i.ibb.co/K6cR41y/IMG-20200510-010716-674.jpg" alt="" />
                                    <img src="https://i.postimg.cc/K8XgqmtH/274989892-493596848843608-6440486483695449741-n.jpg" alt="" />
                                    <img src="https://i.postimg.cc/yxQygt5z/FF978109-584-C-40-B6-9058-547589-EFA592-1-201-a.jpg" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                তালিকা
                                </h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                সংবাদ
                                </h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                ভিডিও
                                </h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                পাঠ্যধারা
                                </h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5}>
                    <Row>
                        <Col>
                           <div className="footer-download-app">
                            <Link to={"/"}  className='app_download'>Download App</Link>
                                <span>হটলাইন: +৮৮০১৫৩৩৫১৫</span>
                                <span>ইমেইল : plantbagan@email.com</span>
                           </div>
                        </Col>
                        <Col>
                            <div className="footer_contact">
                                <input type="email" placeholder='Type your email' />
                                <input type="submit" value={`submit`} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <div className="footer_bottom">
                    <Container>
                        <Row>
                            <span>Powered By Divlap Soft</span>
                        </Row>
                    </Container>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Footer