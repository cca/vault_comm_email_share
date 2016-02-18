/* global system,xml,currentItem */

// institution-specific settings
var domain = 'cca.edu'
var root = 'https://vault.cca.edu'
var scriptHome = '/Users/ephetteplace'
var unXpath = 'mods/name/subNameWrapper/username'
var un = String(xml.get(unXpath))

// @TODO add a 2nd condition here, don't want to notify on just _any_ edit
// only send an email if we actually have a username
if (un) {
    var path = scriptHome + '/item-edited-email.sh'
    var itemUrl = [root, currentItem.getUuid(), currentItem.getVersion()].join('/') + '/'
    var params = [un + '@' + domain, itemUrl]
    // see also: system.executeInBackground() which is async
    // script syntax: `item-edited-email.sh 'name@email.edu' 'http://abc.edu/item/url'`
    var result = system.execute(path, params)
}
