import os
import django
from django.core.files import File
from pathlib import Path

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_site.settings')
django.setup()

from portfolio.models import Category, Project, ProjectImage, HomepageContent, AboutPage, Client

BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / 'static'
ASSETS_DIR = STATIC_DIR / 'assets'
CLIENT_LOGOS_DIR = STATIC_DIR / 'client_logos'

def populate():
    print("--- Seeding Ashara Interiors Data for Beka ---")

    # 1. Categories
    gov, _ = Category.objects.get_or_create(name="Governmental & Civic")
    corp, _ = Category.objects.get_or_create(name="Corporate & Commercial")
    media_cat, _ = Category.objects.get_or_create(name="Media & Production")
    res, _ = Category.objects.get_or_create(name="Luxury Residential")

    # 2. Homepage Content
    hp, _ = HomepageContent.objects.get_or_create(id=1)
    hp.hero_title = "Ashara Interiors"
    hp.hero_subtitle = "Monumental Architecture & Bespoke Spatial Innovation"
    hp.lead_statement = "Led by Principal Architect Beka, Ashara Interiors crafts transcendent spatial experiences for Ethiopia's foremost civic institutions, corporate headquarters, and bespoke luxury estates."
    hp.save()
    print("Updated Homepage Content.")

    # 3. About Page Content (Highlighting Beka)
    about, _ = AboutPage.objects.get_or_create(id=1)
    about.title = "Our Architectural Legacy"
    about.lead_architect = "Beka"
    about.lead_role = "Founder & Principal Interior Architect"
    about.years_of_experience = 15
    about.content = (
        "Founded and directed by Beka, Ashara Interiors has established itself as one of Ethiopia's premier "
        "interior architecture ateliers. With a portfolio spanning presidential state suites, governmental headquarters, "
        "media broadcast complexes, and executive boardrooms, Beka's design philosophy blends monumental architectural "
        "dignity with modern acoustic precision and bespoke craftsmanship.\n\n"
        "Every project is crafted through deep dialogue with our clients, engineering custom timber coffering, "
        "cantilevered structural elements, and circadian lighting systems that stand the test of time."
    )
    about.philosophy = (
        "Architecture is not merely the enclosure of space; it is the choreographing of light, memory, and human dignity. "
        "We believe that exceptional civic and residential spaces cultivate pride, inspire focus, and elevate the spirit."
    )
    about.pillar_one_title = "Monumental Architecture"
    about.pillar_one_desc = "Synthesizing Ethiopian cultural heritage with refined modernist civic design and monumental scale."
    about.pillar_two_title = "Bespoke Craftsmanship"
    about.pillar_two_desc = "Precision-engineered acoustics, artisanal timber joinery, and tailored luxury materiality."
    about.pillar_three_title = "Sustainable Innovation"
    about.pillar_three_desc = "Circadian lighting automation, biophilic integration, and enduring environmental responsibility."

    # Attach profile image if available
    profile_img_path = BASE_DIR / 'media' / 'profile' / 'telegram_profile.jpg'
    if profile_img_path.exists():
        with open(profile_img_path, 'rb') as f:
            about.image.save('beka_profile.jpg', File(f), save=False)
    about.save()
    print("Updated About Page for Beka.")

    # 4. Signature Ashara Projects
    Project.objects.all().delete()
    print("Cleared existing projects.")

    ASHARA_PROJECTS = [
        {
            "title": "Prosperity Party State Suite",
            "subtitle": "PRESIDENTIAL STATE SUITE & CONVENTION HQ",
            "client": "Prosperity Party",
            "category": gov,
            "location": "Addis Ababa, Ethiopia",
            "year": 2024,
            "featured_img": ASSETS_DIR / "p1_prosperity.png",
            "fallback_img": CLIENT_LOGOS_DIR / "prosperity_party_hero.png",
            "gallery": [
                CLIENT_LOGOS_DIR / "prosperity_party_main.jpg",
                CLIENT_LOGOS_DIR / "prosperity_party_hero.png"
            ],
            "description": (
                "Ashara Interiors and lead architect Beka were commissioned to design a grand presidential state suite "
                "and governmental convention headquarters. Integrating monumental Ethiopian historical motifs with "
                "contemporary civic transparency, the project features bespoke coffered timber acoustic domes, structural "
                "cantilevered glass staircases, and executive ceremonial boardrooms designed to host heads of state."
            )
        },
        {
            "title": "Ethiopia Federal Police Headquarters",
            "subtitle": "NATIONAL OPERATIONS & CIVIC CAMPUS",
            "client": "Ethiopia Federal Police",
            "category": gov,
            "location": "Addis Ababa, Ethiopia",
            "year": 2024,
            "featured_img": ASSETS_DIR / "p2_police.png",
            "fallback_img": CLIENT_LOGOS_DIR / "Addis_Ababa_Police.jpg",
            "gallery": [
                CLIENT_LOGOS_DIR / "oromia_police.png"
            ],
            "description": (
                "A modern, high-security civic campus designed by Beka, combining robust architectural concrete finishes "
                "with acoustic modular panels, advanced climate automation, and efficient spatial routing for national "
                "federal operations. The complex integrates command centers, executive debriefing suites, and ceremonial halls."
            )
        },
        {
            "title": "Ministry of Revenues Complex",
            "subtitle": "MINISTERIAL CIVIC AUDITORIUM & EXECUTIVE SUITES",
            "client": "Ministry of Revenues",
            "category": gov,
            "location": "Addis Ababa, Ethiopia",
            "year": 2023,
            "featured_img": ASSETS_DIR / "p6_revenues.png",
            "fallback_img": CLIENT_LOGOS_DIR / "ministry_of_revenues_hero.jpg",
            "gallery": [
                CLIENT_LOGOS_DIR / "ministry_of_revenues_auditorium.jpg",
                CLIENT_LOGOS_DIR / "ministry_of_revenues_hero.jpg"
            ],
            "description": (
                "A monumental civic dome auditorium incorporating geodesic timber space trusses, ambient indirect circadian "
                "lighting, and custom acoustical plasterwork engineered by Ashara Interiors for national revenue assemblies "
                "and executive ministerial summits."
            )
        },
        {
            "title": "Fana Broadcasting Corporation Atelier",
            "subtitle": "TELEVISION BROADCAST & MULTIMEDIA ATELIER",
            "client": "FBC Media",
            "category": media_cat,
            "location": "Addis Ababa, Ethiopia",
            "year": 2023,
            "featured_img": ASSETS_DIR / "p3_fana.png",
            "fallback_img": None,
            "gallery": [],
            "description": (
                "A state-of-the-art multimedia broadcast studio and corporate headquarters featuring circular parametric "
                "acoustic galleries, sound-isolated live recording suites, and sunlit collaborative editing lounges "
                "designed for high-intensity 24/7 broadcasting."
            )
        },
        {
            "title": "United Beverages Corporate HQ",
            "subtitle": "EXECUTIVE COMMERCIAL HEADQUARTERS",
            "client": "United Beverages",
            "category": corp,
            "location": "Addis Ababa, Ethiopia",
            "year": 2023,
            "featured_img": ASSETS_DIR / "p4_beverages.png",
            "fallback_img": None,
            "gallery": [],
            "description": (
                "A neoclassical corporate palace designed by Ashara Interiors featuring double-height marble entrance colonnades, "
                "brushed brass accent joinery, and private executive lounges that embody institutional prestige and enduring elegance."
            )
        },
        {
            "title": "Amibara Properties Commercial Hub",
            "subtitle": "COMMERCIAL REAL ESTATE HEADQUARTERS",
            "client": "Amibara Properties",
            "category": corp,
            "location": "Addis Ababa, Ethiopia",
            "year": 2024,
            "featured_img": ASSETS_DIR / "p5_amibara.png",
            "fallback_img": None,
            "gallery": [],
            "description": (
                "A dual-level contemporary commercial showpiece with dramatic glass-cantilevered staircase architecture, "
                "polished Italian terrazzo flooring, and floor-to-ceiling panoramic facade glazing designed to maximize natural light."
            )
        }
    ]

    for p_data in ASHARA_PROJECTS:
        proj = Project(
            title=p_data['title'],
            subtitle=p_data['subtitle'],
            client=p_data['client'],
            category=p_data['category'],
            location=p_data['location'],
            year=p_data['year'],
            description=p_data['description'],
            is_featured=True
        )

        img_to_use = None
        if p_data['featured_img'] and p_data['featured_img'].exists():
            img_to_use = p_data['featured_img']
        elif p_data['fallback_img'] and p_data['fallback_img'].exists():
            img_to_use = p_data['fallback_img']

        if img_to_use:
            with open(img_to_use, 'rb') as f:
                proj.featured_image.save(img_to_use.name, File(f), save=False)
        
        proj.save()

        # Add gallery images
        for g_img in p_data.get('gallery', []):
            if g_img and g_img.exists():
                with open(g_img, 'rb') as f:
                    pi = ProjectImage(project=proj, caption=f"{proj.title} Gallery")
                    pi.image.save(g_img.name, File(f), save=True)

        print(f"Populated Project: {proj.title}")

    # 5. Client Matrix
    Client.objects.all().delete()
    print("Cleared existing clients.")

    CLIENTS_CONFIG = [
        # Governmental
        ("Prosperity Party", "GOVERNMENTAL", "Prosperity_Party_Prosperity.png"),
        ("Ethiopia Federal Police", "GOVERNMENTAL", "Addis_Ababa_Police.jpg"),
        ("Ministry of Revenues", "GOVERNMENTAL", "Ministry_of_Revenues.jpg"),
        ("Addis Ababa Police Commission", "GOVERNMENTAL", "addis_ababa_police.png"),
        ("Ethiopian Customs Commission", "GOVERNMENTAL", "customs_commission.png"),
        ("Ethiopian Artificial Intelligence Institute", "GOVERNMENTAL", "eaii_institute.png"),
        ("Oromia Police Commission", "GOVERNMENTAL", "oromia_police.png"),
        ("Policy Studies Institute", "GOVERNMENTAL", "bw_policy_studies_institute.jpg"),
        ("Oromia President Office", "GOVERNMENTAL", "bw_oromia_president_office.jpg"),
        # Corporate & Commercial
        ("United Beverages", "CORPORATE", "united_beverages.png"),
        ("Amibara Properties", "CORPORATE", "amibara_properties.png"),
        ("Hill Bottom Recreation Center", "CORPORATE", "hill_bottom.png"),
        # Media & Production
        ("Fana Broadcasting Corporation", "MEDIA", "fbc_media.png"),
        ("Ethiopian Press Agency", "MEDIA", "Ethiopian_Press_Agency.png"),
        ("Mela Muziqa", "MEDIA", "mela_muziqa.png"),
    ]

    for idx, (c_name, c_cat, c_logo_file) in enumerate(CLIENTS_CONFIG, start=1):
        client = Client(
            name=c_name,
            category=c_cat,
            static_logo=c_logo_file,
            order=idx
        )
        logo_path = CLIENT_LOGOS_DIR / c_logo_file
        if logo_path.exists():
            with open(logo_path, 'rb') as f:
                client.logo.save(c_logo_file, File(f), save=False)
        client.save()

    print(f"Populated {len(CLIENTS_CONFIG)} official clients in Client Matrix.")

if __name__ == "__main__":
    populate()
    print("Ashara Interiors database population complete.")
