# SCENT WEBSITE - REQUIRED CHANGES DOCUMENT

This document lists all changes needed to align the website with the SCENT WEBSITE STRUCTURE specification.

---

## 1. HOME PAGE (`/` - `src/app/page.tsx`)

### ✅ Already Correct:
- Menu/Header (Chanel-style navbar)
- Hero Image with "SCENT SALON, BEAUTY REIMAGINED" text
- "Book Appointment" CTA button
- "OUR STORY, YOUR STATEMENT" quote section
- Brand Overview stats (Experience, Salons, People Served)
- "REDEFINE YOUR LOOK" service section (6 cards in correct order)
- Video Section
- "TRUSTED BY THE BEST" brands section
- Store Locator section
- "WHY SCENT" care icons section
- Footer

### ❌ Changes Required:

#### 1.1 Below Hero Section (`src/components/Coco/CocoSection.tsx`)
**Current:** "Explore" button links to `/new-service`  
**Required:** Should link to `/services` (Services page)  
**File:** `src/components/Coco/CocoSection.tsx`  
**Line:** ~33  
**Change:** Update router.push from `/new-service` to `/services`

---

#### 1.2 Welcome to SCENT Section (`src/components/Statment/statment.jsx`)
**Current:** Contains Lorem Ipsum placeholder text  
**Required:** Replace with full "WELCOME TO SCENT" elaboration from document  
**File:** `src/components/Statment/statment.jsx`  
**Lines:** ~67-75  
**Change:** Replace placeholder paragraph with complete About Us writeup:
```
Where elegance meets attitude. SCENT is more than beauty — it's a statement, a feeling, and an experience crafted exclusively for you. [Full elaboration text from document]
```

---

#### 1.3 Blogs Section
**Current:** NO Blogs section exists on homepage  
**Required:** Add a "BLOGS" section before Testimonials  
**Location:** After "WHY SCENT" section, before Testimonials  
**Components to Create:** New component `src/components/Blogs/blogs.jsx`  
**Structure Needed:**
- Section title: "BLOGS" or "Latest from Our Blog"
- Display 2-3 recent blog posts (title, excerpt, date, image)
- "View All Blogs" button/link
- Add to `src/app/page.tsx` after `<WhyScent />` and before `<InspirationSection />`

---

#### 1.4 Testimonials Section
**Current:** NO Testimonials section exists on homepage  
**Required:** Add a "Testimonials" section before Footer  
**Location:** After Blogs section, before Footer  
**Components to Create:** New component `src/components/Testimonials/testimonials.jsx`  
**Structure Needed:**
- Section title: "What Our Clients Say" or "Testimonials"
- Display 3-4 customer testimonials (quote, name, photo, rating)
- Carousel/slider functionality
- Add to `src/app/page.tsx` after Blogs and before `<Footer />`

---

## 2. SERVICES PAGE (`/services` - `src/app/services/page.tsx`)

### ❌ Major Changes Required:

#### 2.1 Service Categories Structure (`src/components/Services/ser.jsx`)
**Current:** Shows detailed hair subcategories (Haircut & Styling, Highlights & Streaks, Hair Spa, Hair Treatments, Beard Styling, Mustache Design)  
**Required:** Show TOP-LEVEL categories with "Read More" buttons:
- HAIR CARE
- SKIN CARE
- NAIL CARE
- BEAUTY
- SPA / MASSAGES
- BRIDAL MAKEUP

**File:** `src/components/Services/ser.jsx`  
**Change Required:**
1. Replace `serviceCategories` array with top-level categories:
```javascript
const topLevelServices = [
  {
    title: "Hair Care",
    description: "[Short writeup about Hair Care services]",
    href: "/services" // or dedicated /hair-care page
  },
  {
    title: "Skin Care",
    description: "[Short writeup about Skin Care services]",
    href: "/new-service" // or dedicated /skin-care page
  },
  {
    title: "Nail Care",
    description: "[Short writeup about Nail Care services]",
    href: "/nails"
  },
  {
    title: "Beauty",
    description: "[Short writeup about Beauty services]",
    href: "/new-service" // or dedicated /beauty page
  },
  {
    title: "Spa / Massages",
    description: "[Short writeup about Spa/Massage services]",
    href: "/spa"
  },
  {
    title: "Bridal Makeup",
    description: "[Short writeup about Bridal Makeup services]",
    href: "/bridal"
  }
];
```

2. Update grid to show these 6 categories with:
   - Service name
   - Short description (2-3 sentences)
   - **"Read More" button** that links to dedicated service page
   - Remove current modal/expand functionality

---

#### 2.2 Navbar Services Dropdown (`src/components/Navbar.tsx`)
**Current:** Dropdown shows various service links  
**Required:** Ensure dropdown matches the 6 top-level categories:
- Hair Services → `/services` or `/hair-care`
- Beauty Treatments → `/new-service` or `/beauty`
- Nail Services → `/nails`
- Skincare → `/new-service` or `/skin-care`
- Makeup → `/bridal`
- Massage Therapy → `/spa`

