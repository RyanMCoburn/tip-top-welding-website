from PIL import Image
import os

ASSETS = r'C:\Users\b_rog\.cursor\projects\d-b-rog-TipTopWelding\assets'
OUT = r'd:\b_rog\TipTopWelding\public\images'


def find(key: str) -> str:
    for f in os.listdir(ASSETS):
        if key in f:
            return os.path.join(ASSETS, f)
    raise FileNotFoundError(key)


def save(img: Image.Image, path: str, quality: int = 88) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if path.endswith('.jpg'):
        img.convert('RGB').save(path, 'JPEG', quality=quality, optimize=True)
    else:
        img.save(path, 'PNG', optimize=True)


logo = Image.open(find('2150CE5C')).convert('RGBA')
save(logo, f'{OUT}/logo/logo-dark.png')
light_bg = Image.new('RGBA', (logo.width + 48, logo.height + 32), (243, 242, 238, 255))
light_bg.paste(logo, (24, 16), logo)
save(light_bg, f'{OUT}/logo/logo-light.png')
save(logo, f'{OUT}/logo/logo.png')

truck = Image.open(find('AA910F59')).convert('RGB')
save(truck, f'{OUT}/hero/hero-truck-side.jpg', quality=90)
save(truck, f'{OUT}/hero/hero.jpg', quality=90)

truck_rear = Image.open(find('21DDA0E5')).convert('RGB')
save(truck, f'{OUT}/gallery/mobile-welding-truck-side.jpg')
save(truck_rear, f'{OUT}/gallery/mobile-welding-truck-rear.jpg')

flyer = Image.open(find('4C207E79')).convert('RGB')
w, h = flyer.size
bottom = flyer.crop((0, int(h * 0.62), w, h))
bw, bh = bottom.size
mid = bw // 2
before = bottom.crop((0, 0, mid - 4, bh))
after = bottom.crop((mid + 4, 0, bw, bh))
save(before, f'{OUT}/projects/boat-rail-before.jpg')
save(after, f'{OUT}/projects/boat-rail-after.jpg')
save(after, f'{OUT}/gallery/bow-rail-work.jpg')

mbox = Image.open(find('F34014F2')).convert('RGB')
mw, mh = mbox.size
finished = mbox.crop((int(mw * 0.38), int(mh * 0.12), mw, int(mh * 0.88)))
save(finished, f'{OUT}/projects/mailbox-fabrication.jpg')
save(finished, f'{OUT}/gallery/custom-mailbox-work.jpg')

flyer_text = Image.open(find('0CF711B8')).convert('RGB')
save(flyer, f'{OUT}/brand/flyer-with-boat-rail.jpg', quality=85)
save(flyer_text, f'{OUT}/brand/flyer-services.jpg', quality=85)
save(mbox, f'{OUT}/brand/mailbox-social-post.jpg', quality=85)

print('Assets processed successfully')
