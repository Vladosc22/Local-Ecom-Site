import { useState } from 'react'
import './ProductCard.css'

const FALLBACK_IMAGE = 'https://placehold.co/600x400/e2e8f0/64748b?text=No+Image'

function ProductCard({ product, onAddToCart }) {
    const [imgLoaded, setImgLoaded] = useState(false)
    const [wishlisted, setWishlisted] = useState(false)

    const price = Number.isFinite(product?.price) ? product.price.toFixed(2) : '--'
    const categoryName = product?.category?.name ?? 'Uncategorized'
    const imageSrc = product?.imageUrl || FALLBACK_IMAGE

    return (
        <div className="product-card">
            <div className="product-image-container">
                {!imgLoaded && <div className="image-skeleton" />}
                <img
                    src={imageSrc}
                    alt={product?.name || 'Product image'}
                    className={`product-image ${imgLoaded ? 'loaded' : ''}`}
                    loading="lazy"
                    onLoad={() => setImgLoaded(true)}
                    onError={event => {
                        event.target.src = FALLBACK_IMAGE
                        setImgLoaded(true)
                    }}
                />
                <button
                    type="button"
                    className={`wishlist-btn ${wishlisted ? 'wishlisted' : ''}`}
                    onClick={e => { e.stopPropagation(); setWishlisted(w => !w) }}
                    aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                    {wishlisted ? '\u2764\uFE0F' : '\uD83E\uDD0D'}
                </button>
                <span className="product-badge">{categoryName}</span>
            </div>
            <div className="product-info">
                <h3 className="product-name">{product?.name || 'Untitled product'}</h3>
                <p className="product-description">{product?.description || 'No description provided.'}</p>
                <div className="product-footer">
                    <span className="product-price">${price}</span>
                    <button
                        type="button"
                        className="add-to-cart-btn"
                        onClick={() => onAddToCart && onAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard