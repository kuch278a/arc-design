import os
import django
from django.contrib.auth import authenticate
from django.contrib.auth.signals import user_login_failed

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_site.settings')
django.setup()

from portfolio.models import LoginAttempt

def simulate_failed_login(username, password):
    print(f"Simulating failed login for {username}...")
    # Manual trigger of signal since authenticate() might not trigger it in a script
    credentials = {'username': username, 'password': password}
    user_login_failed.send(sender=None, credentials=credentials, request=None)

# Reset attempts first
LoginAttempt.objects.filter(username='admin').delete()
print("Cleared previous attempts for 'admin'.")

# Simulate 3 failures
for i in range(1, 4):
    simulate_failed_login('admin', 'wrong_password')
    attempt = LoginAttempt.objects.get(username='admin')
    print(f"Attempt {i}: Count is {attempt.count}")

print("Check the console output above for the simulated email notification.")
