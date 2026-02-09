import './CategoryList.css'

function CategoryList({ categories, selectedCategory, onCategorySelect, loading }) {
    if (loading) {
        return (
            <div className="category-list">
                <p className="category-title">Categories</p>
                <div className="category-chips">
                    {[1, 2, 3, 4].map(i => (
                        <span key={i} className="category-skeleton" />
                    ))}
                </div>
            </div>
        )
    }

    if (!categories || categories.length === 0) {
        return (
            <div className="category-list">
                <p className="category-title">Categories</p>
                <p className="category-empty">No categories found.</p>
            </div>
        )
    }

    return (
        <div className="category-list">
            <p className="category-title">
                Categories
                <span className="category-count">{categories.length}</span>
            </p>
            <div className="category-chips">
                {categories.map((category, index) => (
                    <button
                        key={category.id}
                        type="button"
                        className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => onCategorySelect(category.id)}
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategoryList