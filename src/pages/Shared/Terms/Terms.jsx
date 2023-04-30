import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus praesentium hic quod, officiis consectetur perferendis nemo quibusdam debitis? Enim ullam, architecto cupiditate culpa sit provident fugiat similique repudiandae animi sint?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;