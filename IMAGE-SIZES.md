# Image size requests

Every photo slot on the page, with the size to export. Save into `images/` with the file name shown, then swap the placeholder `src`, `href` and `alt` in `index.html` and delete the `ph` class on that slot (it draws the "Placeholder" tag).

Export as **JPEG, quality 70 to 80, sRGB, metadata stripped**. WebP at the same size is fine too, and usually 25 to 35% smaller. Keep each file under the target weight so the photos stay the only heavy thing on the page.

| Slot | File name | Export size (px) | Ratio | Target weight | Notes |
|---|---|---|---|---|---|
| Hero (welcome section) | `hero.jpg` | 2400 x 1600 | 3:2 | 350 KB | Shown full width on phones (cropped 4:3) and as the right-hand panel on desktop (cropped tall, with a slanted left edge). Keep the subject in the **center third** so both crops work. Leave the left 20% plain, since the slant cuts it off. |
| Gallery 01, feature tile | `work-01.jpg` | 1600 x 1200 | 4:3 | 250 KB | The big tile. On desktop it is shown close to square, so keep the subject centered. |
| Gallery 02, 03, 05, 07 | `work-02.jpg` ... | 1600 x 1200 | 4:3 | 200 KB | One file serves both the grid and the tap-to-enlarge view. |
| Gallery 04 and 06, before/after pairs | `work-04-before.jpg`, `work-04-after.jpg` (same for 06) | 1600 x 1200 | 4:3 | 200 KB each | Shoot the before and after **from the same spot and angle**. In the grid each half is cropped narrower, so center the subject. |
| Social share image | `og-share.jpg` | 1200 x 630 | 1.91:1 | 150 KB | Used when the link is shared on Facebook, Google Business or texts. A strong job photo with the logo works well. |

Gallery total: 9 photos now (the spec allows 6 to 12). To add more, copy a `<figure class="tile">` block in `index.html`. Each caption is job type plus town.

## Optional, for faster phones

If you want to go further later, also export a **800 x 600** copy of each gallery photo (`work-02-sm.jpg` and so on, about 80 KB) and use it as the grid `src`, keeping the 1600 version as the link `href` for the enlarged view. The hero can get a **1200 x 800** copy for phones with `srcset`. Not required for launch.

## Logo files (already done)

Cut from the supplied artboards, colors snapped to the exact spec hex values:

- `images/logo-horizontal-light.png` (header, 440 x 248)
- `images/logo-arch-light.png` (footer, 480 x 350)
- `images/logo-mark.png`, `images/apple-touch-icon.png`, `favicon.png`
