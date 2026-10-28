# Form delivery

The public pages post Contact, estimate, owner, and maintenance inquiries as JSON. They do not open the visitor’s email app. Success is shown only when the form host returns `success: true` or `ok: true`.

No form host is connected. `DRAKA.forms.accessKey` and `DRAKA.forms.endpoint` in `js/data.js` are empty, so the pages tell the visitor the message was not sent. There is no secret key in this folder.

## Connect the free Web3Forms inbox

Web3Forms is the host these pages already speak to. The free plan does not require a card. The access key is a public alias for the office inbox, not a password. Web3Forms says it is safe to put that key in the website.

1. Open https://web3forms.com and enter `drakaLLC@gmail.com` as the recipient.
2. Open the message Web3Forms sends to that inbox and copy the access key.
3. Paste the key into `forms.accessKey` in `js/data.js`. Leave `endpoint` empty.
4. In the Web3Forms dashboard, turn on the honeypot. Restrict the form to `aidenmvb.github.io` while this is the preview, and add `drakallc.com` only when that site is published.
5. Publish the website again. The form hint changes to a confirmation line, and a submission is delivered only after Web3Forms accepts it.

Web3Forms checks the submission on its server, including spam filtering. This site also checks the name, email, and message before sending, ignores a filled honeypot, blocks a second click while a request is in flight, and will not send the same message again after one has been accepted.

Do not put a Web3Forms account password, API token, or any other secret in `js/`. The access key only allows someone to send mail to the office.

## Optional endpoint

`forms.endpoint` replaces `https://api.web3forms.com/submit` when it is set. A replacement must accept `POST` JSON and return HTTP 200 with `{ "success": true }` only after it accepts the message. Anything else keeps the visitor’s entries on the form.
