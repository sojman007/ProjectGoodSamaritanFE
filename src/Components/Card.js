import React from 'react';

function Card() {
    return(
        <section className='section section-lg pt-lg-0 mt--200'>
            <div className='cardContainer'>
                <div className='row justify-content-center'>
                    <div className='col-lg-12'>
                        <div className='row row-grid'>
                            <div className='col-lg-4'>
                                <div className='card card-lift--hover shadow border-0'>
                                    <div className='card-body py-5'>
                                        <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                                            <i class="fas fa-check"></i>
                                        </div>
                                        <h6 className='text-primary text-uppercase'>Secure & easy setup</h6>
                                        <ul className='description mt-3'>
                                            <li>Register with your Email, Username and Password.</li>
                                            <li>Input the description of your lost item or found item.</li>
                                            <li>Relax and watch us try to fulfil your wish.</li>
                                        </ul>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <p className='badge badge-pill badge-primary'>Thank you for trusting us</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='card card-lift--hover shadow border-0'>
                                    <div className='card-body py-5'>
                                        <div className='icon icon-shape icon-shape-success rounded-circle mb-4'>
                                            <i class="fas fa-check"></i>
                                        </div>
                                        <h6 className='text-success text-uppercase'>Secure & easy setup</h6>
                                        <ul className='description mt-3'>
                                            <li>Register with your Email, Username and Password.</li>
                                            <li>Input the description of your lost item or found item.</li>
                                            <li>Relax and watch us try to fulfil your wish.</li>
                                        </ul>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <p className='badge badge-pill badge-success'>Thank you for trusting us</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='card card-lift--hover shadow border-0'>
                                    <div className='card-body py-5'>
                                        <div className='icon icon-shape icon-shape-warning rounded-circle mb-4'>
                                            <i class="fas fa-check"></i>
                                        </div>
                                        <h6 className='text-warning text-uppercase'>Secure & easy setup</h6>
                                        <ul className='description mt-3'>
                                            <li>Register with your Email, Username and Password.</li>
                                            <li>Input the description of your lost item or found item.</li>
                                            <li>Relax and watch us try to fulfil your wish.</li>
                                        </ul>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <p className='badge badge-pill badge-warning'>Thank you for trusting us</p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Card;