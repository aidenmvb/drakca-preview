# Form delivery

The public pages post Contact, estimate, owner, and maintenance inquiries as JSON. They do not open the visitor’s email app. Success is shown only when the form host returns `success: true` or `ok: true`.

The preview copies the access key from `~/.config/draka/web3forms-access-key` into `forms.accessKey`. `forms.endpoint` stays empty. That key is a public alias for `drakcaom@gmail.com`. A key created for an earlier inbox still delivers to that inbox, so do not install one.

## Connect the free Web3Forms inbox

Web3Forms is the host these pages already speak to. The free plan does not require a card. The access key is a public alias for the office inbox, not a password. Web3Forms says it is safe to put that key in the website.

1. Open https://web3forms.com and enter `drakcaom@gmail.com` as the recipient. An access key created for an earlier inbox still delivers to that inbox. Changing the address on the website does not move it.
2. Open the message Web3Forms sends to `drakcaom@gmail.com` and copy only the access key.
3. Save that key in `~/.config/draka/web3forms-access-key`. Do not paste it into chat. Leave `forms.endpoint` empty. The site copies the key into `forms.accessKey` when the preview is published.
4. The forms already include a honeypot. Web3Forms domain restriction is a paid option, so it is not part of this free setup.
5. Publish the preview again. The form hint changes to a confirmation line, and a submission is delivered only after Web3Forms accepts it.

Web3Forms checks the submission on its server, including spam filtering. This site also checks the name, email, and message before sending, ignores a filled honeypot, blocks a second click while a request is in flight, and will not send the same message again after one has been accepted.

Do not put a Web3Forms account password, API token, or any other secret in `js/`. The access key only allows someone to send mail to the office.

## Optional endpoint

`forms.endpoint` replaces `https://api.web3forms.com/submit` when it is set. A replacement must accept `POST` JSON and return HTTP 200 with `{ "success": true }` only after it accepts the message. Anything else keeps the visitor’s entries on the form.
