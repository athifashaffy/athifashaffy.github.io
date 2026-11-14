# 08 · Namaskarasana · Gentle smile and 10 repetitions

14 November 2026. Frame-reviewed candidate; Jana and Steffen approval pending.

[Public video beside Relatio](https://athifashaffy.github.io/steffen/08-namaskarasana.html?v=smile-10-reps-v3-20261114)

Athif called the cartoon version “Very good”, clarified “Add a gentle, slight smile”, and requested “Make 10 repetitions now for easy exercises like this”. This revision applies those two changes without regenerating the movement.

Ten repetitions in **49.5833 seconds**, 1190 frames at 24 fps, then stop. Each cycle is 4.95833 seconds and keeps the **2.08333-second folded hold**. Gentle closed-mouth smile; blinks at 4, 8, 12, …, 48 seconds, three frames each. Male Coach, same side view and flat cartoon drawing. No audio. Standalone is 1280 × 720; comparison is 2560 × 820.

## Method and verification

- Reuses Veo run 4, sample 0, native frames 25–54 from cartoon v2. No new paid Veo generation. Original provenance remains in `../2026-11-14-cartoon-v2/generation.json`.
- A single built-in imagegen edit supplies the subtle smile. `image-generation.json` records the exact prompt. Only a small tracked mouth patch is composited, plus the existing scheduled eyelid patches. No body warping or shoe replacement.
- Visually inspected all **1190 encoded frames**, sheets `review/all-frames-00.jpg` through `18.jpg`. Inspected 88 face close-ups covering every selected source face and all twelve blinks with neighbouring open-eye frames.
- Verified all ten source mappings, identical pre-encode joins, all folded holds, uniform timestamps and no audio. Every comparison Coach panel matches the corresponding standalone frame within expected recompression (minimum PSNR 44.94 dB).
- The reference uses the same seven measured cycles, approximately 4.97163 seconds each. The seven-cycle excerpt repeats at original speed to fill the longer comparison, explicitly labelled on screen and on the page. Cycle rounding is about 13.3 ms; camera and anatomy differ.

The small moving finger-outline softness already present in the original take remains. Far limbs are partly occluded. This review is not clinical validation. Finalized exercises and app playback were not changed. Jana/Steffen approval is separate.

## Offline rebuild

Python with OpenCV, NumPy and Pillow; ffmpeg/ffprobe. No API calls:

```sh
python build_cartoon.py
python audit_video.py
python comparison.py /absolute/path/to/40.mp4
python verify_comparison.py
```

Outputs go to ignored `render/`. Visual approval must be repeated if the resulting video bytes change.
