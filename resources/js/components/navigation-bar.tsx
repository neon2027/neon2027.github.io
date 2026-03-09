import React from 'react';

export default function NavigationBar() {
    return (
        <React.Fragment>
            <div
                className={
                    'flex items-center justify-between bg-gray-800 p-4 text-white'
                }
            >
                <div className={'text-lg font-bold flex items-center gap-3'}>
                    <div className={'w-8 h-8 bg-white rounded-full mb-1 flex items-center justify-center text-black font-bold'}>
                        E
                    </div>
                    <div>
                        <p>Exequiel Lustan</p>
                        <p className={'text-xs'}>Web Developer</p>
                    </div>
                </div>
                <nav>
                    <ul
                        className={
                            'flex space-x-4 *:border-2 *:border-white *:px-3 *:py-1.5 *:outline-2 *:outline-offset-1'
                        }
                    >
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
}
