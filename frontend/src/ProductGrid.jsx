import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products, onAddToCart }) {
    if (!products || products.length === 0) {
        return (
            <div className="no-products">
                <span className="no-products-icon">&#128722;</span>
                <p className="no-products-title">No products found</p>
                <p className="no-products-hint">Try selecting a different category or adjusting your search.</p>
            </div>
        )
    }

    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className="product-grid-item"
                    style={{ animationDelay: `${index * 60}ms` }}
                >
                    <ProductCard product={product} onAddToCart={onAddToCart} />
                </div>
            ))}
        </div>
    )
}

export default ProductGrid