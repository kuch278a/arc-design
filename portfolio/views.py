from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from .models import Project, Category, HomepageContent
from .forms import ContactForm

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

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent successfully! We will get back to you soon.')
            return redirect('contact')
    else:
        form = ContactForm()
    
    context = {
        'form': form,
    }
    return render(request, 'portfolio/contact.html', context)

def project_detail(request, slug):
    project = get_object_or_404(Project, slug=slug)
    context = {
        'project': project,
    }
    return render(request, 'portfolio/project_detail.html', context)