**File:** `src/components/Navbar.tsx`  
**Lines:** ~17-24 (services array)  
**Change:** Update service names and hrefs to match top-level structure

---

## 3. INDIVIDUAL SERVICE PAGES

### Required Structure Template (for each service page):
1. Hero Image/Banner
2. Content About [Service Name]
3. Sub Categories (list)
4. Customer Experience (YouTube video links)
5. Store Locator
6. Why SCENT
7. Footer

---

### 3.1 HAIR CARE Page (`/services` or new `/hair-care`)

**Current:** `src/components/Services/ser.jsx` has detailed hair services but doesn't follow template  
**Required Changes:**

**File:** `src/components/Services/ser.jsx` or create new `src/components/HairCare/haircare.jsx`

**Structure Needed:**
1. **Hero Image** - Keep existing video hero or add hero image
2. **Content About Hair Care** - Add intro paragraph about Hair Care
3. **Sub Categories** - Display as list:
   - Haircut & Styling
   - Highlights & Streaks
   - Hair Spa
   - Hair Treatments
   - Beard Styling
   - Mustache Design
4. **Customer Experience** - YouTube video gallery (already exists, keep it)
5. **Store Locator** - Add `<FindNearest />` component before footer
6. **Why SCENT** - Add `<WhyScent />` component before footer

---

### 3.2 NAIL CARE Page (`/nails`)

**Current:** `src/components/nails/nail.jsx` exists  
**Required Changes:**

**File:** `src/components/nails/nail.jsx`

**Structure Needed:**
1. ✅ Hero Image - Verify exists
2. ✅ Content About Nail Care - Verify exists
3. **Sub Categories** - Ensure these are listed:
   - Nail Extensions
   - Gel Nail Art
   - Ombre Gel Polish
   - Organic Pedicure
   - Candle Spa Manicure
   - Candle Spa Pedicure
   - Cut & File
4. **Customer Experience** - Add YouTube video gallery section (similar to Hair Care page)
5. **Store Locator** - Add `<FindNearest />` component
6. **Why SCENT** - Add `<WhyScent />` component

---

### 3.3 SKIN CARE Page (`/new-service` or new `/skin-care`)

**Current:** `src/components/new_service/new_s.jsx` exists  
**Required Changes:**

**File:** `src/components/new_service/new_s.jsx`

**Structure Needed:**
1. ✅ Hero Banner/Image - Verify exists
2. ✅ Content About Skin Care - Verify exists
3. **Sub Categories** - Ensure these are listed:
   - Face
   - Arms
   - Legs
   - Neck
   - Back
4. **Customer Experience** - Add YouTube video gallery section
5. **Store Locator** - Add `<FindNearest />` component
6. **Why SCENT** - Add `<WhyScent />` component

---

### 3.4 FACIAL CARE Page (`/facial`)

**Current:** `src/components/facial/facial.jsx` exists  
**Required Changes:**

**File:** `src/components/facial/facial.jsx`

**Structure Needed:**
1. ✅ Hero Banner/Image - Verify exists
2. ✅ Content About Facial Care - Verify exists
3. **Sub Categories** - Ensure ALL these are listed:
   - Organic Cleanup Facial
   - Snow White Facial
   - Dead Sea Mineral Facial
   - Chocolate Mint Facial
   - White Secret
   - Acne Cure Facial
   - Diamond Glow Facial
   - Anti Ageing Facial
   - Gold Facial
   - Eye Protection Facial
   - Hydra Lifting Ocean Miracle
   - Luminous Lightening Facial
   - Brazilian Skin Lightening
4. **Customer Experience** - Add YouTube video gallery section
5. **Store Locator** - Add `<FindNearest />` component
6. **Why SCENT** - Add `<WhyScent />` component

---

### 3.5 SPA / MASSAGES Page (`/spa`)

**Current:** `src/components/spa/spa.jsx` exists  
**Required Changes:**

**File:** `src/components/spa/spa.jsx`

**Structure Needed:**
1. ✅ Hero Banner/Image - Verify exists
2. ✅ Content About Spa - Verify exists
3. **Sub Categories** - Ensure ALL these are listed:
   - Head Massage
   - Foot Massage
   - Thai Reflexology
   - Back Massage
   - Aroma Massage
   - Thai Massage
   - Deep Tissue Massage
   - Sportz Massage
   - Balinese Massage
   - Scent Signature Massage
   - Stone Therapy
   - Body Polish
   - Body Scrub
4. **Customer Experience** - Add YouTube video gallery section
5. **Store Locator** - Add `<FindNearest />` component
6. **Why SCENT** - Add `<WhyScent />` component

---

### 3.6 BRIDAL MAKEUP Page (`/bridal`)

