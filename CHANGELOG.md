# Changelog
All notable changes to Elegance Reborn project.

## 2026-05-29 - Part 2 Submission
### Added: Responsive Layout per Marking Card 3.1
- Implemented CSS Grid for `.products-grid` on products.html
- Added media queries: 3 columns desktop >992px, 2 columns iPhone 12 Pro 390px-992px, 1 column mobile <390px
- Fixed Part 1 feedback: Products no longer stack vertically on mobile

### Added: Base Style + CSS Reset per 2.2
- Added `* { box-sizing: border-box; margin: 0; padding: 0 }` 
- Added `overflow-x: hidden` on html,body to prevent horizontal scroll

### Added: Responsive Images per Q3.3
- Added `srcset` + `sizes` attributes to all 20+ product images in products.html
- Images now load appropriate sizes: 100vw mobile, 50vw tablet, 33vw desktop

### Added: Relative Units per 3.2
- Converted padding/margins to `rem` and `%` units throughout css/styles.css
- Body font-size: 1rem with mobile reduction to 0.875rem

### Added: Pseudo-classes per 2.5
- `.product-card:hover` transform + shadow effect
- `.add-to-cart-btn:hover` color change + translateY
- `.add-to-cart-btn:active` scale effect

### Files Modified
- `css/styles.css` - Full responsive CSS rewrite
- `products.html` - Added srcset/sizes to all images
- `README.md` - Added Changelog section

## 2026-04-19
Updated index.html hero image size.

## 2026-04-18
Updated product.html with product images, alt text, and descriptions
Updated index.html and about.html structure and content
Created and uploaded README.md with project documentation
Uploaded Project-Proposal.docx

## 2026-04-17
Initial commit and repository setup
Added files via upload: all HTML pages 
Created basic navigation menu linking all pages