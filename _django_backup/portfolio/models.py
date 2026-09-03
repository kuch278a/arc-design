from django.db import models
from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True, default='')
    client = models.CharField(max_length=200, blank=True, default='')
    slug = models.SlugField(unique=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='projects')
    description = models.TextField()
    location = models.CharField(max_length=200)
    year = models.IntegerField()
    featured_image = models.ImageField(upload_to='projects/')
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='projects/gallery/')
    caption = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"{self.project.title} - Image {self.id}"

class HomepageContent(models.Model):
    hero_title = models.CharField(max_length=200, default="Ashara Interiors")
    hero_subtitle = models.CharField(max_length=300, default="Monumental Architecture & Bespoke Interior Design")
    lead_statement = models.TextField(
        default="Curating transcendent spatial experiences across Ethiopia's landmark civic institutions, luxury residences, and corporate headquarters."
    )
    
    class Meta:
        verbose_name = "Homepage Content"
        verbose_name_plural = "Homepage Content"

    def __str__(self):
        return "Homepage Content Settings"

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True, default='')
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"

class AboutPage(models.Model):
    title = models.CharField(max_length=200, default="Our Architectural Legacy")
    lead_architect = models.CharField(max_length=200, default="Beka")
    lead_role = models.CharField(max_length=200, default="Founder & Principal Interior Architect")
    content = models.TextField()
    image = models.ImageField(upload_to='about/', null=True, blank=True)
    years_of_experience = models.IntegerField(default=15)
    philosophy = models.TextField(blank=True, null=True)
    pillar_one_title = models.CharField(max_length=200, default="Monumental Architecture")
    pillar_one_desc = models.TextField(default="Synthesizing Ethiopian cultural heritage with refined modernist civic design.")
    pillar_two_title = models.CharField(max_length=200, default="Bespoke Craftsmanship")
    pillar_two_desc = models.TextField(default="Acoustic engineering, custom joinery, and tailored luxury materiality.")
    pillar_three_title = models.CharField(max_length=200, default="Sustainable Innovation")
    pillar_three_desc = models.TextField(default="Circadian lighting, biophilic integration, and environmental longevity.")
    
    class Meta:
        verbose_name = "About Page"
        verbose_name_plural = "About Page"

    def __str__(self):
        return "About Page Content"

class Client(models.Model):
    TIER_CHOICES = [
        ('GOVERNMENTAL', 'Governmental & Civic'),
        ('CORPORATE', 'Corporate & Financial'),
        ('MEDIA', 'Media & Hospitality'),
    ]
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=TIER_CHOICES, default='GOVERNMENTAL')
    logo = models.ImageField(upload_to='clients/', blank=True, null=True)
    static_logo = models.CharField(max_length=255, blank=True, default='', help_text="Filename in static/client_logos/")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

class LoginAttempt(models.Model):
    username = models.CharField(max_length=255)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    count = models.IntegerField(default=0)
    last_attempt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.username} - {self.count} attempts"
