import React, { useState } from 'react'; // Assurez-vous d'importer useState
import './Checkout.css'; // Si vous avez des styles
import { useNavigate } from 'react-router-dom';


const Checkout = ({ onClearCart }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) {
            alert("Veuillez remplir tous les champs.");
            return;
        }
        // Logique de paiement ici
        onClearCart();
        navigate('/confirmation', { state: { name } });
    };

    return (
        <div className="checkout">
            <h2>Paiement</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Confirmer l'achat</button>
            </form>
        </div>
    );
};

export default Checkout; // Assurez-vous d'ajouter cette ligne
