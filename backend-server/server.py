from flask import Flask
import mailchimp_transactional as MailchimpTransactional
from mailchimp_transactional.api_client import ApiClientError

app = Flask(__name__)

@app.route("/sendemail")
def sendemail():
    try:
        client = MailchimpTransactional.Client("L5daTct_FNKI1FOQmWXWHg")
        response = client.messages.send({"message": {
            "text":"Hello my friend are you there?",
            "subject":"Checking up on you",
            "from_email":"njmwas@picpazz.com",
            "from_name":"Julius Moringa",
            "to":[{
                "email":"njmwas@gmail.com",
                "name":"Mr Julius"
            }],
            "signing_domain":"www.picpazz.com"
        }})
        print(response)
    except ApiClientError as error:
        print("An exception occurred: {}".format(error.text))

    return "Sending email"