# Images Folder

Place all website images in this folder:

## Recommended Images:
- `logo.png` - Website logo
- `hero-bg.jpg` - Hero section background
- `teacher-salek.jpg` - Hafez Salek bin Hosen photo
- `teacher-osama.jpg` - Hafez Mawlana Osama Tamim photo
- `teacher-osman.jpg` - Hafez Mawlana Mufti Osman Zubaer photo
- `quran-icon.png` - Quran/Islamic icons
- `mosque-pattern.png` - Islamic pattern for backgrounds

## Usage in Code:
```tsx
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg" 
  alt="Description" 
  width={500} 
  height={300} 
/>
```

Or for background images in CSS:
```css
background-image: url('/images/your-image.jpg');
```
