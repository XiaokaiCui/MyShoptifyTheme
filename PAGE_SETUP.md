# Page Setup Instructions for Shopify Theme

## Pages Created

This theme includes the following page templates:

1. **Catalog Page** (`page.catalog.liquid`)
2. **Contact Page** (`page.contact.liquid`) 
3. **Lookbook Page** (`page.lookbook.liquid`)
4. **About Page** (`page.about.liquid`)
5. **Custom Orders Page** (`page.custom-orders.liquid`)

## How to Set Up Pages in Shopify

### Step 1: Create Pages in Shopify Admin
1. Go to **Shopify Admin → Online Store → Pages**
2. Click **"Add page"**
3. For each page, use these settings:

#### Catalog Page
- **Title:** Catalog (or whatever you prefer)
- **Template:** `page.catalog`
- **Content:** Optional description that appears under the title

#### Contact Page  
- **Title:** Contact Us
- **Template:** `page.contact`
- **Content:** Optional subtitle

#### Lookbook Page
- **Title:** Lookbook
- **Template:** `page.lookbook`
- **Content:** Optional subtitle

#### About Page
- **Title:** About Us
- **Template:** `page.about`
- **Content:** Your brand story

#### Custom Orders Page
- **Title:** Custom Orders
- **Template:** `page.custom-orders`
- **Content:** Information about your custom order process

### Step 2: Add to Navigation
1. Go to **Shopify Admin → Online Store → Navigation**
2. Edit your main menu
3. Add links to your new pages

### Step 3: Configure Theme Settings
1. Go to **Shopify Admin → Online Store → Themes**
2. Click **"Customize"** on your active theme
3. Go to **Theme settings** to configure:
   - Colors
   - Typography  
   - Header/Footer settings
   - Page-specific settings (for catalog, contact, lookbook pages)

## Template Features

### Catalog Page (`page.catalog`)
- Product filtering (All, Bestsellers, New Arrivals, On Sale)
- Category browsing (Clothing, Accessories, Home Decor)
- Downloadable PDF catalog section
- Mobile-responsive design

### Contact Page (`page.contact`)
- Contact form with validation
- Studio details (email, phone, address)
- Studio hours
- Social media links
- Interactive FAQ section
- Map placeholder

### Lookbook Page (`page.lookbook`)
- Seasonal collections gallery
- Image lightbox functionality
- Smooth scrolling navigation
- Mobile-responsive design

## Troubleshooting

### "Liquid error" or "Translation missing"
- Make sure you've uploaded the complete theme ZIP
- The theme includes all necessary files:
  - `snippets/social-meta-tags.liquid`
  - `locales/en.default.json`
  - `assets/theme.css`
  - `assets/theme.js`

### Pages not showing
- Ensure you've selected the correct template suffix in page settings
- Example: For catalog page, template should be `page.catalog` (not `page.catalog.liquid`)

### Images not displaying
- Default gradient backgrounds show when no images are uploaded
- Upload images through theme customization or page settings

## Need Help?
The theme is ready to use! Just:
1. Upload `MyShoptifyTheme.zip` to Shopify
2. Create pages with the template suffixes above
3. Customize through theme editor

All pages follow your brand aesthetic: late spring/early summer, soft, warm, story-like.