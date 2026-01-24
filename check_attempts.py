import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_site.settings')
django.setup()

from portfolio.models import LoginAttempt

try:
    attempt = LoginAttempt.objects.get(username='admin')
    print(f"LoginAttempt for 'admin': {attempt.count}")
    print(f"Last attempt: {attempt.last_attempt}")
except LoginAttempt.DoesNotExist:
    print("No LoginAttempt recorded for 'admin'.")
