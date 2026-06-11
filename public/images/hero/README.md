# Hero assets

| File | Purpose |
|------|---------|
| `welder.png` | Homepage hero welder photo (use as provided — no processing) |
| `welder.webp` | WebP format conversion only |

Replace by copying the new file over `welder.png`, then optional WebP:

```bash
python -c "from PIL import Image; i=Image.open('path/to/Welder.png'); i.save('public/images/hero/welder.png'); i.save('public/images/hero/welder.webp','WEBP',quality=92)"
```

Used **only** in the homepage hero.
