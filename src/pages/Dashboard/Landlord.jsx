import * as React from 'react';

const LandlordDashboard = (props) => {
    return (
        <>
            <section className='card'>
                <div className="card-header">
                    <div className="card-header-title">
                        <span className='has-text-link is-size-5'>
                            Landlord - Summary
                    </span>
                    </div>
                </div>
                <div className="card-content">
                    <div class="columns">
                        <div class="column">
                            <p className='has-text-danger is-size-4'>Total Rent Collection</p>
                            <p className='has-text-grey is-size-2'><strong>11300 K.D</strong></p>
                        </div>
                        <div class="column">
                            <p className='has-text-danger is-size-4'>Total Units</p>
                            <p className='has-text-grey is-size-2'><strong>67</strong></p>
                        </div>
                        <div class="column">
                            <p className='has-text-danger is-size-4'>Expiring Contracts</p>
                            <p className='has-text-grey is-size-2'><strong>9</strong></p>
                        </div>
                        {/* <div class="column">
                            Fourth column
                        </div> */}
                    </div>
                </div>
            </section>
            <br />
            <br />
        </>
    )
}

export default LandlordDashboard;