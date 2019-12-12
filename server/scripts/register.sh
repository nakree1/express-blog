curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "username" : "max_test", "email": "max@mail.com", "password": "123456" }' \
  localhost:3010/api/auth/sign_up
