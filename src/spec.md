# Specification

## Summary
**Goal:** Replace illustrated spice images in the Hero and Products sections with real photographic spice images while keeping the existing layout and styling.

**Planned changes:**
- Add new photographic spice image assets under `frontend/public/assets/generated`.
- Update `frontend/src/components/site/sections/ProductsSection.tsx` product image URLs to use the new photographic assets (served via `/assets/generated/...`) and stop using the existing illustration files.
- Update `frontend/src/components/site/sections/HeroSection.tsx` right-side image to use a photographic spices asset (served via `/assets/generated/...`) while preserving current responsive behavior and styling.

**User-visible outcome:** The Products grid and Hero section display real photographic spice images (no illustrations) with no broken image links and the same premium/classy look and layout as before.
