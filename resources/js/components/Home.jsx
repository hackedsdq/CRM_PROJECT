import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
function Home({name}) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Hello {name}</div>
                        <div className="card-body"> <InertiaLink href='/contact'>Contact</InertiaLink></div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
