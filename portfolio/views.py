from django.shortcuts import render, get_object_or_404
from .models import Project, Category, HomepageContent

def home(request):
    featured_projects = Project.objects.filter(is_featured=True)[:3]
    content = HomepageContent.objects.first()
    context = {
        'featured_projects': featured_projects,
        'content': content,
    }
    return render(request, 'portfolio/home.html', context)

def project_list(request):
    projects = Project.objects.all().order_by('-year')
    categories = Category.objects.all()
    context = {
        'projects': projects,
        'categories': categories,
    }
    return render(request, 'portfolio/project_list.html', context)

def project_detail(request):
    # This function expects a slug, but I forgot to add it to the signature in urls.py maybe?
    # No, urls.py has <slug:slug>. Let me fix the signature.
    pass

def project_detail(request, slug):
    project = get_object_or_404(Project, slug=slug)
    context = {
        'project': project,
    }
    return render(request, 'portfolio/project_detail.html', context)
