# Design Guidelines: Enterprise Developer Portfolio

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from Linear (clean precision), Stripe (sophisticated restraint), and Vercel (developer-focused elegance). The portfolio must project technical excellence through design itself - sophisticated, modern, and meticulously crafted to impress both technical peers and non-technical recruiters.

## Typography System

**Font Families** (via Google Fonts):
- **Headings**: Inter (weights: 700, 600, 500) - geometric precision for impact
- **Body**: Inter (weights: 400, 500) - consistent family for cohesion
- **Code/Technical**: JetBrains Mono (weight: 400) - for code snippets, technical details

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- Section Headings: text-3xl md:text-4xl lg:text-5xl, font-semibold
- Subsection Headings: text-2xl md:text-3xl, font-semibold
- Card/Component Titles: text-xl md:text-2xl, font-medium
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Small Text/Labels: text-sm, font-medium
- Captions: text-xs md:text-sm

## Layout & Spacing System

**Tailwind Spacing Primitives**: Use 4, 6, 8, 12, 16, 20, 24, 32 as core units (p-4, m-8, gap-6, etc.)

**Container Strategy**:
- Max-width: max-w-7xl for full sections, max-w-4xl for content-focused areas, max-w-prose for text
- Padding: px-6 md:px-8 lg:px-12 (consistent horizontal padding)
- Section Vertical Spacing: py-16 md:py-24 lg:py-32

**Grid Systems**:
- Projects Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-8
- Skills/Tech Stack: grid-cols-2 md:grid-cols-3 lg:grid-cols-4, gap-6
- Blog Posts: grid-cols-1 md:grid-cols-2, gap-10

## Page-Specific Layouts

### Home Page (6-7 Sections)
1. **Hero Section** (80vh): Asymmetric layout - headline + intro paragraph on left (60%), accent visual/terminal animation on right, CTA buttons with availability status badge
2. **Featured Projects Showcase**: 2-3 hero project cards with large preview images, hover states revealing tech stack overlays
3. **Skills Matrix**: 4-column grid of technical capabilities with icon + proficiency indicators, grouped by category (Frontend, Backend, DevOps, Tools)
4. **Recognition Section**: Certifications, achievements, GitHub stats visualization in 3-column layout
5. **Recent Blog Posts**: 2-column preview cards with featured image, title, excerpt, read time
6. **Testimonials Carousel**: Client/colleague testimonials with photos, role, company
7. **CTA Section**: Availability status, call to action, multiple contact methods

### Projects Page
- **Filter Bar**: Horizontal tags for tech stack/category filtering (sticky on scroll)
- **Project Grid**: Masonry or uniform grid layout, each card: large preview image, title, tech badges, brief description, "View Details" link
- **Project Detail Modal/Page**: Full-screen image gallery, detailed description, tech stack breakdown, challenge/solution sections, GitHub/live demo links, metrics/impact

### About Page
- **Intro Section**: Professional photo (left), bio narrative (right), 2-column split
- **Timeline**: Vertical career/education timeline with alternating left-right cards
- **Expertise Breakdown**: Visual skill meters or percentage bars for key technologies
- **Personal Touch**: Outside-work interests with small imagery, humanizing content

### Services Page (for freelance/consulting)
- **Services Grid**: 3-column cards - icon, service name, description, typical deliverables list
- **Process Timeline**: Horizontal stepper showing workflow (Discovery → Design → Development → Delivery)
- **Pricing Table** (if applicable): Comparison grid with package tiers
- **Case Studies**: 2 featured client success stories with before/after or results metrics

### Blog Page
- **Featured Post**: Large hero card with full-width image
- **Posts Grid**: 2-column layout, each with thumbnail, title, excerpt, tags, date, read time
- **Sidebar**: Categories list, popular posts, tag cloud (desktop only, stacks on mobile)

### Contact Page
- **2-Column Layout**: Contact form (left 60%), contact info + map/location (right 40%)
- **Form Fields**: Name, Email, Subject, Message (textarea), Submit button - all with floating labels
- **Alternative Methods**: Email, LinkedIn, GitHub links with icons, response time expectation

## Component Library

### Navigation
- **Header**: Fixed top, backdrop blur, logo left, nav links center, CTA button right
- **Mobile Menu**: Slide-in drawer with full-screen overlay, stacked links, close icon

### Cards
- **Project Card**: Rounded-xl, overflow-hidden, hover:shadow-2xl transition, image top, content padding p-6, footer with tech badges
- **Blog Card**: Similar structure, featured image with category badge overlay, meta info (date, read time) in footer
- **Skill Card**: Centered icon (3rem size), label below, optional proficiency indicator

### Forms
- **Input Fields**: Rounded-lg, border focus ring effect, padding p-3, placeholder with reduced opacity
- **Buttons Primary**: Rounded-lg, px-6 py-3, font-medium, shadow-lg, hover:shadow-xl transition
- **Buttons Secondary**: Outlined variant with border-2, same sizing

### Badges/Tags
- **Tech Stack Badges**: Rounded-full, px-3 py-1, text-xs font-medium, inline-flex with icon
- **Status Badge**: "Available for hire" / "Currently employed" with dot indicator

### Interactive Elements
- **Project Previews**: Hover reveals overlay with quick actions (View, GitHub, Live Demo)
- **Image Galleries**: Lightbox modal on click, prev/next navigation
- **Testimonial Cards**: Subtle background, quotation marks, client photo (rounded-full, 4rem size), name + role below

## Images Strategy

**Required Images**:
1. **Hero Section**: Abstract technical illustration or coding environment screenshot (use gradient overlay for text readability)
2. **About Page**: Professional headshot (portrait, high-quality)
3. **Projects**: Each project needs 2-3 screenshots/mockups (desktop + mobile views)
4. **Testimonials**: Client/colleague headshots (circular, 64×64 minimum)
5. **Blog Posts**: Featured images for each post (16:9 ratio, 1200×675 recommended)
6. **Services**: Icon illustrations for each service offering (SVG preferred)

**Image Treatment**:
- Rounded corners (rounded-xl for large images, rounded-lg for medium)
- Subtle shadow: shadow-lg on cards containing images
- Hover effects: scale-105 transform on project previews
- Aspect ratios: aspect-video for project previews, aspect-square for skill icons

## Accessibility Implementation

- All interactive elements: min-height 44px (tap target size)
- Focus indicators: ring-2 ring-offset-2 on all focusable elements
- Skip to main content link (sr-only, focus:not-sr-only)
- Proper heading hierarchy (no skipped levels)
- Alt text for all images (descriptive for content, empty for decorative)
- ARIA labels for icon-only buttons
- Form labels always visible or aria-label on inputs
- Keyboard navigation: full site navigable without mouse

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked navigation, reduced padding)
- Tablet: 768px - 1024px (2-column grids, condensed spacing)
- Desktop: > 1024px (full multi-column layouts, expanded spacing)

**Mobile-Specific**:
- Hero section: stack content vertically, reduce height to auto
- Navigation: hamburger menu, full-screen overlay
- Project grid: single column with full-width cards
- Forms: full-width inputs, larger touch targets (min-h-12)

## Performance Considerations

- Lazy load images below fold with blur-up placeholder
- Optimize hero image (WebP format, < 200KB)
- Use loading="lazy" on all non-critical images
- SVG icons preferred over icon fonts for project tech badges

---

**Design Principle**: Every section should demonstrate technical sophistication through design execution - clean code should be reflected in clean design. Balance minimalism with personality, professionalism with creativity.