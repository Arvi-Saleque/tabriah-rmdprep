# Google Analytics Complete Tracking Guide

## 📊 What We're Tracking

Your website now tracks:
- ✅ **Page Views** - Every page visit
- ✅ **Button Clicks** - All buttons with location context
- ✅ **Navigation** - Where users go from each page
- ✅ **Form Interactions** - Registration form progress (Step 1, 2, 3)
- ✅ **Form Submissions** - Complete registrations
- ✅ **Video Clicks** - Which class videos users try to watch
- ✅ **Resource Clicks** - Which resources users download
- ✅ **Social Media Clicks** - WhatsApp/Telegram links
- ✅ **Admin Actions** - Verification actions in admin panel

---

## 🎯 How to See Your Data in Google Analytics

### 1. **REALTIME DATA** (See What's Happening Now)

**Where to Go:** `Realtime` (left sidebar) → `Overview`

**What You'll See:**
- 👥 **Active users right now** - Top of page
- 📍 **Active users per minute** - Graph showing last 30 minutes
- 📄 **Page path and screen class** - Which pages users are on RIGHT NOW
- 🗺️ **User location on map** - Where your visitors are from (cities/countries)

**Best For:**
- Testing if tracking is working (open your site and watch yourself appear!)
- Seeing immediate impact of sharing your link
- Monitoring during course launch

---

### 2. **PAGE VIEWS** (Which Pages Are Popular)

#### Method 1: Pages and Screens Report
**Where to Go:** `Reports` → `Engagement` → `Pages and screens`

**What You'll See:**
| Column | Meaning |
|--------|---------|
| **Page path** | The URL (/, /register, /syllabus, etc.) |
| **Views** | Total times page was viewed |
| **Users** | How many different people viewed it |
| **Average engagement time** | How long they stayed |
| **Event count** | Total interactions on that page |

**Use This To:**
- Find your most popular pages
- See which pages people spend most time on
- Identify pages with high bounce rate (people leaving quickly)

#### Method 2: Path Exploration
**Where to Go:** `Explore` → `Path exploration` (left sidebar)

**What You'll See:**
- Visual flow of user journey
- Starting page → Next page → Next page
- Drop-off points where users leave

**Use This To:**
- Understand user journey through your site
- Find where people get stuck or leave
- Optimize navigation flow

---

### 3. **BUTTON CLICKS** (What Users Are Clicking)

**Where to Go:** `Reports` → `Engagement` → `Events`

**Filter by:** Event name = `button_click`

**What You'll See:**
- Event count (total button clicks)
- Users (how many people clicked)
- Event label shows: "Button Name - Location"

**Examples:**
- `শেখা শুরু করুন - Hero Section` = Register button on homepage
- `সিলেবাস দেখুন - Hero Section` = Syllabus button on homepage
- `পরবর্তী - Registration Form` = Next button in registration

**Use This To:**
- See which CTAs (Call To Actions) are most effective
- Compare hero buttons vs navbar clicks
- Optimize button placement

---

### 4. **NAVIGATION TRACKING** (User Flow)

**Where to Go:** `Reports` → `Engagement` → `Events`

**Filter by:** Event name = `navigation`

**What You'll See:**
Event labels like: `Source → Destination`
- `Navbar → Register` = Clicked Register from navbar
- `Home Hero → Syllabus` = Clicked Syllabus button from homepage
- `Mobile Menu → Teachers` = Used mobile menu to go to Teachers page

**Use This To:**
- Understand which navigation is most used (navbar vs mobile vs CTA buttons)
- See popular page transitions
- Improve navigation UX

---

### 5. **REGISTRATION FUNNEL** (Form Completion)

**Where to Go:** `Reports` → `Engagement` → `Events`

**Filter by:** Event name = `form_step_next`, `form_step_back`, `form_submit`

**What You'll See:**

| Event | Meaning |
|-------|---------|
| `form_step_next` | User progressed to next step |
| `form_step_back` | User went back a step |
| `form_submit - Registration Complete` | Started final submission |
| `form_submit - Registration Success` | Successfully registered |

**Event Value:**
- Step 1 = value 1
- Step 2 = value 2  
- Step 3 = value 3

**Use This To:**
- Calculate drop-off rate between steps
- See which step people abandon most
- Measure conversion rate (started vs completed)

