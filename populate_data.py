import os
import django
from django.core.files import File
import requests

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

# Create Projects Data mapping to generated images
PROJECTS_CONFIG = [
    {
        "title": "Modern Office Hub",
        "category": commercial,
        "description": "A contemporary office space designed for collaboration and productivity. Featuring open-plan layouts and sustainable materials.",
        "location": "New York, NY",
        "year": 2023,
        "featured": "office_facade_1_1769271337358.png",
        "gallery": [
            "office_interior_1_1769271324879.png",
            "office_lobby_1_1769271350016.png"
        ]
    },
    {
        "title": "Eco Residential Complex",
        "category": residential,
        "description": "A sustainable housing project that integrates nature into urban living. Vertical gardens and solar panels are core features.",
        "location": "Toronto, ON",
        "year": 2024,
        "featured": "residential_exterior_1_1769271363776.png",
        "gallery": [
            "residential_living_1_1769271376718.png",
            "residential_garden_1_1769271388528.png"
        ]
    },
    {
        "title": "City Museum extension",
        "category": public,
        "description": "An organic extension to the historical city museum, creating a dialogue between the old and the new.",
        "location": "Berlin, DE",
        "year": 2022,
        "featured": "museum_extension_1_1769271400888.png",
        "gallery": [
            "museum_gallery_1_1769271414380.png",
            "museum_atrium_1_1769271428332.png"
        ]
    }
]

def populate():
    # Clear existing projects to avoid duplicates during this 'do it' phase
    Project.objects.all().delete()
    print("Cleared existing projects.")

    for config in PROJECTS_CONFIG:
        project = Project.objects.create(
            title=config['title'],
            category=config['category'],
            description=config['description'],
            location=config['location'],
            year=config['year'],
            is_featured=True
        )
        
        # Add featured image
        feat_path = os.path.join(BRAIN_DIR, config['featured'])
        if os.path.exists(feat_path):
            with open(feat_path, 'rb') as f:
                project.featured_image.save(config['featured'], File(f), save=True)
        
        # Add gallery images
        for gal_name in config['gallery']:
            gal_path = os.path.join(BRAIN_DIR, gal_name)
            if os.path.exists(gal_path):
                with open(gal_path, 'rb') as f:
                    pi = ProjectImage(project=project, caption=gal_name.split('_')[1].capitalize())
                    pi.image.save(gal_name, File(f), save=True)
        
        print(f"Populated project: {config['title']}")

if __name__ == "__main__":
    populate()
    print("Database populated with premium images successfully.")
