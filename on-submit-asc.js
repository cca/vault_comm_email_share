/* global system,xml */

// institution-specific settings
var domain = 'cca.edu'
var scriptHome = '/Users/ephetteplace'

// is this the best way to get a username?
// I don't trust us to have it under mods/name/subNameWrapper/username always
var un = String(xml.get('item/history/contributed'))
// sometimes we don't have a contributed entry? look for first edit event
if (!un) un = String(xml.get('item/history/edit'))

// @TODO add a 2nd condition here, don't want to notify on just _any_ edit
// only send an email if we actually have a username
if (un) {
    var path = scriptHome + '/item-edited-email.sh'
    var params = [un + '@' + domain, item.getUrl()]
    // see also: system.executeInBackground() which is async
    // script syntax: `item-edited-email.sh 'name@email.edu' 'http://abc.edu/item/url'`
    var result = system.execute(path, params)

    // using ExecutionResultScriptType documentation from EQUELLA scripting API
    var code = result.getCode()
    // if successful, these should both be empty
    var stderr = result.getErrorOutput()
    var stdout = result.getStandardOutput()

    // @TODO remove debugging code once I'm sure this works
    // debug function
    var db = function (str) {
        if (str) xml.add('debug', str)
    }
    db('exit code: ' + code)
    db('stderr: ' + stderr)
    db('stdout: ' + stdout)
}
