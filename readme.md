# Send Email on EQUELLA Item Edit

These scripts, in combination, will send an email notifying a user that an item they contributed has been edited, with a link back to the item. CCA uses it notify students that their work has been flagged by Communications & thus will potentially be used for marketing purposes. See section below for full configuration instructions.

You can test run the email script yourself locally:

```sh
> ./item-edited-email.sh 'name@email.edu' 'http://abc.edu/item/url'
```

If you have `sendmail` on installed locally on your laptop, it should work. You could also upload to your server & test from there.

## Setup

- Requires `sendmail` on your server, which most UNIX systems come with
- Read through each script & customize the variables & email message to your liking
- Upload the "item-edited-email.sh" script to _all_ of your EQUELLA app server(s)
    + The provided "deploy.sh" script will do this for you if you fill in your server's addresses or SSH aliases
- Add the "on-submit-asc.js" as an **Advanced Scripting Control** in the desired Contribution Wizard, under the "On-Submit Script" section towards the bottom

## License

[Apache Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