#### Creating a Funnel Report:
1. Go to `Explore` → Create a new exploration
2. Choose "Funnel exploration"
3. Add steps:
   - Step 1: page_view (page = /register)
   - Step 2: form_step_next (value = 1)
   - Step 3: form_step_next (value = 2)
   - Step 4: form_submit (label contains "Success")

**You'll Get:**
- Completion rate for each step
- Drop-off percentage
- Time between steps

---

### 6. **VIDEO & RESOURCE CLICKS**

**Where to Go:** `Reports` → `Engagement` → `Events`

**Filter by:** 
- Event name = `video_click` or `video_unavailable`
- Event name = `resource_click` or `resource_unavailable`

**What You'll See:**
- Event label: `Class 1`, `Class 2`, etc.
- Event value: Class number
- `video_unavailable` = Clicked but no link uploaded yet
- `video_click` = Successfully clicked working link

**Use This To:**
- See which classes are most popular
- Know which videos need to be uploaded (unavailable clicks)
- Track engagement with course content

---

### 7. **TRAFFIC SOURCES** (Where Visitors Come From)

**Where to Go:** `Reports` → `Life cycle` → `Acquisition` → `Traffic acquisition`

**What You'll See:**
| Source | Meaning |
|--------|---------|
| Direct | Typed URL directly or bookmark |
| Organic Social | Facebook, Instagram shares |
| Referral | From another website link |
| Organic Search | Google search |
| WhatsApp / Telegram | Messengers (if shared there) |

**Use This To:**
- Know which marketing channels work best
- Track social media campaign effectiveness
- Understand where to focus promotion efforts

---

### 8. **USER DEMOGRAPHICS & LOCATION**

**Where to Go:** `Reports` → `User` → `User attributes` → `Demographics details`

**What You'll See:**
- Countries
- Cities
- Languages
- Device types (mobile/desktop)
- Browser types

**For Location Specifically:**
`Reports` → `User` → `Tech` → `User location`

**Shows:**
- Map visualization
- User count by city
- Most popular regions

**Use This To:**
- Know your audience geography
- Plan class timing for different time zones
- Target local marketing

---

### 9. **DEVICE & BROWSER DATA**

**Where to Go:** `Reports` → `User` → `Tech details`

**What You'll See:**
- Mobile vs Desktop usage
- Browser types (Chrome, Firefox, Safari, etc.)
- Operating systems
- Screen resolutions

**Use This To:**
- Ensure site works well on popular devices
- Prioritize mobile/desktop optimization
- Fix browser-specific issues

---

### 10. **CUSTOM REPORTS YOU SHOULD CREATE**

#### A) Registration Conversion Report
**Create:** `Explore` → New exploration → Funnel

**Setup:**
```
Step 1: page_view (/register)
Step 2: button_click (পরবর্তী - Step 1)
Step 3: button_click (পরবর্তী - Step 2)
Step 4: form_submit (Registration Success)
```

**Gives You:** Exact % drop-off at each registration step

#### B) Popular Content Report
**Create:** `Explore` → Free form

**Dimensions:** Page path, Event name
**Metrics:** Views, Users, Average engagement time
**Filter:** Only page_view events

**Gives You:** Ranked list of most engaging pages

#### C) Button Performance Report
**Create:** `Explore` → Free form

**Dimensions:** Event label
**Metrics:** Event count, Users
**Filter:** Event name = button_click

**Gives You:** Which buttons get most clicks

---

## 📱 Google Analytics Mobile App

**Download:** iOS App Store or Google Play Store

**Benefits:**
- Check stats on your phone anytime
- Get notifications for traffic spikes
- Monitor during marketing campaigns
- Quick overview dashboard

---

## 🎓 Key Metrics to Watch Daily/Weekly

### Daily Metrics:
1. **Active Users** (Realtime) - Is anyone on site now?
2. **Page Views Today** - Total visits
3. **Top Pages** - What's popular today
4. **New Registrations** (form_submit success events)

### Weekly Metrics:
1. **Total Users** - How many people this week
2. **Page Views Trend** - Growing or declining?
3. **Registration Conversion Rate** - % of visitors who register
4. **Top Traffic Sources** - Where users come from
5. **Popular Class Videos** - Which content engages most

### Monthly Metrics:
1. **User Growth Rate** - Month over month
2. **Registration Completion Rate** - Funnel analysis
3. **Average Engagement Time** - Are users engaging more?
4. **Device Breakdown** - Mobile vs desktop trends

---

