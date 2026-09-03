from django import forms
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'phone', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Your Name', 'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Your Email', 'class': 'form-control'}),
            'phone': forms.TextInput(attrs={'placeholder': 'Your Phone (Optional)', 'class': 'form-control'}),
            'subject': forms.TextInput(attrs={'placeholder': 'Subject / Project Scope', 'class': 'form-control'}),
            'message': forms.Textarea(attrs={'placeholder': 'Tell us about your project vision, timeline, and location...', 'class': 'form-control', 'rows': 5}),
        }
