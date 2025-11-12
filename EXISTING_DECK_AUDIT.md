# 🔍 EXISTING DECK AUDIT & PRESERVATION GUIDE
**What to Keep, What to Transform, What to Delete**  
**Based on Current 87 Slides vs. New Requirements**

---

## ✅ SLIDES TO PRESERVE (With Minor Updates)

### **Strong Slides Worth Keeping:**

| Current Slide | File | Why Keep | Minor Updates Needed |
|--------------|------|----------|---------------------|
| **Slide 5** | `AlphaGapSlide.jsx` | Stanford 93% study is powerful validation | Verify citation, ensure accurate |
| **Slide 6** | `MarketSwitchingSlide.jsx` | 46% switching - great market timing | Keep as-is, strong PwC data |
| **Slide 7** | `AlphaGapSlide.jsx` | Perfect problem setup | Simplify jargon (FPI, STT) |
| **Slide 30** | `MarketOpportunitySlide.jsx` | TAM/SAM/SOM defensible | Keep numbers, update design |
| **Tech Appendix** | Slides 67-94 | Excellent technical validation | Move to appendix, don't delete |

### **Good Concepts to Transform:**

| Current Slide | Transformation Required | New Purpose |
|--------------|------------------------|-------------|
| **ProductOverviewSlide** | From circular to 3-phase horizontal | Wedge & Expand strategy |
| **TeamSlide** | Verify credentials, add partners | Include Vora partnership |
| **FinancialProjections** | Label as "projections" not traction | Pro-forma post-seed |

---

## 🔄 SLIDES REQUIRING MAJOR TRANSFORMATION

### **Critical Rewrites:**

| Current | Problem | Solution |
|---------|---------|----------|
| **TitleSlide** | Fake badges, generic title | ARIA brand, 3 moats, Vora backing |
| **ExecutiveSummarySlide** | Fake traction ($42M AUM) | Opportunity-driven, honest positioning |
| **AgendaRoadmapSlide** | Outdated 5-step journey | New 5-Act structure |
| **FundingSlide** | Claims $1.5M committed | Honest $5M ask with clear use |

---

## ❌ SLIDES TO DELETE COMPLETELY

### **Credibility Destroyers (Delete Immediately):**

1. **Fake Case Studies (Slides 35-37):**
   - `CaseStudy1Slide.jsx`
   - `CaseStudy2Slide.jsx`
   - `CaseStudy3Slide.jsx`
   - These claim clients that don't exist

2. **Fake Customer Journeys (Slides 38-40):**
   - `CustomerJourney1Slide.jsx`
   - `CustomerJourney2Slide.jsx`
   - `CustomerJourney3Slide.jsx`
   - Based on fictional personas

3. **Redundant GIFT City Section (Slides 57-66):**
   - Already covered in main moat section
   - Too detailed for main deck
   - Move key points to moat slides

---

## 🆕 NEW SLIDES TO CREATE

### **Priority 1 - Brand & Strategy:**

| New Slide | Purpose | Content Source | Implementation |
|-----------|---------|----------------|----------------|
| **Introducing ARIA** | Establish brand identity | Gemini Deck p.3 | Create `IntroducingARIASlide.jsx` |
| **Wedge & Expand** | 3-phase strategy | Master DD p.2 | Create `WedgeExpandSlide.jsx` |
| **ARIA Fund Manager** | Connect tech to product | Master DD p.4 | Create `ARIAFundManagerSlide.jsx` |

### **Priority 2 - Differentiation:**

| New Slide | Purpose | Content Source | Implementation |
|-----------|---------|----------------|----------------|
| **Digital Family Office OS** | Show value prop | Master DD p.5 | Create `FamilyOfficeOSSlide.jsx` |
| **US Tech Strategy** | Plaid vs Alpaca | Gemini Deck p.9 | Create `USTechStrategySlide.jsx` |
| **Go-to-Market** | B2B2C strategy | Master DD p.7-8 | Create `GoToMarketSlide.jsx` |

---

## 📂 FILE STRUCTURE RECOMMENDATIONS

### **Current Structure (Keep):**
```
/src/slides/
  ├── Act1Slide.jsx ✅ (Keep act dividers)
  ├── Act2Slide.jsx ✅
  ├── Act3Slide.jsx ✅
  ├── Act4Slide.jsx ✅
  ├── Act5Slide.jsx ✅
  └── SlideStyles.css ✅ (Already optimized)
```

### **Files to Add:**
```
/src/slides/
  ├── IntroducingARIASlide.jsx 🆕
  ├── WedgeExpandSlide.jsx 🆕
  ├── ARIAFundManagerSlide.jsx 🆕
  ├── FamilyOfficeOSSlide.jsx 🆕
  ├── USTechStrategySlide.jsx 🆕
  └── GoToMarketSlide.jsx 🆕
```

### **Files to Delete:**
```
/src/slides/
  ├── CaseStudy1Slide.jsx ❌
  ├── CaseStudy2Slide.jsx ❌
  ├── CaseStudy3Slide.jsx ❌
  ├── CustomerJourney1Slide.jsx ❌
  ├── CustomerJourney2Slide.jsx ❌
  └── CustomerJourney3Slide.jsx ❌
```

