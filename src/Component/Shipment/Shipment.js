import React from 'react';

const Shipment = (props) => {
    const {count} = props;
    return (
        <div>
            <h1>This is a shipment: {count + 10}</h1>
        </div>
    );
};

export default Shipment;