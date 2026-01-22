import os
import django
from django.core.files.base import ContentFile
import requests

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_site.settings')
django.setup()

from portfolio.models import Category, Project, ProjectImage, HomepageContent, AboutPage
from django.contrib.auth import get_user_model

# Create Categories
commercial, _ = Category.objects.get_or_create(name="Commercial")
residential, _ = Category.objects.get_or_create(name="Residential")
public, _ = Category.objects.get_or_create(name="Public")

# Create Homepage Content
HomepageContent.objects.get_or_create(
    hero_subtitle="Minimalist Design & Spatial Innovation"
)

# Create About Page Content
about_page, created = AboutPage.objects.get_or_create(
    title="Our Story",
    defaults={
        'content': "We are a design-led architectural practice committed to creating spaces that inspire and endure. Our approach blends technical precision with creative intuition, resulting in architecture that is both functional and emotionally resonant.",
        'years_of_experience': 15,
        'philosophy': "Simplicity is the ultimate sophistication. We strive to create designs that are as functional as they are beautiful.",
        'image': 'profile/telegram_profile.jpg'
    }
)
if not created:
    about_page.image = 'profile/telegram_profile.jpg'
    about_page.save()

# Function to download a placeholder if image generation failed
def get_placeholder(name):
    # Just create a small blank image if download fails, but let's try a reliable placeholder
    try:
        response = requests.get(f"https://placehold.co/1200x800/222/white?text={name}")
        return ContentFile(response.content, name=f"{name}.jpg")
    except:
        return None

# Create Projects
if not Project.objects.exists():
    p1 = Project.objects.create(
        title="Modern Office Hub",
        category=commercial,
        description="A contemporary office space designed for collaboration and productivity. Featuring open-plan layouts and sustainable materials.",
        location="New York, NY",
        year=2023,
        is_featured=True
    )
    img1 = get_placeholder("Office_Hub")
    if img1: p1.featured_image.save("office.jpg", img1)

    p2 = Project.objects.create(
        title="Eco Residential Complex",
        category=residential,
        description="A sustainable housing project that integrates nature into urban living. Vertical gardens and solar panels are core features.",
        location="Toronto, ON",
        year=2024,
        is_featured=True
    )
    img2 = get_placeholder("Eco_Residential")
    if img2: p2.featured_image.save("residential.jpg", img2)

    p3 = Project.objects.create(
        title="City Museum extension",
        category=public,
        description="An organic extension to the historical city museum, creating a dialogue between the old and the new.",
        location="Berlin, DE",
        year=2022,
        is_featured=True
    )
    img3 = get_placeholder("Museum_Extension")
    if img3: p3.featured_image.save("museum.jpg", img3)

print("Sample data populated successfully.")
