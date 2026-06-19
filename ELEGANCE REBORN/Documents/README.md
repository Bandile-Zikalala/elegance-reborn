# elegance-reborn
**Elegance Reborn**  
*Modest Luxury Fashion Brand Inspired by African Heritage*

A responsive website for Elegance Reborn, a modest luxury fashion brand based in Soweto, South Africa.  
Inspired by global brands like Dior and Zimmermann, focusing on elegant, feminine, and culturally rooted design.

**Live site:** https://bandile-zikalala.github.io/elegance-reborn/  
**Student:** Bandile Zikalala  
**Student No:** [ST10521550]  
**Date:** 29 May 2026

## Changelog - Part 2 Implementation
### 2026-05-29: Responsive Layout + Q3.3 Responsive Images
**Part 1 Feedback Addressed:**
- **Fixed:** Products stacked vertically on mobile devices
- **Solution:** Implemented CSS Grid with media queries. 3 columns desktop >992px, 2 columns tablet/iPhone 12 Pro 390px-992px, 1 column mobile <390px per marking card 3.1
- **Added:** `box-sizing: border-box` to all elements + `overflow-x: hidden` on html,body to prevent horizontal scroll per 2.2
- **Added:** `srcset` + `sizes` attributes to all 20+ product images for responsive image loading per Q3.3
- **Added:** Relative units `rem` + `%` for padding/margins per 3.2
- **Files changed:** `css/styles.css`, `products.html`
- **Git commits:** See commit history for "Implement responsive grid layout" and "Add responsive images with srcset"

## Pages
- **Home:** index.html  
- **Products:** products.html  
- **About Us:** about.html  
- **Contact:** contact.html  
- **Enquiry:** enquiry.html  

## Design & Styling
- **Color Palette:**  
    - Navy: #1A1A40  
    - Dusty Pink: #D4A5A5  
    - Gold Accent: #C9A961  
    - Soft Pink Background: #FDF4F5  
- **Typography:** Playfair Display for headings per marking card 2.3, Cormorant Garamond for body text  
- **Responsive Design:** Mobile, tablet, and desktop layouts using CSS Grid + Flexbox + media queries per 2.4 + 3.1  
- **UI Details:** Soft card design, rounded corners, subtle shadows, hover effects for boutique feel per 2.5

## Features Implemented - Part 2 Marking Card
- **2.2 Base Style + CSS Reset:** `* { box-sizing: border-box; margin: 0; padding: 0 }` + `overflow-x: hidden`
- **2.3 Typography:** Playfair Display headings, Cormorant Garamond body
- **2.4 Layout Structure:** CSS Grid for `.products-grid` 
- **2.5 Visual Styles + Pseudo-classes:** `.product-card:hover`, `.add-to-cart-btn:hover`, `.add-to-cart-btn:active`
- **3.1 Breakpoints:** 3 col desktop, 2 col iPhone 12 Pro 390px, 1 col mobile <390px
- **3.2 Relative Units:** All padding/margins in `rem` and `%`
- **3.3 Responsive Images:** `srcset` + `sizes` on all product images

## Project Structure
elegance-reborn/
│
├── index.html
├── products.html
├── about.html
├── contact.html
├── enquiry.html
├── /css
│   └── styles.css
├── /images
│   └── [20+ product and brand images]
├── /screenshots
│   ├── homepage-desktop.png
│   ├── products-desktop-3col.png
│   ├── products-tablet-2col.png
│   └── products-mobile-1col.png
└── README.md

## Testing & Screenshots
Responsive design tested on:
1. Desktop 1920x1080 - 3 columns
2. iPad/iPhone 12 Pro 390x844 - 2 columns  
3. iPhone SE 375x667 - 1 column
Screenshots located in `/screenshots` folder for marking.

## How to Run
Open `index.html` in any web browser or visit the live site link above.  
No build tools or server needed — pure HTML and CSS.

## Technologies Used
- HTML5 Semantic structure
- CSS3 Grid + Flexbox + Media Queries
- Google Fonts: Playfair Display, Cormorant Garamond

## References
All sources used during development of this project:

1. **Google Fonts** - Playfair Display + Cormorant Garamond typefaces. https://fonts.google.com/
2. **MDN Web Docs** - CSS Grid, Media Queries, and `srcset`/`sizes` syntax. https://developer.mozilla.org/en-US/docs/Web/CSS_grid_layout
3. **W3Schools** - CSS `box-sizing: border-box` and responsive design tutorials. https://www.w3schools.com/css3_mediaqueries.asp
4. **CSS-Tricks** - Guide to responsive images with `srcset` and `sizes`. https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
5. **Product Images** - All images are sourced from Shein Source: https://www.shein.com
