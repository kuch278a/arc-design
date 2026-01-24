from django.contrib.auth.signals import user_login_failed
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings
from .models import LoginAttempt

@receiver(user_login_failed)
def track_login_failure(sender, credentials, request, **kwargs):
    username = credentials.get('username')
    if username == 'admin':
        # Get or create login attempt record
        ip = request.META.get('REMOTE_ADDR') if request else None
        attempt, created = LoginAttempt.objects.get_or_create(
            username=username,
            defaults={'ip_address': ip}
        )
        
        attempt.count += 1
        attempt.save()
        
        if attempt.count >= 3:
            # Send email notification
            subject = f"Security Alert: Multiple Failed Login Attempts for {username}"
            message = (
                f"There have been {attempt.count} failed login attempts for the '{username}' account.\n"
                f"Last attempt from IP: {ip}\n"
                f"Please check your security logs."
            )
            from_email = settings.DEFAULT_FROM_EMAIL
            recipient_list = [getattr(settings, 'ADMIN_NOTIFICATION_EMAIL', 'admin@example.com')]
            
            try:
                send_mail(subject, message, from_email, recipient_list)
                print(f"Login failure notification sent to {recipient_list}")
            except Exception as e:
                print(f"Failed to send security email: {e}")
