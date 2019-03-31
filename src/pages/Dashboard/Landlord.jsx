import * as React from 'react';

const LandlordDashboard = (props) => {
    return (
        <>  
            <p>Landlord dashboard</p>
            <section className='card'>
                <div className="card-header">
                    <div className="card-header-title">
                        <span className='has-text-link is-size-5'>
                            Upcoming Payments
                    </span>
                    </div>
                </div>
                <div className="card-content">
                    <p className='has-text-danger is-size-4'>Monthly Rent</p>
                    <p className='has-text-grey is-size-2'><strong>300 K.D</strong></p>
                </div>
            </section>
            <br/>
            <br/>
            <section className='card'>
                <div className="card-header">
                    <div className="card-header-title">
                        <span className='has-text-link is-size-5'>
                            Previous Transactions
                    </span>
                    </div>
                </div>
                <div className="card-content">
                    <table className="table is-striped is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>For</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>23 September</td>
                                <td>Monthly Rental</td>
                                <td>300 KD</td>
                                <td className='has-text-success'>COMPLETED</td>
                            </tr>
                            <tr>
                                <td>23 October</td>
                                <td>Monthly Rental</td>
                                <td>300 KD</td>
                                <td className='has-text-danger'>Cancelled</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default LandlordDashboard;