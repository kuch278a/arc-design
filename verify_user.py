import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_site.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()
try:
    user = User.objects.get(username='admin')
    print(f"User found: {user.username}")
    print(f"Is superuser: {user.is_superuser}")
    print(f"Is staff: {user.is_staff}")
    print(f"Is active: {user.is_active}")
    print(f"Has password set: {user.has_usable_password()}")
except User.DoesNotExist:
    print("User 'admin' does not exist.")
except Exception as e:
    print(f"Error: {e}")
