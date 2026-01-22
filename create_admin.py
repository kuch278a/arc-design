import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_site.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
    print("Superuser created: admin / admin123")
else:
    user = User.objects.get(username='admin')
    user.set_password('admin123')
    user.is_superuser = True
    user.is_staff = True
    user.save()
    print("Superuser 'admin' password reset to: admin123")
