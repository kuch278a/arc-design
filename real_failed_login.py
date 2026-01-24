import requests

# Use session to handle cookies (CSRF)
session = requests.Session()

login_url = 'http://127.0.0.1:8000/admin/login/'

# 1. Get CSRF token
print("Fetching login page for CSRF token...")
response = session.get(login_url)
csrftoken = session.cookies['csrftoken']

# 2. Attempt failed login 3 times
payload = {
    'username': 'admin',
    'password': 'wrongpassword123',
    'csrfmiddlewaretoken': csrftoken,
    'next': '/admin/'
}

for i in range(1, 4):
    print(f"Attempting failed login {i}...")
    # Standard Django admin login is a POST to the same URL
    response = session.post(login_url, data=payload, headers={'Referer': login_url})
    
    if "Please enter a correct username and password" in response.text:
        print(f"Attempt {i} failed as expected.")
    else:
        print(f"Unexpected response on attempt {i}.")

print("\nFinished 3 attempts. Now check the Django runserver console for the email output!")
