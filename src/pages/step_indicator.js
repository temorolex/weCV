import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export const Stepindicator = () => {
    const steps = [
        {
            path: "/step1"
        },
        {
            path: "/step2"
        },
        {
            path: "/step3"
        },
        {
            path: "/step4"
        },
        {
            path: "/step5"
        }
    ]

    const handlestop = (e) => {
        e.preventDefault();

    };
    return <div className='step'><div className='stepIndicator'>
        {
            steps.map((step, index) => {
                return (
                    <>
                        <NavLink onClick={handlestop} activeClassName="activeLink" key={index} to={step.path}>{index + 1}</NavLink>
                        <hr />
                    </>
                );
            })
        }
    </div ></div>;
};
