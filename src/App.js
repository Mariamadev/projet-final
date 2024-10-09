import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';

const products = [
    // Abayas
    {
        id: 1,
        name: 'Abaya Élégante',
        price: '30,000',
        image: 'https://i.etsystatic.com/45348328/r/il/095858/5450702922/il_1140xN.5450702922_34is.jpg',
        description: 'Une abaya élégante pour toutes les occasions.',
    },
    {
        id: 2,
        name: 'Abaya Chic',
        price: '32,000',
        image: 'https://example.com/abaya-chic.jpg',
        description: 'Une abaya chic pour les événements spéciaux.',
    },
    // Voiles
    {
        id: 3,
        name: 'Voile en Soie',
        price: '10,000',
        image: 'https://cdn.pixabay.com/photo/2024/08/11/13/14/background-8961390_640.png',
        description: 'Un voile en soie léger et confortable.',
    },
    {
        id: 4,
        name: 'Voile Classique',
        price: '12,000',
        image: 'https://example.com/voile-classique.jpg',
        description: 'Un voile classique pour toutes les tenues.',
    },
    // Accessoires
    {
        id: 5,
        name: 'Accessoire de Mode',
        price: '5,000',
        image: 'https://media.istockphoto.com/id/1038025906/fr/photo/bracelet-dargent-ou-de-platine-diamant-ou-bracelet.jpg?s=612x612&w=0&k=20&c=z7XFUgW7C7B3zc4n5DqUajQu6E8XKjP3EfEbumd30E4=',
        description: 'Ajoutez une touche spéciale à votre tenue.',
    },
    {
        id: 6,
        name: 'Écharpe en Laine',
        price: '15,000',
        image: 'https://example.com/echarpe-ligne.jpg',
        description: 'Une écharpe chaude et stylée pour l’hiver.',
    },
    // Sacs
    {
        id: 7,
        name: 'Sac en Cuir',
        price: '25,000',
        image: 'https://cdn.pixabay.com/photo/2015/11/20/03/53/package-1052370_1280.jpg',
        description: 'Un sac en cuir chic et fonctionnel.',
    },
    {
        id: 8,
        name: 'Sac à Dos en Denim',
        price: '20,000',
        image: 'https://example.com/sac-denim.jpg',
        description: 'Un sac à dos en denim pour un look décontracté.',
    },
];
function App() {
    const [cartItems, setCartItems] = useState([]);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [confirmationName, setConfirmationName] = useState('');

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
    };

    const clearCart = () => {
        setCartItems([]);
        setIsCheckingOut(false);
        setConfirmationName('');
    };
    const formatPrice = (price) => new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
    }).format(price);
    
    const totalAmount = cartItems.reduce((total, item) => {
        return total + parseInt(item.price.replace(/,/g, ''), 10);
    }, 0);

    return (
        <div className="App">
            {/* Grande image en haut de la page */}
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Découvrez nos Abayas, Voiles et Accessoires</h1>
                    <p>Des collections élégantes pour toutes les occasions</p>
                </div>
            </div>

            <header className="App-header">
                <h1>Bienvenue dans notre boutique en ligne</h1>
                <p>Explorez nos accessoires, robes abayas et voiles !</p>
            </header>

            <main>
                {confirmationName ? (
                    <Confirmation name={confirmationName} />
                ) : isCheckingOut ? (
                    <Checkout
                        cartItems={cartItems}
                        totalAmount={totalAmount}
                        onClearCart={clearCart}
                        onCheckout={setConfirmationName}
                    />
                ) : (
                    <>
                        <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
                        {cartItems.length > 0 && (
                            <button onClick={() => setIsCheckingOut(true)}>Procéder au paiement</button>
                        )}

                        {/* Abayas Section */}
                        <section>
                            <h2 className="category-title">Abayas</h2>
                            <div className="product-grid">
                                {products.filter(product => product.name.includes('Abaya')).map(product => (
                                    <div className="product-grid-item" key={product.id}>
                                        <Product
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                            description={product.description}
                                            onAddToCart={() => addToCart(product)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Voiles Section */}
                        <section>
                            <h2 className="category-title">Voiles</h2>
                            <div className="product-grid">
                                {products.filter(product => product.name.includes('Voile')).map(product => (
                                    <div className="product-grid-item" key={product.id}>
                                        <Product
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                            description={product.description}
                                            onAddToCart={() => addToCart(product)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Accessoires Section */}
                        <section>
                            <h2 className="category-title">Accessoires</h2>
                            <div className="product-grid">
                                {products.filter(product => product.name.includes('Accessoire')).map(product => (
                                    <div className="product-grid-item" key={product.id}>
                                        <Product
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                            description={product.description}
                                            onAddToCart={() => addToCart(product)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Sacs Section */}
                        <section>
                            <h2 className="category-title">Sacs</h2>
                            <div className="product-grid">
                                {products.filter(product => product.name.includes('Sac')).map(product => (
                                    <div className="product-grid-item" key={product.id}>
                                        <Product
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                            description={product.description}
                                            onAddToCart={() => addToCart(product)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                )}
            </main>
        </div>
    );
}

export default App;