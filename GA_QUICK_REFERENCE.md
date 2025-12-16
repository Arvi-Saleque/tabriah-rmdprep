# 🎯 Google Analytics Quick Reference

## Your Tracking ID
```
G-E7772SZ5HK
```

## 📊 Daily Check Dashboard (5 minutes)

### 1. Realtime (See NOW)
👉 **Link:** Realtime → Overview
- Active users right now
- What pages they're on
- Where they're from

### 2. Today's Traffic
👉 **Link:** Reports → Engagement → Overview
- Total visitors today
- Total page views
- Average time on site

### 3. New Registrations Today
👉 **Link:** Reports → Engagement → Events
- Filter: `form_submit`
- Label: `Registration Success`
- Count = New registrations

---

## 📈 Weekly Deep Dive (30 minutes)

### Monday Morning Checklist:

#### 1. Traffic Growth
- **Reports → Overview**
- Compare last 7 days vs previous 7 days
- Look for: ⬆️ or ⬇️ trend

#### 2. Top Pages
- **Reports → Engagement → Pages**
- Which pages got most visits?
- Which pages had longest engagement time?

#### 3. Registration Funnel
- **Explore → Funnel exploration**
- How many reached Step 1, 2, 3?
- Where did people drop off?

#### 4. Button Performance
- **Reports → Engagement → Events**
- Filter: `button_click`
- Which buttons got most clicks?

#### 5. Traffic Sources
- **Reports → Acquisition → Traffic**
- Where did visitors come from?
- Which source converts best to registrations?

---

## 🎓 What Each Event Means

| Event Name | What It Tracks | Where to See |
|------------|----------------|--------------|
| `page_view` | Someone visited a page | Pages and screens |
| `button_click` | Someone clicked a button | Events → button_click |
| `navigation` | Someone used nav menu | Events → navigation |
| `form_step_next` | Moved to next registration step | Events → form_step_next |
| `form_step_back` | Went back in registration | Events → form_step_back |
| `form_submit` | Completed registration | Events → form_submit |
| `video_click` | Clicked class video | Events → video_click |
| `resource_click` | Downloaded resource | Events → resource_click |

---

## 🚀 Quick Actions

### See Live Visitors Right Now:
1. Open GA → Realtime
2. You'll see active users on map
3. Click "Page path" to see which pages

### Find Most Popular Page:
1. Reports → Engagement → Pages
2. Sort by "Views" (highest first)
3. Check "Average engagement time"

### Check Registration Conversion:
1. Reports → Engagement → Events
2. Event: `form_submit` 
3. Filter label: "Registration Success"
4. Compare with total page_view on /register

**Formula:** (Registrations / Register page views) × 100 = Conversion %

### See Which Buttons Work Best:
1. Reports → Events
2. Event: `button_click`
3. Group by: Event label
4. Sort by: Event count

### Track Video Engagement:
1. Reports → Events
2. Event: `video_click`
3. Check event value (class number)
4. See which classes are popular

---

## 📱 Mobile App Quick Access

**Download:** "Google Analytics" app

**Setup:**
1. Sign in with your Google account
2. Select property: "ramadan-prep"
3. Get push notifications for spikes

**Use For:**
- Quick daily check (30 seconds)
- Monitor during marketing campaigns
- Get alerts for traffic spikes

---

## 🎯 Success Metrics

### Good Numbers to Aim For:

| Metric | Target | How to Check |
|--------|--------|--------------|
| Daily Visitors | Growing trend | Reports → Overview |
| Bounce Rate | < 60% | Engagement → Pages |
| Avg Session Time | > 2 min | Engagement → Overview |
| Registration Rate | > 5% | Compare registrations to /register views |
| Return Visitors | > 20% | Reports → User → Demographics |

---

## 🔥 Power User Tips

### Tip 1: Create Segments
**Location:** Explore → Add segment
**Useful Segments:**
- Mobile users only
- Users from Dhaka
- Completed registration
- Watched videos

### Tip 2: Set Up Alerts
**Location:** Admin → Alerts
**Recommended:**
- Traffic spike (50% increase)
- New registration (form_submit)
- Low traffic (<5 users/day)

### Tip 3: Export Weekly Report
**Every Monday:**
1. Go to any report
2. Click share icon (top right)
3. Download PDF or CSV
4. Track trends over time

### Tip 4: Use Comparisons
**Always compare:**
- This week vs last week
- This month vs last month
- Weekday vs weekend traffic

---

## 🆘 Troubleshooting

**Problem:** No data showing
- ✅ Wait 24 hours (data processes daily)
- ✅ Check Realtime (shows immediately)
- ✅ Open site in incognito, watch Realtime

**Problem:** Too many page views
- Could be your own visits
- Exclude your IP in Admin settings
- Use "Exclude developer traffic" filter

**Problem:** Events not showing
- ✅ Check browser console for errors
- ✅ Disable ad blockers for testing
- ✅ Use "DebugView" in GA (admin → DebugView)

---

## 📞 Need Help?

**Full Guide:** See `GOOGLE_ANALYTICS_GUIDE.md` in project root

**Google Support:** https://support.google.com/analytics

**Test Tracking:**
1. Open your site in incognito
2. Open GA → Realtime
3. Click around your site
4. Watch events appear in Realtime

---

## 💡 Weekly Review Template

**Copy this to your notes:**

```
Week of [Date]
==================

Traffic:
- Total visitors: ___
- vs last week: ___ (+/- %)

Top Pages:
1. _____ (___views)
2. _____ (___views)  
3. _____ (___views)

Registrations:
- Total: ___
- Conversion rate: ___%
- Drop-off at: Step ___

Traffic Sources:
- Direct: ___%
- Social: ___%
- Search: ___%

Actions for Next Week:
- [ ] _______________
- [ ] _______________
```

---

## 🎯 Your First Week Goals

### Day 1-2: Setup Verification
- [ ] See your own visit in Realtime
- [ ] Click buttons, see events in Realtime
- [ ] Test registration form tracking

### Day 3-4: Learn Interface
- [ ] Find top pages report
- [ ] Check traffic sources
- [ ] Review event tracking

### Day 5-7: Create Dashboards
- [ ] Create daily overview dashboard
- [ ] Set up traffic alert
- [ ] Export your first report

---

**Remember:** 
- Check Realtime to test (instant)
- Check full reports for trends (24hr delay)
- Focus on weekly trends, not daily fluctuations

**Happy Tracking! 📊✨**
