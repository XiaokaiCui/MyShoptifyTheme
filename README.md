# Stitch & Story - Shopify Theme

A complete Shopify theme for a handmade crochet brand with a soft, warm, story-like aesthetic inspired by late spring and early summer.

## 🎨 Brand Mood
- **Late Spring / Early Summer** - Soft, gentle, transitional
- **Quiet & Warm** - Not loud or overly commercial
- **Cute & Refined** - Playful yet sophisticated
- **Story-Like** - Narrative approach to products
- **Handmade Feel** - Organic, intentional, personal

## 🏗️ Theme Structure

```
MyShoptifyTheme/
├── assets/              # CSS, JS, images
├── config/              # Theme settings
│   └── settings_schema.json
├── layout/              # Theme layout
│   └── theme.liquid
├── locales/             # Translation files
├── sections/            # Shopify sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-banner.liquid
│   ├── brand-introduction.liquid
│   ├── collection-cards.liquid
│   ├── featured-products.liquid
│   ├── handmade-values.liquid
│   ├── editorial-image.liquid
│   ├── lookbook-preview.liquid
│   ├── custom-order-cta.liquid
│   └── newsletter.liquid
├── snippets/            # Reusable components
├── templates/           # Page templates
│   ├── index.liquid                    # Homepage
│   ├── page.about.liquid               # About page
│   ├── page.custom-orders.liquid       # Custom orders page
│   ├── collection.story-book.liquid    # Story Book collection
│   └── collection.flowers-birds.liquid # Flowers & Birds collection
└── README.md
```

## 🎯 Features

### Complete Page Templates
- **Homepage** - 9-section layout with hero, collections, products, values, editorial, lookbook, CTA, newsletter
- **About Page** - Brand story with values and team introduction
- **Story Book Collection** - Themed collection for narrative-inspired pieces
- **Flowers & Birds Collection** - Nature-inspired collection with category filtering
- **Custom Orders Page** - Step-by-step process with inquiry form

### Customizable Sections
- **Hero Banner** - Full-width with parallax effects
- **Collection Cards** - 3-card grid with hover animations
- **Featured Products** - Product grid with badges
- **Handmade Values** - Icon-based value propositions
- **Editorial Image** - Emotional brand storytelling
- **Lookbook Preview** - Lifestyle image gallery
- **Custom Order CTA** - Call-to-action with features
- **Newsletter** - Email subscription with Shopify integration

### Theme Settings (Shopify Admin)
- **Color Palette** - Customize brand colors
- **Typography** - Font pickers for headings and body
- **Header & Footer** - Logo, menus, social links
- **Homepage Options** - Toggle sections on/off
- **Product Pages** - Display options

## 🎨 Design System

### Color Palette
```css
--color-cream: #F8F5F0;      /* Background, soft whites */
--color-peach: #FFE5D4;      /* Accents, highlights */
--color-dusty-rose: #E8B4B8; /* Primary brand color */
--color-sage: #B5C2B7;       /* Secondary, nature tones */
--color-beige: #D4B483;      /* Warm accents */
--color-text: #333333;       /* Primary text */
--color-text-light: #666666; /* Secondary text */
```

### Typography
- **Headings**: Playfair Display (gentle serif)
- **Body**: Lora (clean, readable serif)
- **Chinese Support**: Noto Serif SC / Source Han Serif SC

### Spacing & Layout
- **Container Width**: 1200px max
- **Mobile Breakpoint**: 768px
- **Section Padding**: 80px desktop / 60px mobile
- **Grid Gaps**: 2rem desktop / 1.5rem mobile

## 🚀 Installation

### Method 1: Shopify Theme Editor
1. Download this repository as ZIP
2. Go to Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Upload theme"
4. Select the ZIP file
5. Click "Publish theme"

### Method 2: GitHub Integration
1. Connect your Shopify store to GitHub
2. Add this repository as a theme source
3. Deploy directly from GitHub

### Method 3: Theme Kit
```bash
# Install Theme Kit
brew tap shopify/shopify
brew install themekit

# Configure
theme configure --password=[your-password] --store=[your-store.myshopify.com] --themeid=[your-theme-id]

# Deploy
theme deploy
```

