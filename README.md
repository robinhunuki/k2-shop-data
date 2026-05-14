# k2-shop-data

CDN-served product catalog + Stripe price ID map for the K² Sportstyle shop.

Consumed by the GHL funnel at https://shop.ksquaredsportstyle.online — `catalog.html` and `product.html` Custom Code blocks load these two files via jsDelivr.

## Files

- `products.js` — product list (titles, descriptions, image URLs, variants, prices) attached to `window.K2_PRODUCTS` and `window.K2_COLLECTIONS`
- `priceids.js` — map of cart SKU keys → GHL Stripe price IDs, attached to `window.K2_PRICE_IDS`

## CDN URLs

```
https://cdn.jsdelivr.net/gh/robinhunuki/k2-shop-data@main/products.js
https://cdn.jsdelivr.net/gh/robinhunuki/k2-shop-data@main/priceids.js
```

jsDelivr auto-purges cache within ~60s of a push to `main`.

## Source of truth

Edit in EA Code Assistant at `projects/ksquared/ghl-store/build/assets/js/`. Run `projects/ksquared/ghl-store/build/scripts/push-to-cdn.py` from there to mirror changes here.
