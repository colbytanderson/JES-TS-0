# Server .env.* File Format

***Please do not add double quotes, single quotes or horizontal spaces while filling out the values in the .env files.***

***This is how your values should be entered.***
```javascript
KEY1=Value1
KEY2=Value2
```

### Field Descriptions

---

#### MongoDB Credentials
|Environment Variable               |Description                        |Example Value        
|---                                |---                                |---                         
|jesEcom_MONGODB_DB                  |MongoDB database name              |jesEcomDB
|jesEcom_MONGODB_URL                 |MongoDB connection url             |mongodb://&lt;user&gt;:&lt;password&gt;@&lt;base_url&gt;:&lt;port&gt;/&lt;db_name&gt;
|jesEcom_MONGODB_USER                |Database user with full access     |jesEcom-dev
|jesEcom_MONGODB_PASSWORD            |Password                           |1RGjhGTead

---

#### Redis Credentials
|Environment Variable               |Description                    |Example Value        
|---                                |---                            |---                         
|jesEcom_REDIS_HOST                  |-                              |jesEcom-cache.redis.cache.windows.net
|jesEcom_REDIS_PORT                  |-                              |6380  
|jesEcom_REDIS_PASSWORD              |-                              |AEyEmsndKD
|jesEcom_REDIS_DB_NUMBER             |Recommended value is `0`       |0

---

#### AWS Credentials
|Environment Variable               |Description               
|---                                |---                                                                         
|jesEcom_AWS_ACCESS_KEY_ID           |Programmatic Access Key with S3FullAccess rights. DO NOT USE ROOT USER CREDS
|jesEcom_AWS_SECRET_ACCESS_KEY       |Secret Key

---

#### Payment Services API Keys
|Environment Variable               |Description                                    
|---                                |---                                                                      
|jesEcom_STRIPE_API_KEY              |API Key for Stripe Payment Service               
|jesEcom_KHALTI_API_KEY              |Put in `NA` as value if you have not heard of Khalti before

---

#### Sendgrid API Key
|Environment Variable               |Description        
|---                                |---                              
|jesEcom_SENDGRID_API_KEY            |API Key for SendGrid email service

---

#### Nodemailer Connection Details
**Leave these fields empty if you have already entered Sendgrid API key above. Nodemailer is not recommended for production.**

|Environment Variable                   |Description                                                        |Example Value        
|---                                    |---                                                                |---              
|jesEcom_NODEMAILER_HOST                 |Service Provider Domain                                            |jesEcom.com
|jesEcom_NODEMAILER_PORT                 |`465` if SSL enabled domain, `587` otherwise                       |465
|jesEcom_NODEMAILER_SECURE               |`true` if SSL enabled |`true` or `false`                           |`true`
|jesEcom_NODEMAILER_USER                 |Email address to use                                               |info@jesEcom.com
|jesEcom_NODEMAILER_PASSWORD             |Password of the email address                                      |GPgEYv5un3
|jesEcom_NODEMAILER_REJECT_UNAUTHORIZED  |`false` if jesEcom_NODEMAILER_SECURE is `true`, `false` otherwise   |`false`

---

#### Secret Hash Keys
|Environment Variable               |Description                                |Example Value            
|---                                |---                                        |---
|jesEcom_CRYPTO_SECRET_KEY           |Secret key used to generate tokens         |0FADTgBHzY
|jesEcom_SESSION_SECRET_KEY          |Secret key to generate session tokens      |Mk9pZ2Adth