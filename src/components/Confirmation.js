import React from 'react';

const Confirmation = ({ name }) => {
    return (
        <div className="confirmation">
            <h2>Merci pour votre achat, {name} !</h2>
            <p>Nous espérons que vous apprécierez vos articles. Votre commande sera traitée sous peu.</p>
        </div>
    );
};

export default Confirmation;
