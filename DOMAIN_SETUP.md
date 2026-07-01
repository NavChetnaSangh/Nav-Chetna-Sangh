# Domain Setup Guide — navchetnasangh.org

## Step 1 — Buy the Domain (Namecheap)

1. Go to namecheap.com
2. Log in with the org account (navchetnasanghcharitabletrust@gmail.com)
3. Search for `navchetnasangh.org` and add to cart
4. In checkout, keep:
   - Domain Registration (1 Year) ✅
   - Domain Privacy (free) ✅
5. Remove / skip:
   - PremiumDNS ❌
   - Stellar Web Hosting ❌
   - Web Hosting / Business Email ❌
6. Pay using a Visa/Mastercard card (international payments must be enabled on the card)

---

## Step 2 — Add Domain to Vercel

1. Go to vercel.com and log in with the org's Vercel account
2. Open the NavChetna project
3. Go to **Settings** → **Domains**
4. Click **Add Domain** → type `navchetnasangh.org` → click Add
5. Also add `www.navchetnasangh.org` → Vercel will redirect it to the main domain

---

## Step 3 — Configure DNS on Namecheap

Vercel will show you DNS records to add. They will look like:

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | 76.76.21.21            |
| CNAME | www  | cname.vercel-dns.com   |

To add them:
1. Go to namecheap.com → log in → **Domain List**
2. Click **Manage** next to navchetnasangh.org
3. Go to **Advanced DNS** tab
4. Delete any existing A or CNAME records
5. Add the records Vercel gave you exactly
6. Save changes

---

## Step 4 — Add Domain to Sanity CORS

1. Go to sanity.io/manage
2. Select NavChetnaCharitableTrust project
3. Click **API** → **CORS Origins** → **Add CORS origin**
4. Add: `https://navchetnasangh.org`
5. Also add: `https://www.navchetnasangh.org`
6. No need to check "Allow credentials" for these

---

## Step 5 — Submit Sitemap to Google Search Console

1. Go to search.google.com/search-console
2. Click **Add Property** → enter `navchetnasangh.org`
3. Verify ownership (Vercel method or HTML tag method)
4. Go to **Sitemaps** → Submit: `https://navchetnasangh.org/sitemap.xml`
5. Google will start indexing within 1-4 weeks

---

## Notes

- DNS propagation takes 10-60 minutes after adding records
- The site will be live at https://navchetnasangh.org once DNS propagates
- Vercel auto-renews SSL certificate (HTTPS) for free
- Domain renewal: ~₹1,400/yr from 2nd year onwards (first year discounted)
- Razorpay: add navchetnasangh.org to allowed websites in Razorpay Dashboard → Settings → Website & App
