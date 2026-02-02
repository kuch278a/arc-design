from django.contrib import admin
from .models import Category, Project, ProjectImage, HomepageContent, ContactMessage, AboutPage

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 3

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'year', 'is_featured')
    list_filter = ('category', 'is_featured')
    search_fields = ('title', 'description')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ProjectImageInline]

@admin.register(HomepageContent)
class HomepageContentAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
    readonly_fields = ('created_at',)

@admin.register(AboutPage)
class AboutPageAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)

admin.site.site_header = "ADObek Design Management"
admin.site.site_title = "ADObek Design Admin Portal"
admin.site.index_title = "Welcome to ADObek Design Management"
