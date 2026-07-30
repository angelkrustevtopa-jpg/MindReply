from PIL import Image, ImageDraw

def create_icon(size, path):
    # Create a dark blue background
    img = Image.new('RGB', (size, size), color='#122033')
    draw = ImageDraw.Draw(img)
    
    # Draw a gold 'M' in the center
    # Simple representation of the logo
    margin = size // 4
    draw.text((margin, margin), "M", fill='#e2b757')
    
    img.save(path)

import os
os.makedirs('/home/ubuntu/MindReply/public/assets/images', exist_ok=True)
create_icon(192, '/home/ubuntu/MindReply/public/assets/images/icon-192.png')
create_icon(512, '/home/ubuntu/MindReply/public/assets/images/icon-512.png')
print("Icons generated.")