---

## 🎨 DESIGN ASSETS TO PRESERVE

### **Keep These Visual Elements:**
- Gradient backgrounds (teal, purple, blue)
- Animation patterns (Framer Motion)
- Icon library (Lucide React)
- Chart components (Recharts)
- Dark theme foundation

### **Update These Elements:**
- Replace generic "AI" icons with ARIA brand
- Update color palette to Electric Teal primary
- Standardize spacing (already optimized for PDF)

---

## 💻 CODE PATTERNS TO PRESERVE

### **Good Patterns in Existing Code:**

```jsx
// Keep this animation pattern
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>

// Keep gradient text component
<GradientText gradient="from-teal-400 to-cyan-400">

// Keep responsive utilities
pxToRem(16)
```

### **Patterns to Standardize:**

```jsx
// Replace varied data with consistent structure
const metrics = {
  current: "Working Prototype",
  validated: "NSE Integration Live",
  pipeline: "50 CPAs via Ascendum"
}

// Not this:
const metrics = {
  aum: "$42M",  // FALSE
  clients: 27    // FALSE
}
```

---

## 📊 CONTENT MIGRATION GUIDE

### **From Existing Slides → New Narrative:**

| Old Content | Migration Path | New Location |
|-------------|----------------|--------------|
| AI Committee concept | Rebrand as ARIA | Throughout deck |
| 7 modules in circle | Transform to 3 phases | Wedge & Expand slide |
| India problem slides | Keep, enhance with Vora | Moat section |
| Tax optimization data | Keep, cite sources | Phase 3 product |
| Tech stack details | Keep in appendix | Technical validation |

---

## 🔧 TECHNICAL MODIFICATIONS

### **App.jsx Updates:**
```jsx
// Update slide order array
const slides = [
  TitleSlide,           // Updated with ARIA
  ExecutiveSummarySlide, // Rewritten
  AgendaSlide,          // New 5-act structure
  Act1Slide,            // Keep
  AlphaGapSlide,        // Keep
  MarketSwitchingSlide, // Keep
  
  Act2Slide,            // Keep
  IntroducingARIASlide, // NEW
  WedgeExpandSlide,     // NEW
  
  Act3Slide,            // Keep
  IndiaMoatSlide,       // Update
  ARIAFundManagerSlide, // NEW
  DataEngineMoatSlide,  // Update
  FamilyOfficeOSSlide,  // NEW
  USTechStrategySlide,  // NEW
  
  Act4Slide,            // Keep
  PrototypeSlide,       // Update with real data
  
  Act5Slide,            // Keep
  GoToMarketSlide,      // NEW
  ProjectionsSlide,     // Update as pro-forma
  TeamSlide,            // Update
  TheAskSlide,          // Rewrite
  
  // Appendix (optional viewing)
  ...technicalSlides
];
```

---

## ✅ VALIDATION BEFORE LAUNCH

### **Content Checklist:**
- [ ] All fake metrics removed
- [ ] ARIA brand consistent throughout
- [ ] Vora partnership clearly stated
- [ ] No claims of live clients/AUM
- [ ] Projections labeled as projections

### **Technical Checklist:**
- [ ] All slides fit in 16:9 (no scroll)
- [ ] PDF export works correctly
- [ ] Animations perform smoothly
- [ ] No console errors
- [ ] Mobile warning displays

### **Story Checklist:**
- [ ] 5-act structure flows logically
- [ ] Wedge & Expand strategy clear
- [ ] 3 moats well explained
- [ ] Prototype validation shown
- [ ] Ask and use of funds specific

---

## 🚨 RISK MITIGATION

### **Backup Strategy:**
1. **Keep original deck** in Git branch
2. **Test with advisors** before investors
3. **Have appendix ready** for deep questions
4. **Prepare FAQ document** for common concerns

### **Version Control:**
```bash
# Create backup branch
git checkout -b original-deck-backup

# Create new transformation branch  
git checkout -b aria-transformation

# Commit changes incrementally
git add -p  # Partial adds for careful review
```

---

## 📈 EXPECTED IMPACT

### **Before Transformation:**
- ❌ Investors see through fake traction
- ❌ Story doesn't differentiate from Arta
- ❌ No clear moats or GTM strategy
- ❌ Trust destroyed in first 2 slides

### **After Transformation:**
- ✅ Honest, credible positioning
- ✅ Clear differentiation via B2B2C
- ✅ 3 defensible moats explained
- ✅ Real prototype validates tech
- ✅ Compelling investment opportunity

---

**SUMMARY:** 
- **Keep:** ~20% of existing slides (validated content)
- **Transform:** ~40% of slides (good concepts, wrong framing)
- **Delete:** ~30% of slides (fake/redundant)
- **Create New:** ~10% of slides (critical gaps)

**Result:** From 87 confused slides → 35 focused slides + technical appendix

**Next Step:** Begin with deleting fake content (Day 1 priority)
