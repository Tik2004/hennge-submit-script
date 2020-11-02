# HENNGE submission challenge

### Japanese company named Hennge is challenging people who want to get a job, when you are done with the challenge, you have to submit it like :

***

Build your solution request

First, construct a JSON string like below:

{

  "github_url": "https://github.com/YOUR_ACCOUNT/GITHUB_REPOSITORY",

  "contact_email": "YOUR_EMAIL"
}

Fill in your email address for YOUR_EMAIL, and the private Github repository with your solution in YOUR_ACCOUNT/GITHUB_REPOSITORY. Then, make an HTTP POST request to the following URL with the JSON string as the body part.

CHALLENGE_URL

Content type

The Content-Type: of the request must be application/json.

Authorization

The URL is protected by HTTP Basic Authentication, which is explained on Chapter 2 of RFC2617, so you have to provide an Authorization: header field in your POST request.

For the userid of HTTP Basic Authentication, use the same email address you put in the JSON string. For the password , provide a 10-digit time-based one time password conforming to RFC6238 TOTP. Authorization password

For generating the TOTP password, you will need to use the following setup:

You have to generate a correct TOTP password according to RFC6238 TOTP's Time Step X is 30 seconds. T0 is 0. Use HMAC-SHA-512 for the hash function, instead of the default HMAC-SHA-1. Token shared secret is the userid followed by ASCII string value "APICHALLENGE" (not including double quotations). Shared secret examples

For example, if the userid is "email@example.com", the token shared secret is "email@example.comAPICHALLENGE" (without quotes).

If your POST request succeeds, the server returns HTTP status code 200 .

***

# I have the script to submit it