## 🔔 Setting Up Alerts

**Where to Go:** Admin (gear icon) → Property → Custom alerts

**Recommended Alerts:**

1. **Spike in Traffic Alert**
   - Condition: Users increased by 50% vs previous day
   - Get notified: You're going viral! 🚀

2. **New Registration Alert**
   - Condition: form_submit (success) event occurs
   - Get notified: New student registered!

3. **Low Traffic Alert**
   - Condition: Users < 5 in last 24 hours
   - Get notified: Time to market more

---

## 💡 Pro Tips

### Tip 1: Use Segments
Create segments to filter data:
- "Mobile users only"
- "Users from Dhaka"
- "Users who registered"
- "Returning visitors"

### Tip 2: Compare Date Ranges
Always compare:
- This week vs last week
- This month vs last month
- Before marketing vs after marketing

### Tip 3: Set Goals
Mark these as conversions:
- `form_submit` (Registration Success)
- `button_click` (শেখা শুরু করুন)
- `video_click` (Any class video)

**How:** Admin → Events → Mark as conversion

### Tip 4: Export Reports
- Click "Share" icon → Download CSV
- Create weekly reports for review
- Track progress over time

---

## 🚨 Troubleshooting

**Problem:** No data showing
- **Check:** Is GA_ID correct in `.env.local`?
- **Test:** Open site in incognito, check Realtime report

**Problem:** Events not tracking
- **Check:** Browser console for errors
- **Test:** Click button, watch Realtime → Events

**Problem:** Duplicate page views
- **Cause:** Multiple GA snippets
- **Fix:** Remove old GA code if exists

---

## 📊 Sample Dashboard Setup

Create custom dashboard:

**Name:** "Daily Overview"

**Widgets:**
1. Scorecard: Active users (Realtime)
2. Line chart: Users over time (7 days)
3. Table: Top pages by views
4. Pie chart: Traffic sources
5. Bar chart: Button clicks by type
6. Table: Registration funnel (steps)
7. Geo map: User locations
8. Line chart: Form submissions trend

**How to Create:**
1. `Reports` → Library
2. Click "Create" → "Dashboard"
3. Add widgets by clicking "Add card"
4. Drag/resize to arrange

---

## 🎯 Success Metrics to Aim For

**Good Numbers:**
- **Bounce Rate:** < 60% (people viewing multiple pages)
- **Average Session Duration:** > 2 minutes
- **Registration Conversion:** > 5% (5 out of 100 visitors register)
- **Mobile Traffic:** > 50% (in Bangladesh, most use mobile)
- **Page Load Speed:** < 3 seconds

**Track Weekly:**
- New visitors trend (should be growing)
- Registration completion rate (should improve as you optimize)
- Return visitor rate (shows growing interest)

---

## 📅 Weekly Review Checklist

Every Monday, check:
- [ ] Total visitors last 7 days vs previous 7 days
- [ ] Top 3 performing pages
- [ ] Registration conversion rate
- [ ] Most clicked buttons
- [ ] Most popular class videos
- [ ] Traffic source breakdown
- [ ] Any error patterns or drop-offs

**Export this data** to track trends over months.

---

## 🔥 Advanced: Custom Dimensions (Optional)

If you want to track:
- User registration status (registered/not registered)
- User's selected course level (beginner/intermediate/advanced)
- Experiment variants (A/B testing)

You can set up custom dimensions in GA4 Admin panel.

---

## Need Help?

**Google Analytics Help Center:** https://support.google.com/analytics

**Debug View:** 
1. Install "Google Analytics Debugger" Chrome extension
2. Enable it
3. Open browser console
4. See live events firing

**Realtime Report:** Best tool for testing - see events immediately!

---

## Summary: Quick Access Links

| What You Want | Where to Go |
|---------------|-------------|
| See live visitors | Realtime → Overview |
| Page popularity | Engagement → Pages and screens |
| Button clicks | Engagement → Events (filter: button_click) |
| User journey | Explore → Path exploration |
| Registration funnel | Explore → Funnel exploration |
| Traffic sources | Acquisition → Traffic acquisition |
| User location | User → Tech → User location |
| Custom reports | Explore → Create new |

---

**Remember:** Data takes 24-48 hours to fully process. Realtime shows immediately, but full reports update daily.

**Best Practice:** Check analytics weekly, not daily. Look for trends, not daily fluctuations.

Good luck with your course! 🎓📊
