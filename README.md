# Express Minimal Starer
Node.js x Express x TypeScript copy-pasteable minimal starter template.  

## Run
First terminal:
```
% npm i
% npm run dev
```

Second terminal(send request):
```
curl --location --request POST 'http://localhost:4100/hello' \
--header 'Content-Type: application/json' \
--data-raw '{
    "nick_name": "rem"
}'
```

get response
```
{
  "nick_name": "rem",
  "symbol": "!@#$%^&*()"<>"
}
```

## Config
- env file(dotenv): .env.dev