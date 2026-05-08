from PIL import Image, ImageDraw
import os

def process_favicons():
    source = r'C:\Users\kenll\.gemini\antigravity\brain\a3354e49-9412-4350-9549-632e159885a7\haxza_favicon_v2_1778217430825.png'
    dest_dir = r'c:\Users\kenll\Downloads\Haxzadigital\haxzadigital\public'
    root_dir = r'c:\Users\kenll\Downloads\Haxzadigital\haxzadigital'
    
    img = Image.open(source).convert("RGBA")
    width, height = img.size
    
    # Create circular mask
    mask = Image.new('L', (width, height), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, width, height), fill=255)
    
    # Apply mask
    circular_img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    circular_img.paste(img, (0, 0), mask=mask)
    
    # Save versions
    # 1. Circular 32x32 for browser tabs
    circular_32 = circular_img.resize((32, 32), Image.LANCZOS)
    circular_32.save(os.path.join(dest_dir, 'favicon-32x32.png'))
    
    # 2. Circular 192x192 for general use
    circular_192 = circular_img.resize((192, 192), Image.LANCZOS)
    circular_192.save(os.path.join(dest_dir, 'favicon-circle.png'))
    circular_192.save(os.path.join(root_dir, 'favicon.png')) # Overwriting root too
    
    # 3. Keep the SQUARE one for Google specifically, named differently
    img_192 = img.resize((192, 192), Image.LANCZOS)
    img_192.save(os.path.join(dest_dir, 'favicon-square.png'))
    
    print("Favicons processed successfully.")

if __name__ == "__main__":
    process_favicons()
