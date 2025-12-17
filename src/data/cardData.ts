export interface Product {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
    rating: number;
}

export const DATA: Product[] = [
    {
        id: '1',
        title: 'Wireless Headphones',
        price: '$199.99',
        description: 'Premium noise-cancelling headphones with 30h battery life.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        rating: 4.8,
    },
    {
        id: '2',
        title: 'Smart Watch Series 5',
        price: '$299.00',
        description: 'Track your fitness and stay connected on the go.',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
        rating: 4.6,
    },
    {
        id: '3',
        title: 'Minimalist Backpack',
        price: '$89.50',
        description: 'Water-resistant, durable, and stylish for daily commute.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
        rating: 4.9,
    },
    {
        id: '4',
        title: 'Mechanical Keyboard',
        price: '$145.00',
        description: 'Clicky switches with RGB backlighting for pros.',
        image: 'https://images.unsplash.com/photo-1587829741301-3850021b0126?w=500&q=80',
        rating: 4.7,
    },
    {
        id: '5',
        title: 'Designer Sunglasses',
        price: '$120.00',
        description: 'UV protection with a classic aviator frame.',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
        rating: 4.5,
    },
    {
        id: '6',
        title: 'Leather Wallet',
        price: '$45.00',
        description: 'Handcrafted genuine leather with RFID blocking.',
        image: 'https://images.unsplash.com/photo-1627123424574-181ce5171c98?w=500&q=80',
        rating: 4.4,
    },
];