**Current:** `src/components/bridal/bridalm.jsx` exists  
**Required Changes:**

**File:** `src/components/bridal/bridalm.jsx`

**Structure Needed:**
1. ✅ Hero Banner/Image - Verify exists
2. ✅ Content About Bridal Makeup - Verify exists
3. **Sub Categories** - Ensure these are listed:
   - Pre-Bridal Treatments
   - Bridal Package
4. **Customer Experience** - Add YouTube video gallery section
5. **Store Locator** - Add `<FindNearest />` component
6. **Why SCENT** - Add `<WhyScent />` component

---

## 4. SALON MEMBERSHIP PAGE (`/salon-memberships`)

### ✅ Already Correct:
- All 6 membership tiers (Platinum, Sapphire, Diamond, Gold, Ruby, Silver)
- Flip animation on click
- CTA buttons (Book Now functionality)

### ❌ Minor Changes (if needed):
**File:** `src/components/SalonMemberships/memberships.jsx`  
**Optional:** Ensure CTA button text reads exactly "BOOK NOW" (currently may say "Book Appointment")

---

## 5. FRANCHISE PAGE (`/franchise`)

### ✅ Already Correct:
- Hero video section
- Introduction paragraph
- "Why Choose a Salon Franchise in Bangalore?" section
- "Get in Touch" form + contact info layout
- "The SCENT Advantage" section with 5 advantages
- "Steps to Open Your Salon Franchise" section

### ❌ Changes Required:

#### 5.1 Hero Section Tagline
**Current:** Hero video without tagline overlay  
**Required:** Add "UNLOCK THE OPPORTUNITY" tagline overlay on hero video  
**File:** `src/components/Franchise/franchise.jsx`  
**Lines:** ~89-99  
**Change:** Add text overlay on video:
```jsx
<div className="absolute inset-0 flex items-center justify-center z-10">
  <h1 className="text-white text-4xl md:text-6xl font-light">
    UNLOCK THE OPPORTUNITY
  </h1>
</div>
```

---

#### 5.2 Success Stories Section
**Current:** NO Success Stories section exists  
**Required:** Add "Success Stories from Our Salon Franchise in Bangalore" section  
**File:** `src/components/Franchise/franchise.jsx`  
**Location:** After "Steps" section, before final CTA  
**Content Needed:**
- Section title: "Success Stories from Our Salon Franchise in Bangalore"
- Decorative flower divider (❀)
- Paragraph about franchisee success stories
- Optional: Testimonial cards or quotes from franchisees

---

#### 5.3 Final CTA Section
**Current:** Form exists but no prominent final "Contact Us" CTA section  
**Required:** Add final call-to-action section before footer  
**File:** `src/components/Franchise/franchise.jsx`  
**Location:** After Success Stories, before Footer  
**Content Needed:**
- Section title: "How to Get Started" or "A Profitable Business Opportunity Awaits"
- Paragraph about opportunity
- Prominent "Contact Us" or "Become a Franchisee" button
- Link to form or scroll to form section

---

## SUMMARY OF PRIORITY CHANGES

### HIGH PRIORITY:
1. ✅ Home Page: Fix "Explore" button link (CocoSection → `/services`)
2. ✅ Home Page: Replace Lorem Ipsum in Welcome section
3. ✅ Home Page: Add Blogs section
4. ✅ Home Page: Add Testimonials section
5. ✅ Services Page: Restructure to show 6 top-level categories with "Read More" buttons
6. ✅ All Service Pages: Add Store Locator + Why SCENT components
7. ✅ All Service Pages: Add YouTube Customer Experience sections (where missing)
8. ✅ Franchise Page: Add "UNLOCK THE OPPORTUNITY" hero tagline
9. ✅ Franchise Page: Add Success Stories section
10. ✅ Franchise Page: Add final CTA section

### MEDIUM PRIORITY:
- Verify all subcategory lists match document exactly
- Ensure Navbar dropdown matches new structure
- Update any placeholder content with final copy

### LOW PRIORITY:
- Verify all images/assets are final versions
- Check all links and routing
- Final content review and copy updates

---

## NOTES FOR IMPLEMENTATION

1. **Reusable Components:** 
   - `<FindNearest />` and `<WhyScent />` already exist - import and add to each service page
   - Create reusable YouTube video gallery component for consistency

2. **Routing:**
   - Decide if `/services` should remain Hair Care focused or become overview page
   - Consider creating dedicated routes: `/hair-care`, `/skin-care`, `/beauty` if needed

3. **Content:**
   - All placeholder text (Lorem Ipsum) needs final copy from document
   - All service descriptions need to match document specifications

4. **Testing:**
   - After changes, verify all links work correctly
   - Test carousel/slider functionality
   - Verify responsive design on all pages

---

**Document Created:** Based on SCENT WEBSITE STRUCTURE specification  
**Last Updated:** [Current Date]  
**Status:** Ready for Implementation
