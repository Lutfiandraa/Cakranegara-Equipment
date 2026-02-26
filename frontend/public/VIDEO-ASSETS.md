# Hero video assets

- **Video:** `caterpillar793.mp4` (H.264/MP4). Replace the old `.mov` with this file.
- **Poster (optional but recommended):** `caterpillar793-poster.jpg` — first frame shown before video plays; avoids blank area.

## Generate poster from video (one-time)

With FFmpeg installed:

```bash
cd public
ffmpeg -i caterpillar793.mp4 -vframes 1 -q:v 2 caterpillar793-poster.jpg
```

If the poster file is missing, the hero still shows a dark background (`bg-slate-900`) so the page does not look blank.
