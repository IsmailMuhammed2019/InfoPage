# DBI Campus Photos Guide

## 📸 Adding Actual DBI Campus Photos

To replace the placeholder images with actual DBI campus photos, follow these steps:

### 1. **Photo Requirements**
- **Format**: JPG, JPEG, or PNG
- **Size**: Minimum 800x600 pixels (recommended 1200x800)
- **Quality**: High resolution, clear images
- **Aspect Ratio**: 16:9 or 4:3 works best

### 2. **Photo Content Suggestions**
For each campus, capture photos of:
- **Exterior building shots** (main entrance, campus overview)
- **Modern training facilities** (computer labs, classrooms)
- **Technology infrastructure** (servers, networking equipment)
- **Student areas** (libraries, study spaces)
- **Professional environment** (conference rooms, meeting spaces)

### 3. **File Naming Convention**
Rename your photos using this format:
```
dbi-abuja-campus.jpg
dbi-lagos-campus.jpg
dbi-enugu-campus.jpg
dbi-kano-campus.jpg
dbi-yola-campus.jpg
```

### 4. **Adding Photos to Project**

1. **Place photos** in the `public/assets/` folder
2. **Update the campus showcase component** by replacing the image paths:

```typescript
// In components/campus-showcase.tsx
const campuses = [
  {
    name: "DBI Abuja",
    // ... other properties
    image: "/assets/dbi-abuja-campus.jpg", // Updated path
  },
  {
    name: "DBI Lagos",
    // ... other properties
    image: "/assets/dbi-lagos-campus.jpg", // Updated path
  },
  // ... continue for all campuses
]
```

### 5. **Current Placeholder Images**
The current setup uses these placeholder images:
- **image1.jpeg** → DBI Abuja & DBI Kano
- **image2.jpg** → DBI Lagos & DBI Yola  
- **image3.jpg** → DBI Enugu

### 6. **Photo Sources**
You can obtain campus photos from:
- **DBI Marketing Department**
- **Campus Administrators**
- **Professional photographers** (recommended)
- **Student submissions** (with permission)

### 7. **Legal Considerations**
- Ensure you have **permission** to use the photos
- **Credit photographers** if required
- **Verify image rights** before publishing
- **Update privacy policies** if people are visible in photos

### 8. **Optimization Tips**
- **Compress images** for web (max 500KB per image)
- **Use descriptive alt text** for accessibility
- **Test loading speed** after adding photos
- **Ensure mobile responsiveness**

### 9. **Alternative Approach**
If you don't have actual campus photos yet, consider:
- **Professional stock photos** of modern tech facilities
- **Generic office/classroom images** that represent DBI's standards
- **Placeholder images** with campus names overlaid
- **Virtual campus tours** or 3D renderings

### 10. **Implementation Steps**
1. Collect high-quality campus photos
2. Optimize images for web use
3. Upload to `public/assets/` folder
4. Update `components/campus-showcase.tsx`
5. Test the display on different devices
6. Update alt text for accessibility

## 🎯 Recommended Photo Specifications

| Campus | Recommended Photo | Description |
|--------|------------------|-------------|
| DBI Abuja | Main building exterior | Show the flagship campus |
| DBI Lagos | Modern tech facilities | Highlight commercial hub location |
| DBI Enugu | Training classrooms | Emphasize eastern region presence |
| DBI Kano | Innovation spaces | Show northern Nigeria excellence |
| DBI Yola | Student areas | Demonstrate northeast empowerment |

## 📞 Contact Information
For assistance with campus photos, contact:
- **DBI Marketing Team**: marketing@dbi.gov.ng
- **Campus Administrators**: See individual campus contact details
- **Technical Support**: tech@dbi.gov.ng

---

*Last updated: January 2025* 