## 📱 Responsive Design

- **Mobile First** - All components designed for mobile
- **Flexible Grids** - CSS Grid and Flexbox layouts
- **Touch-Friendly** - Large buttons, easy navigation
- **Performance** - Optimized images, lazy loading
- **Accessibility** - ARIA labels, keyboard navigation

## 🔧 Customization

### Through Shopify Admin
1. **Colors** - Update brand palette in theme settings
2. **Typography** - Change fonts in theme settings
3. **Content** - Edit section content directly
4. **Images** - Upload new images through media picker
5. **Layout** - Reorder sections via drag-and-drop

### Through Code
1. **CSS Variables** - Modify colors in `:root` selectors
2. **Section Settings** - Add new options in schema
3. **Templates** - Create new page templates
4. **Snippets** - Add reusable components

## 📄 Pages Included

### 1. Homepage (`templates/index.liquid`)
- Hero banner with brand message
- Brand introduction
- Collection showcase (3 cards)
- Featured products grid
- Handmade values
- Editorial brand story
- Lookbook preview
- Custom order CTA
- Newsletter signup

### 2. About Page (`templates/page.about.liquid`)
- Brand story with images
- Making process
- Values grid (4 items)
- Team introduction
- Call-to-action

### 3. Story Book Collection (`templates/collection.story-book.liquid`)
- Themed hero banner
- Product grid with story badges
- Collection story section
- Empty state for new collections

### 4. Flowers & Birds Collection (`templates/collection.flowers-birds.liquid`)
- Nature-inspired hero
- Category filtering (floral, birds, garden, spring)
- Product grid with natural colors
- Inspiration section

### 5. Custom Orders Page (`templates/page.custom-orders.liquid`)
- Process steps (consultation, design, approval, creation, delivery)
- Example projects
- Inquiry form
- Pricing & timeline
- FAQ section

## 🛠️ Development

### Prerequisites
- Shopify store (development store recommended)
- GitHub account (for version control)
- Code editor (VS Code, Sublime Text, etc.)

### Local Development
1. Clone this repository
2. Install Theme Kit
3. Configure with your store credentials
4. Run `theme watch` for live updates

### Adding New Sections
1. Create new `.liquid` file in `sections/` directory
2. Define schema with settings and blocks
3. Add CSS styles within `{% style %}` tags
4. Add JavaScript within `{% javascript %}` tags or separate file
5. Include in templates with `{% section 'section-name' %}`

### Adding New Templates
1. Create new `.liquid` file in `templates/` directory
2. Use appropriate naming convention:
   - `page.[handle].liquid` for custom pages
   - `collection.[handle].liquid` for custom collections
   - `product.[handle].liquid` for custom products
3. Assign template in Shopify admin

## 📈 Performance Optimization

### Images
- Use Shopify's image filters for responsive sizes
- Implement lazy loading for below-the-fold images
- Use WebP format where supported
- Optimize image compression

### CSS & JavaScript
- Minify production assets
- Use CSS variables for theming
- Implement code splitting for large files
- Use async/defer for non-critical scripts

### Shopify Best Practices
- Use Shopify's CDN for assets
- Implement predictive loading for collections
- Use section rendering for dynamic content
- Cache frequently accessed data

## 🔍 SEO Features

- Structured data for products and collections
- Meta tags for social sharing
- XML sitemap integration
- Canonical URLs
- Breadcrumb navigation
- SEO-friendly URLs

## ♿ Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Screen reader compatibility
- Focus indicators for interactive elements
- Semantic HTML structure

## 📝 License

This theme is available for personal and commercial use. Attribution is appreciated but not required.

## 🤝 Support

For issues or questions:
1. Check the [Shopify Theme Documentation](https://shopify.dev/themes)
2. Review the code comments
3. Create an issue in this repository

## 🎉 Credits

- Designed for handmade crochet brands
- Inspired by late spring and early summer aesthetics
- Built with Shopify Liquid, CSS, and JavaScript
- Optimized for performance and accessibility

---

**Ready to use on Shopify!** Upload the theme to your store and customize through the theme editor.