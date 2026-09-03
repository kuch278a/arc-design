from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from .models import Project, Category, HomepageContent, AboutPage, Client
from .forms import ContactForm

def home(request):
    featured_projects = Project.objects.filter(is_featured=True)[:6]
    content = HomepageContent.objects.first()
    about = AboutPage.objects.first()
    clients = Client.objects.all().order_by('order')
    context = {
        'featured_projects': featured_projects,
        'content': content,
        'about': about,
        'clients': clients,
    }
    return render(request, 'portfolio/home.html', context)

def project_list(request):
    category_slug = request.GET.get('category')
    categories = Category.objects.all()
    projects = Project.objects.all().order_by('-year')
    current_category = None
    if category_slug:
        current_category = get_object_or_404(Category, slug=category_slug)
        projects = projects.filter(category=current_category)

    context = {
        'projects': projects,
        'categories': categories,
        'current_category': current_category,
    }
    return render(request, 'portfolio/project_list.html', context)

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Thank you! Your inquiry has been delivered directly to Beka and the Ashara design team. We will be in touch shortly.')
            return redirect('contact')
    else:
        form = ContactForm()
    
    about = AboutPage.objects.first()
    context = {
        'form': form,
        'about': about,
    }
    return render(request, 'portfolio/contact.html', context)

def about(request):
    about_content = AboutPage.objects.first()
    clients = Client.objects.all().order_by('order')[:16]
    context = {
        'about': about_content,
        'clients': clients,
    }
    return render(request, 'portfolio/about.html', context)

def project_detail(request, slug):
    project = get_object_or_404(Project, slug=slug)
    related_projects = Project.objects.filter(category=project.category).exclude(id=project.id)[:3]
    context = {
        'project': project,
        'related_projects': related_projects,
    }
    return render(request, 'portfolio/project_detail.html', context)
