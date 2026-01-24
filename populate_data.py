import os
import django
from django.core.files import File

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_site.settings')
django.setup()

from portfolio.models import Category, Project, ProjectImage, HomepageContent, AboutPage

# Define image paths
BRAIN_DIR = r"C:\Users\X\.gemini\antigravity\brain\d976ac67-999a-408d-8925-8a68d23659c6"

# Create Categories
commercial, _ = Category.objects.get_or_create(name="Commercial")
residential, _ = Category.objects.get_or_create(name="Residential")
public, _ = Category.objects.get_or_create(name="Public")

# Create Homepage Content
HomepageContent.objects.get_or_create(
    hero_subtitle="Minimalist Design & Spatial Innovation"
)

# 6 Projects Config
PROJECTS_CONFIG = [
    {
        "title": "Modern Office Hub",
        "category": commercial,
        "location": "New York, NY",
        "year": 2023,
        "featured": "office_facade_1_1769271337358.png",
        "gallery": ["office_interior_1_1769271324879.png", "office_lobby_1_1769271350016.png"]
    },
    {
        "title": "Eco Residential Complex",
        "category": residential,
        "location": "Toronto, ON",
        "year": 2024,
        "featured": "residential_exterior_1_1769271363776.png",
        "gallery": ["residential_living_1_1769271376718.png", "residential_garden_1_1769271388528.png"]
    },
    {
        "title": "City Museum Extension",
        "category": public,
        "location": "Berlin, DE",
        "year": 2022,
        "featured": "museum_extension_1_1769271400888.png",
        "gallery": ["museum_gallery_1_1769271414380.png", "museum_atrium_1_1769271428332.png"]
    },
    {
        "title": "Luxury Cliffside Villa",
        "category": residential,
        "location": "Malibu, CA",
        "year": 2025,
        "featured": "villa_exterior_1_1769271894214.png",
        "gallery": ["villa_interior_1_1769271906351.png"]
    },
    {
        "title": "Digital Arts Library",
        "category": public,
        "location": "Tokyo, JP",
        "year": 2024,
        "featured": "library_exterior_1_1769271920158.png",
        "gallery": ["library_interior_1_1769271934661.png"]
    },
    {
        "title": "Global Tech Headquarters",
        "category": commercial,
        "location": "London, UK",
        "year": 2023,
        "featured": "hq_facade_1_1769271948814.png",
        "gallery": ["hq_lobby_1_1769271963059.png"]
    }
]

def populate():
    # Clear existing
    Project.objects.all().delete()
    print("Cleared existing projects.")

    for config in PROJECTS_CONFIG:
        project = Project.objects.create(
            title=config['title'],
            category=config['category'],
            description=f"A state-of-the-art {config['category'].name.lower()} project located in {config['location']}. Award-winning design by ADObek Design.",
            location=config['location'],
            year=config['year'],
            is_featured=True
        )
        
        # Featured
        feat_path = os.path.join(BRAIN_DIR, config['featured'])
        if os.path.exists(feat_path):
            with open(feat_path, 'rb') as f:
                project.featured_image.save(config['featured'], File(f), save=True)
        
        # Gallery
        for gal_name in config['gallery']:
            gal_path = os.path.join(BRAIN_DIR, gal_name)
            if os.path.exists(gal_path):
                with open(gal_path, 'rb') as f:
                    pi = ProjectImage(project=project, caption=gal_name.split('_')[1].capitalize())
                    pi.image.save(gal_name, File(f), save=True)
        
        print(f"Populated: {config['title']}")

if __name__ == "__main__":
    populate()
    print("6 Projects populated successfully.")
