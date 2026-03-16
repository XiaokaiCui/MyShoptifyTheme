# Translation Fixes - 2026-03-16

## Problem
The Shopify theme had translation errors showing "Translation missing: en.404.subtitle" and similar errors in multiple locations.

## Root Cause
1. **Incorrect translation key paths**: Templates were using translation keys like `404.title` but the locale file had them under `general.404.title`
2. **Missing translation keys**: Many translation keys referenced in templates didn't exist in the locale file

## Fixes Applied

### 1. Updated Locale File (`locales/en.default.json`)
Added missing translation keys:
- **Search translations**: Added `title`, `search`, `placeholder`, `filter_by`, `sort_by`, `type`, `all_types`, `product/products`, `page/pages`, `article/articles`, `relevance`, `price_low_to_high`, `price_high_to_low`, `newest`, `previous/next`, `suggestions`, `browse_all_products`, `browse_collections`, `view_catalog`, `view_product`, `view_page`, `read_article`, `results_for`
- **Cart translations**: Added `title`, `items`, `order_summary`, `remove`, `discount`, `total`, `you_might_also_like`
- **404 translations**: Added `message`, `browse_products`, `popular_pages`, `collections`, `catalog`, `about`, `contact`
- **Accessibility**: Added `refresh_page`
- **Sections**: Added `sections.cart.cart_error`
- **Products**: Added `products.product.add_to_cart`, `products.product.sold_out`, `products.product.unavailable` (for JavaScript compatibility)

### 2. Updated Templates
- **404.liquid**: Changed from `404.title` to `general.404.title`, `404.subtitle` to `general.404.subtext`, etc.
- **cart.liquid**: Changed from `cart.general.title` to `general.cart.title`, etc.
- **password.liquid**: Replaced missing translation keys with default values (password pages don't need full translation support)

### 3. Translation Structure
The theme now uses consistent translation key paths:
- `general.404.*` for 404 page translations
- `general.cart.*` for cart page translations  
- `general.search.*` for search page translations
- `general.product.*` for product translations
- `products.product.*` for JavaScript product translations (compatibility)
- `accessibility.*` for accessibility labels
- `sections.*` for section-specific translations

## Verification
All translation keys referenced in templates now exist in the locale file. No more "Translation missing" errors should appear.

## Notes
- Password page translations use default values instead of translation keys since password pages are temporary and rarely need localization
- Some translation keys in the locale file aren't used yet (like `general.cart.item_added`) but are available for future use
- The theme is now ready for multilingual support - just add additional locale files (es.default.json, fr.default.json, etc.) with translated values